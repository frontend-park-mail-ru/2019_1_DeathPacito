!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["404.html"]=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){return'<div id="container" class="l-flex-column full">\n    <a href="/" class="neon-text-red font-xxl">Page not found :(</a>\n</div>'},useData:!0}),e["about.html"]=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){return'<div id="container" class="l-flex-column">\n    <a href="/" class="neon-text-red font-xxl">About</a>\n    <div>\n        <img src="public/img/about.jpg" class="fill-width">\n    </div>\n</div>'},useData:!0}),e["chat.html"]=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){return'\n    <div id="pop-up">\n        <div id="text-field">\n        </div>\n    <form id="msgform">\n        <input id="message" name="text" type="text">\n        <input type="submit" value="send"></form>\n\n    </div>\n\n<style>\n    #pop-up {\n        position: relative;\n        width: 500px;\n        height: 500px;\n        border: solid 3px cornflowerblue;\n    }\n\n    #text-field {\n        width: 100%;\n        position: relative;\n        height: 95%;\n        background-color: white; \n        border: solid 1px black;\n        overflow-wrap: break-word;\n        overflow:scroll;\n    }\n\n    #message {\n        width: 85%;\n    }\n\n</style>\n'},useData:!0}),e["leaderboard.html"]=n({1:function(n,e,a,t,l){var i=n.lambda,o=n.escapeExpression;return'                <tr class="color-text">\n                    <th>'+o(i(null!=e?e.login:e,e))+"</th>\n                    <th>"+o(i(null!=e?e.score:e,e))+"</th>\n                </tr>\n"},3:function(n,e,a,t,l){var i,o=null!=e?e:n.nullContext||{};return'                <div id="pagination">\n'+(null!=(i=a.unless.call(o,null!=e?e.startFromFirstPage:e,{name:"unless",hash:{},fn:n.program(4,l,0),inverse:n.noop,data:l}))?i:"")+"\n"+(null!=(i=a.each.call(o,null!=e?e.pages:e,{name:"each",hash:{},fn:n.program(6,l,0),inverse:n.noop,data:l}))?i:"")+"\n"+(null!=(i=a.unless.call(o,null!=e?e.endAtLastPage:e,{name:"unless",hash:{},fn:n.program(9,l,0),inverse:n.noop,data:l}))?i:"")+"                </div>\n"},4:function(n,e,a,t,l){return'                        <a href="#">&lt;</a>\n'},6:function(n,e,a,t,l){var i;return null!=(i=a.unless.call(null!=e?e:n.nullContext||{},null!=e?e.isCurrent:e,{name:"unless",hash:{},fn:n.program(7,l,0),inverse:n.noop,data:l}))?i:""},7:function(n,e,a,t,l){var i,o=null!=e?e:n.nullContext||{},s=a.helperMissing,r="function",d=n.escapeExpression;return'                            <a href="'+d(typeof(i=null!=(i=a.page||(null!=e?e.page:e))?i:s)===r?i.call(o,{name:"page",hash:{},data:l}):i)+'">'+d(typeof(i=null!=(i=a.page||(null!=e?e.page:e))?i:s)===r?i.call(o,{name:"page",hash:{},data:l}):i)+"</a>\n"},9:function(n,e,a,t,l){return'                        <a class="neon-text-blue" href="#">&gt;</a>\n'},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var i,o=null!=e?e:n.nullContext||{};return'<div id="container">\n    <div class="l-flex-column height-md">\n        <a href="/" class="neon-text-red font-xl">Leaderboard</a>\n        <table class="font-md font-brandon leaderboard">\n            <tr class="color-text">\n                <th>Login</th>\n                <th>Scores</th>\n            </tr>\n'+(null!=(i=a.each.call(o,null!=e?e.users:e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?i:"")+'        </table>\n    \n        <div class="font-brandon font-md">\n'+(null!=(i=(a.pagination||e&&e.pagination||a.helperMissing).call(o,null!=e?e.currentPage:e,null!=e?e.pageCount:e,null!=e?e.size:e,{name:"pagination",hash:{},fn:n.program(3,l,0),inverse:n.noop,data:l}))?i:"")+"        </div>\n    </div>\n</div>\n\n"},useData:!0}),e["login.html"]=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){return'<div id="container">\n    <div class="l-flex-column" id="modal">\n        <p><a href="/" class="font-xl">LOGIN</a></p>\n        <form action="" class="l-flex-column" method="POST">\n            <input class="py-3 button-md my-2" type="text" id="login" placeholder="Login">\n            <div class="error-msg neon-text-white font-brandon"></div>\n\n            <input class="py-3 button-md my-2" type="password" id="password" placeholder="Password">\n            <div class="error-msg neon-text-white font-brandon"></div>\n            \n            <input class="my-3 font-brandon" value="SUBMIT" type="submit" name="submit">\n        </form>\n    </div>\n</div>\n\n'},useData:!0}),e["menu.html"]=n({1:function(n,e,a,t,l){return'\n        <a class="button font-lg " href=\'/profile\'>\n            Profile\n        </a>\n\n        <a class="button font-lg " href=\'/settings\'>\n            Settings\n        </a>\n\n        <a class="button font-lg " href="/logout">\n            Logout\n        </a>\n\n'},3:function(n,e,a,t,l){return'        <a id="myBtn" class="button font-lg ">\n            Login/Signup\n            <a>\n\n                <div id="myModal" class="modal">\n\n                    <div class="modal-content">\n\n\n                        <div class="l-flex-column" id="modal">\n                            <div class="tab">\n                                <button class="tablinks" onclick="openTab(event, \'Login\')"\n                                    id="defaultOpen">Login</button>\n                                <button class="tablinks" onclick="openTab(event, \'Signup\')" id="tabsignup">Sign\n                                    up</button>\n                            </div>\n                            <div id="Login" class="tabcontent">\n                                <form action="" class="l-flex-column" method="POST">\n                                    <fieldset>\n                                        \x3c!-- Sign Up Form --\x3e\n                                        \x3c!-- Text input--\x3e\n                                        <div class="group">\n                                            <input required="" class="input" type="text"><span\n                                                class="highlight"></span><span class="bar"></span>\n                                            <label class="label" for="date">Login</label></div>\n\n                                        \x3c!-- Text input--\x3e\n                                        <div class="group">\n                                            <input required="" class="input" type="password"><span\n                                                class="highlight"></span><span class="bar"></span>\n                                            <label class="label" for="date">Password</label></div>\n                                    </fieldset>\n                                    <input class="my-3 font-brandon" value="SUBMIT" type="submit" name="submit">\n                                </form>\n                            </div>\n\n                            <div id="Signup" class="tabcontent">\n                                <form action="" class="l-flex-column" method="POST">\n                                    <fieldset>\n                                        \x3c!-- Sign Up Form --\x3e\n                                        \x3c!-- Text input--\x3e\n                                        <div class="group">\n                                            <input required="" class="input" type="text"><span\n                                                class="highlight"></span><span class="bar"></span>\n                                            <label class="label" for="date">Login</label></div>\n                                        <div class="group">\n                                            <input required="" class="input" type="email"><span\n                                                class="highlight"></span><span class="bar"></span>\n                                            <label class="label" for="date">Email</label></div>\n\n                                        <div class="group">\n                                            <input required="" class="input" type="password"><span\n                                                class="highlight"></span><span class="bar"></span>\n                                            <label class="label" for="date">Password</label></div>\n                                        \x3c!-- Text input--\x3e\n                                        <div class="group">\n                                            <input required="" class="input" type="password" id="repeat_password"><span\n                                                class="highlight"></span><span class="bar"></span>\n                                            <label class="label" for="date">Repeat password</label></div>\n                                    </fieldset>\n                                    <input class="my-3 font-brandon" value="SUBMIT" type="submit" name="submit">\n                                </form>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n'},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var i;return'<div id="menu">\n    <div id="menu-logo">\n        <a class="button button-lg button-p-lg font-lg" href="/">\n            KPACUBO\n        </a>\n    </div>\n\n    <div id="menu-auth" class="l-flex-column">\n'+(null!=(i=a.if.call(null!=e?e:n.nullContext||{},null!=e?e.isAuthorized:e,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.program(3,l,0),data:l}))?i:"")+"\n\n\n                <a class=\"button neon-text-cyan  font-lg\" href='/singleplayer'>\n                    Single\n                </a>\n\n                <a class=\"button font-lg\" href='/'>\n                    Multiplayer\n                </a>\n\n                <a class=\"button font-lg \" href='/about'>\n                    About\n                </a>\n\n                <a class=\"button font-lg \" href='/chat'>\n                    Chat\n                </a>\n\n    </div>\n\n</div>\n\n\n<style>\n    .modal {\n        display: none;\n        /* Hidden by default */\n        position: fixed;\n        /* Stay in place */\n        z-index: 1;\n        /* Sit on top */\n        left: 0;\n        top: 0;\n        width: 100%;\n        /* Full width */\n        height: 100%;\n        /* Full height */\n        overflow: hidden;\n        /* Enable scroll if needed */\n        background-color: rgb(0, 0, 0);\n        /* Fallback color */\n        background-color: rgba(0, 0, 0, 0.4);\n        /* Black w/ opacity */\n        animation-name: animatetop;\n        animation-duration: 0.4s\n    }\n\n    /* Modal Content/Box */\n    .modal-content {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-color: #006363;\n        top: 30%;\n        margin: 5% auto;\n        /* 15% from the top and centered */\n        padding: 0px;\n        border: none;\n        width: 320px;\n        /* Could be more or less, depending on screen size */\n    }\n\n    @keyframes animatetop {\n        from {\n            top: -100px;\n            opacity: 0\n        }\n\n        to {\n            top: 0;\n            opacity: 1\n        }\n    }\n\n    .tab {\n        overflow: hidden;\n        border: 1px solid #ccc;\n        background-color: rgba(18, 16, 16, 0.1);\n        border: none;\n    }\n\n    /* Style the buttons that are used to open the tab content */\n    .tab button {\n        width: 50%;\n        background-color: inherit;\n        float: left;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        padding: 14px 16px;\n        transition: 0.3s;\n    }\n\n    /* Change background color of buttons on hover */\n    .tab button:hover {\n        background-color: #039090;\n    }\n\n    /* Create an active/current tablink class */\n    .tab button.active {\n        background-color:#006363;\n    }\n\n    /* Style the tab content */\n    .tabcontent {\n        display: none;\n        padding: 6px 12px;\n        border: none;\n        border-top: none;\n        background-color:  #006363; \n    }\n\n    .group2 {\n        position: relative;\n        margin-top: 16px;\n    }\n\n\n    .group {\n        position: relative;\n        margin-top: 30px;\n    }\n\n    .input {\n        font-size: 18px;\n        padding: 10px 10px 10px 5px;\n        -webkit-appearance: none;\n        display: block;\n        background: none;\n        color: #636363;\n        width: 100%;\n        border: none;\n        border-radius: 0;\n        border-bottom: 1px solid #757575;\n    }\n\n    .input:focus {\n        outline: none;\n    }\n\n\n    /* Label */\n\n    .label {\n        color: #757575;\n        font-size: 18px;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: -10px;\n        top: 10px;\n        transition: all 0.2s ease;\n    }\n\n\n    /* active */\n\n    .input:focus~.label,\n    .input.used~.label {\n        top: -20px;\n        transform: scale(.75);\n        left: -15px;\n        /* font-size: 14px; */\n        color: #4a89dc;\n    }\n\n\n    /* Underline */\n\n    .bar {\n        position: relative;\n        display: block;\n        width: 100%;\n    }\n\n    .bar:before,\n    .bar:after {\n        content: '';\n        height: 2px;\n        width: 0;\n        bottom: 1px;\n        position: absolute;\n        background: #4a89dc;\n        transition: all 0.2s ease;\n    }\n\n    .bar:before {\n        left: 50%;\n    }\n\n    .bar:after {\n        right: 50%;\n    }\n\n\n    /* active */\n\n    .input:focus~.bar:before,\n    .input:focus~.bar:after {\n        width: 50%;\n    }\n\n    /* active */\n\n    @media screen and (max-width: 576px) {\n        .modal-content {\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    .modal-body {\n        z-index: 4;\n    }\n\n    em {\n        display: none;\n    }\n\n    fieldset {\n        border: none;\n    }\n\n    .tablinks {\n        border: none;\n    }\n</style>"},useData:!0}),e["profile.html"]=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var i,o=null!=e?e:n.nullContext||{},s=a.helperMissing,r="function",d=n.escapeExpression;return'<div id="container">\n    <div class="l-flex-column">\n        <a href="/" class="neon-text-red font-xxl">Profile</a>\n        <div class="font-brandon font-lg">\n            <img src="'+d(typeof(i=null!=(i=a.avatar_path||(null!=e?e.avatar_path:e))?i:s)===r?i.call(o,{name:"avatar_path",hash:{},data:l}):i)+'" class="img-avatar neon-button-white">\n            <p class="neon-text-white my-2">Login: '+d(typeof(i=null!=(i=a.login||(null!=e?e.login:e))?i:s)===r?i.call(o,{name:"login",hash:{},data:l}):i)+'</p>\n            <p class="neon-text-white my-2">Email: '+d(typeof(i=null!=(i=a.email||(null!=e?e.email:e))?i:s)===r?i.call(o,{name:"email",hash:{},data:l}):i)+'</p>\n            <p class="neon-text-white my-2">Score: '+d(typeof(i=null!=(i=a.score||(null!=e?e.score:e))?i:s)===r?i.call(o,{name:"score",hash:{},data:l}):i)+'</p>\n            <a href="/settings" class="neon-button-white button-lg button-round">\n                <img src="public/img/settings.svg" class="img-icon">\n                Settings\n            </a>\n        </div>\n    </div>\n</div>\n'},useData:!0}),e["settings.html"]=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){return'<div id="container">\n    <div class="l-flex-column">\n        <div class="justify-around my-2">\n            <a class="spread spread-xl neon-text-red font-xxl" href="/" >Settings</a>\n        </div>\n\n        <form action="" class="l-flex-column" method="POST">\n            <div class="justify-end my-4">\n                <div class="l-flex-row">\n                    <label class="spread spread-lg neon-text-yellow font-brandon font-lg" for="username">\n                        Change login\n                    </label>\n                    <input type="text" id="login"  placeholder="Login" class="spread spread-lg button-md input-dark font-md">\n                    <div class="error-msg neon-text-white font-brandon"></div>\n                </div>    \n            </div>\n\n            <div class="justify-end my-4">\n                <div class="l-flex-row">\n                    <label class="spread spread-lg neon-text-yellow font-brandon font-lg" for="password">\n                        Change password\n                    </label>\n                    <input type="password" id="password" placeholder="Password" class="spread spread-lg button-md input-dark font-md">\n                    <div class="error-msg neon-text-white font-brandon"></div>\n                </div>\n            </div>\n\n            <div class="justify-end my-4">\n                <div class="l-flex-row">\n                    <label class="spread spread-lg neon-text-yellow font-brandon font-lg" for="repeat_password">\n                        Repeat password\n                    </label>\n                    <input type="password" id="repeat_password" placeholder="Confirm password" class="spread spread-lg button-md input-dark font-md">\n                    <div class="error-msg neon-text-white font-brandon"></div>\n                </div>\n            </div>\n\n            <div class="justify-end my-4">\n                <input type="file" id="avatar" placeholder="Upload avatar">\n                <div class="error-msg neon-text-white font-brandon"></div>\n            </div>\n\n            <input class="neon-button-blue font-brandon button-md" value="SUBMIT" type="submit" name="submit">\n        </form>\n    </div>\n</div>\n'},useData:!0}),e["signup.html"]=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){return'\n\n\n<div id="container">\n    <div class="l-flex-column" id="modal">\n        <p><a href="/" class="font-xl">SIGN  UP</a></p>\n        <form action="" class="l-flex-column" method="POST">\n            <input class="py-3 button-md my-2" type="text" id="login" placeholder="Login">\n            <div class="error-msg neon-text-white font-brandon"></div>\n\n            <input class="py-3 button-md my-2" type="email" id="email" placeholder="Email">\n            <div class="error-msg neon-text-white font-brandon"></div>\n\n            <input class="py-3 button-md my-2" type="password" id="password" placeholder="Password">\n            <div class="error-msg neon-text-white font-brandon"></div>\n\n            <input class="py-3 button-md my-2" type="password" id="repeat_password" placeholder="Repeat password">\n            <div class="error-msg neon-text-white font-brandon"></div>\n            \n            <input class="my-3 font-brandon" value="SUBMIT" type="submit" name="submit">\n        </form>\n    </div>\n</div>\n\n'},useData:!0}),e["svoyak.html"]=n({1:function(n,e,a,t,l){return'            <div id="game-field" class="l-flex-row">\n'},3:function(n,e,a,t,l){return'            <div id="game-field" class="l-flex-column">\n'},5:function(n,e,a,t,l){var i;return null!=(i=a.each.call(null!=e?e:n.nullContext||{},null!=e?e.themes:e,{name:"each",hash:{},fn:n.program(6,l,0),inverse:n.noop,data:l}))?i:""},6:function(n,e,a,t,l){var i;return'                        <div class="item l-flex-row justify-center align-center">\n                            <div>\n                                '+n.escapeExpression(n.lambda(null!=e?e.name:e,e))+"\n                            </div>\n                        </div>\n"+(null!=(i=a.each.call(null!=e?e:n.nullContext||{},null!=e?e.questions:e,{name:"each",hash:{},fn:n.program(7,l,0),inverse:n.noop,data:l}))?i:"")},7:function(n,e,a,t,l){var i;return'                            <div class="item l-flex-row justify-center align-center">\n                                <div>\n'+(null!=(i=a.if.call(null!=e?e:n.nullContext||{},null!=e?e.active:e,{name:"if",hash:{},fn:n.program(8,l,0),inverse:n.noop,data:l}))?i:"")+"                                </div>\n                            </div>\n"},8:function(n,e,a,t,l){return"                                        "+n.escapeExpression(n.lambda(null!=e?e.value:e,e))+"\n"},10:function(n,e,a,t,l){var i;return'                <div class="item l-flex-row justify-center align-center">\n                    <div>\n                        '+n.escapeExpression("function"==typeof(i=null!=(i=a.question||(null!=e?e.question:e))?i:a.helperMissing)?i.call(null!=e?e:n.nullContext||{},{name:"question",hash:{},data:l}):i)+"\n                    </div>\n                </div>\n"},12:function(n,e,a,t,l){var i;return'                <div class="item l-flex-row justify-center align-center">\n                    <div>\n                        '+n.escapeExpression("function"==typeof(i=null!=(i=a.message||(null!=e?e.message:e))?i:a.helperMissing)?i.call(null!=e?e:n.nullContext||{},{name:"message",hash:{},data:l}):i)+"\n                    </div>\n                </div>\n"},14:function(n,e,a,t,l){return'                <div id="input" class="l-flex-row">\n                    <form class="l-flex-row justify-center align-center">\n                        <input type="text" id="answer">\n                        <button class="answer" type="submit">Submit</button>\n                    </form>\n                </div>\n'},16:function(n,e,a,t,l){var i=n.lambda,o=n.escapeExpression;return'            <div class="card l-flex-column justify-center align-center">\n                <img src="'+o(i(null!=e?e.img:e,e))+'" width="50" height="50"></img>\n                <div class="l-flex-column">\n                    <p>'+o(i(null!=e?e.login:e,e))+"</p>\n                    <p>"+o(i(null!=e?e.score:e,e))+"</p>\n                </div>\n             </div>\n"},18:function(n,e,a,t,l){return"            #questions {\n                height: 100%; width: 100%;\n            }\n"},20:function(n,e,a,t,l){return"        #questions {\n            height: 90%; width: 100%;\n        }\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var i,o,s=null!=e?e:n.nullContext||{};return'    <div class="l-flex-row font-brandon">\n    <div id="main-field" class="l-flex-column space-between">\n'+(null!=(i=a.unless.call(s,null!=e?e.isQuestion:e,{name:"unless",hash:{},fn:n.program(1,l,0),inverse:n.program(3,l,0),data:l}))?i:"")+'            <div id="questions" class="grid">\n'+(null!=(i=a.if.call(s,null!=e?e.isQuestionList:e,{name:"if",hash:{},fn:n.program(5,l,0),inverse:n.noop,data:l}))?i:"")+"\n"+(null!=(i=a.if.call(s,null!=e?e.isQuestion:e,{name:"if",hash:{},fn:n.program(10,l,0),inverse:n.noop,data:l}))?i:"")+"\n"+(null!=(i=a.if.call(s,null!=e?e.isMessage:e,{name:"if",hash:{},fn:n.program(12,l,0),inverse:n.noop,data:l}))?i:"")+"            </div>\n"+(null!=(i=a.if.call(s,null!=e?e.isQuestion:e,{name:"if",hash:{},fn:n.program(14,l,0),inverse:n.noop,data:l}))?i:"")+'        </div>\n        <div id="player-field" class="l-flex-row">\n'+(null!=(i=a.each.call(s,null!=e?e.users:e,{name:"each",hash:{},fn:n.program(16,l,0),inverse:n.noop,data:l}))?i:"")+'        </div>\n    </div>\n    <div id="second-field" class="l-flex-column space-between justify-start">\n        <div id="exit-button"><a href="/">FUCK GO BACK</a></div>\n    </div>\n    </div>\n    <style type="text/css">\n        form {\n            width: 100%;\n            height: 100%;\n        }\n        input {\n            width: 90%;\n            height: 100%;\n            box-sizing: border-box;\n        }\n        button {\n            width: 10%;\n            height: 100%;\n        }\n\n        @media screen and (max-width: 798px) {\n        .answer {\n            width: 30%;\n\n        }\n    }\n        #main-field { height: 99vh; width: 75vw; padding: 3px; }\n        #second-field { height: 99vh; width: 25vw; padding: 3px;}\n        #game-field { height: 80%; width: auto; border: solid 1px white;}\n        #player-field { height: 18%; width: auto; border: solid 1px white;}\n        #pause-button { height: 100%; width: 8%;}\n'+(null!=(i=a.unless.call(s,null!=e?e.isQuestion:e,{name:"unless",hash:{},fn:n.program(18,l,0),inverse:n.program(20,l,0),data:l}))?i:"")+"        #input {\n            height: 10%; width: 100%;\n        }\n        #exit-button {display: flex; align-items: center;\n            justify-content: center;\n            height: 15%; width: 100%; \n            background-color: blueviolet;}\n        .grid { display: grid; grid-template-columns: repeat("+n.escapeExpression("function"==typeof(o=null!=(o=a.num||(null!=e?e.num:e))?o:a.helperMissing)?o.call(s,{name:"num",hash:{},data:l}):o)+", 1fr);}\n        .item:nth-child(even) { background-color: rgb(39, 189, 189);}\n        .item:nth-child(odd) { background-color: rgb(46, 170, 129)}\n        .card {width: 100%;}\n    </style>"},useData:!0})}();