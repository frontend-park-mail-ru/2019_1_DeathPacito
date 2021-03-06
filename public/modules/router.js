/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';
/**
 * Class used to manage views (routes) switching
 */
class Router {
  /**
   * Router constructor
   * @param {Node} rootEl - DOM element
   */
  constructor(rootEl) {
    if (!(rootEl instanceof Node)) {
      throw new TypeError('rootEl must be Node');
    }
    this._rootEl = rootEl;
    this._routeMakerFns = {};
    this._defaultRoutePath = null;
    this._currentRoute = null;
    this.notFoundRouteMaker = null;
  }

  /**
   * Adds route to the router
   * @param {String} path - url
   * @param {Function} routeMakerFn - function returning new Route object
   */
  addRoute(path, routeMakerFn) {
    if (typeof path !== 'string') {
      return;
    }
    if (typeof routeMakerFn !== 'function') {
      return;
    }

    this._routeMakerFns[path] = routeMakerFn;
  }

  /**
   * Sets default route
   * @param {String} path - url
   */
  setDefaultRoute(path) {
    if (typeof path !== 'string') {
      return;
    }

    this._defaultRoutePath = path;
  }

  /**
   * Initializes the router
   */
  init() {
    this.routeTo(this._defaultRoutePath, false);
  }

  /**
   * Redirects and renders required page
   * @param {String} path - url
   */
  routeTo(path, shouldBePushed = true) {
    if (typeof path !== 'string') {
      return;
    }

    if (shouldBePushed) {
      console.log('Pushing', path);

      // TODO: maybe we shouldn't push logout?
      history.pushState(null, null, path);
    } else {
      console.log('Poping', path);
    }

    if (this._currentRoute) {
      if (this._currentRoute.deinit) {
        this._currentRoute.deinit();
      }
      this._currentRoute = null;
    }

    let routeMakerFn = this._routeMakerFns[path];
    if (!routeMakerFn) {
      console.log('OI MATE');
      routeMakerFn = this.notFoundRouteMaker;
    }

    const route = routeMakerFn(this._rootEl, this);
    if (!route) {
      return;
    }

    this._currentRoute = route;
    if (route.init) {
      route.init();
    }
  }
}

/**
 * Anchors routes on link by event listeners
 * @param {Node} rootEl - DOM element
 * @param {Function} router - route object
 */
function initAnchorsRouting(rootEl, router) {
  if (!(rootEl instanceof Node)) {
    return;
  }
  if (!(router instanceof Router)) {
    return;
  }

  rootEl.addEventListener('click', (ev) => {
    if (!(ev.target instanceof HTMLAnchorElement)) {
      return;
    }

    ev.preventDefault();

    const path = ev.target.getAttribute('href');
    router.routeTo(path);
    console.log(`<a> go to ${path}`);
  });

  window.addEventListener('popstate', function() {
    console.log(location.pathname);
    router.routeTo(location.pathname, false);
  }, false);
}

Handlebars.registerHelper('pagination',
    function(currentPage, totalPage, size, options) {
      let startPage; let endPage;

      if (arguments.length === 3) {
        options = size;
        size = 5;
      }

      startPage = currentPage - Math.floor(size / 2);
      endPage = currentPage + Math.floor(size / 2);

      if (startPage <= 0) {
        endPage -= (startPage - 1);
        startPage = 1;
      }

      if (endPage > totalPage) {
        endPage = totalPage;
        if (endPage - size + 1 > 0) {
          startPage = endPage - size + 1;
        } else {
          startPage = 1;
        }
      }

      const context = {
        startFromFirstPage: false,
        pages: [],
        endAtLastPage: false,
      };
      if (startPage === 1) {
        context.startFromFirstPage = true;
      }
      for (let i = startPage; i <= endPage; i++) {
        context.pages.push({
          page: i,
          isCurrent: i === currentPage,
        });
      }
      if (endPage === totalPage) {
        context.endAtLastPage = true;
      }

      return options.fn(context);
    });

export {
  Router,
  initAnchorsRouting,
};
