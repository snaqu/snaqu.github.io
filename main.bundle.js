!function (n) { var e = {}; function t(i) { if (e[i]) return e[i].exports; var o = e[i] = { i: i, l: !1, exports: {} }; return n[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports } t.m = n, t.c = e, t.d = function (n, e, i) { t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: i }) }, t.r = function (n) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 }) }, t.t = function (n, e) { if (1 & e && (n = t(n)), 8 & e) return n; if (4 & e && "object" == typeof n && n && n.__esModule) return n; var i = Object.create(null); if (t.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n) for (var o in n) t.d(i, o, function (e) { return n[e] }.bind(null, o)); return i }, t.n = function (n) { var e = n && n.__esModule ? function () { return n.default } : function () { return n }; return t.d(e, "a", e), e }, t.o = function (n, e) { return Object.prototype.hasOwnProperty.call(n, e) }, t.p = "", t(t.s = 3) }([, , , function (n, e, t) { var i = t(4); "string" == typeof i && (i = [[n.i, i, ""]]); var o = { hmr: !0, transform: void 0, insertInto: void 0 }; t(6)(i, o); i.locals && (n.exports = i.locals) }, function (n, e, t) { (e = n.exports = t(5)(!1)).push([n.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,700);", ""]), e.push([n.i, 'body {\n  padding: 0;\n  margin: 0;\n  font-family: "Roboto Condensed", sans-serif;\n  color: #1d1d1d; }\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n:root {\n  --time: \'12:10\'; }\n\n.display-none {\n  display: inline; }\n\n.out {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n\n#loader-wrapper {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: #efefef;\n  -webkit-transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s;\n  transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s; }\n\n.load {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100px;\n  height: 100px; }\n  .load hr {\n    border: 0;\n    margin: 0;\n    width: 40%;\n    height: 40%;\n    position: absolute;\n    border-radius: 50%;\n    -webkit-animation: spin 2s ease infinite;\n            animation: spin 2s ease infinite; }\n    .load hr:first-child {\n      background: #cafe48;\n      -webkit-animation-delay: -1.5s;\n              animation-delay: -1.5s; }\n    .load hr:nth-child(2) {\n      background: #70f8ba;\n      -webkit-animation-delay: -1s;\n              animation-delay: -1s; }\n    .load hr:nth-child(3) {\n      background: #7cb4b8;\n      -webkit-animation-delay: -0.5s;\n              animation-delay: -0.5s; }\n    .load hr:last-child {\n      background: #57467b; }\n\n@-webkit-keyframes spin {\n  0%,\n  100% {\n    -webkit-transform: translate(0);\n            transform: translate(0); }\n  25% {\n    -webkit-transform: translate(160%);\n            transform: translate(160%); }\n  50% {\n    -webkit-transform: translate(160%, 160%);\n            transform: translate(160%, 160%); }\n  75% {\n    -webkit-transform: translate(0, 160%);\n            transform: translate(0, 160%); } }\n\n@keyframes spin {\n  0%,\n  100% {\n    -webkit-transform: translate(0);\n            transform: translate(0); }\n  25% {\n    -webkit-transform: translate(160%);\n            transform: translate(160%); }\n  50% {\n    -webkit-transform: translate(160%, 160%);\n            transform: translate(160%, 160%); }\n  75% {\n    -webkit-transform: translate(0, 160%);\n            transform: translate(0, 160%); } }\n\n.display-hamburger {\n  display: none; }\n  @media screen and (max-width: 900px) {\n    .display-hamburger {\n      display: block; } }\n\n#nav-icon2 {\n  position: absolute;\n  top: 2em;\n  right: 2em;\n  z-index: 900;\n  width: 45px;\n  height: 60px;\n  cursor: pointer; }\n  #nav-icon2 span {\n    display: block;\n    position: absolute;\n    height: 5px;\n    width: 50%;\n    background-color: #1d1d1d;\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-transition: .25s ease-in-out;\n    transition: .25s ease-in-out;\n    border-radius: 1em; }\n    #nav-icon2 span:nth-child(even) {\n      left: 50%;\n      border-radius: 0 9px 9px 0; }\n    #nav-icon2 span:nth-child(odd) {\n      left: 0px;\n      border-radius: 9px 0 0 9px; }\n    #nav-icon2 span:nth-child(1) {\n      top: 0px; }\n    #nav-icon2 span:nth-child(2) {\n      top: 0px; }\n    #nav-icon2 span:nth-child(3) {\n      top: 12px; }\n    #nav-icon2 span:nth-child(4) {\n      top: 12px; }\n    #nav-icon2 span:nth-child(5) {\n      top: 24px; }\n    #nav-icon2 span:nth-child(6) {\n      top: 24px; }\n\n#nav-icon2.open span:nth-child(1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n#nav-icon2.open span:nth-child(6) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n#nav-icon2.open span:nth-child(2) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n#nav-icon2.open span:nth-child(5) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n#nav-icon2.open span:nth-child(1) {\n  left: 4px;\n  top: 5px; }\n\n#nav-icon2.open span:nth-child(2) {\n  left: calc(50% - 4px);\n  top: 5px; }\n\n#nav-icon2.open span:nth-child(3) {\n  left: -50%;\n  opacity: 0; }\n\n#nav-icon2.open span:nth-child(4) {\n  left: 100%;\n  opacity: 0; }\n\n#nav-icon2.open span:nth-child(5) {\n  left: 4px;\n  top: 20px; }\n\n#nav-icon2.open span:nth-child(6) {\n  left: calc(50% - 4px);\n  top: 20px; }\n\n.nav {\n  width: 100%;\n  min-height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .nav .container-nav {\n    width: 1100px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    @media screen and (max-width: 1175px) {\n      .nav .container-nav {\n        padding: 0 50px; } }\n    @media screen and (max-width: 525px) {\n      .nav .container-nav {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n  .nav__logo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    @media screen and (max-width: 525px) {\n      .nav__logo {\n        width: 100%;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; } }\n    .nav__logo img {\n      width: 32px; }\n  @media screen and (max-width: 525px) {\n    .nav__list {\n      display: none;\n      position: absolute;\n      top: 75px;\n      z-index: 10000;\n      width: 100%;\n      background-color: #fafafa;\n      left: 0;\n      padding-left: 50px;\n      border-bottom: 1px solid #dddddd;\n      border-top: 1px solid #dddddd; } }\n  .nav__list--active {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .nav__list ul {\n    list-style-type: none;\n    padding: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    @media screen and (max-width: 525px) {\n      .nav__list ul {\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        background-color: #fafafa; } }\n    .nav__list ul li {\n      position: relative; }\n      @media screen and (max-width: 525px) {\n        .nav__list ul li {\n          padding: .5em 0;\n          background-color: #fafafa; } }\n      .nav__list ul li .drop-down {\n        display: none; }\n        .nav__list ul li .drop-down a {\n          font-weight: 300;\n          font-size: 1rem;\n          text-transform: capitalize;\n          color: #1d1d1d; }\n      .nav__list ul li:hover .drop-down {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        z-index: 10000;\n        position: absolute;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 150px;\n        padding: .6em .4em .2em .4em;\n        background-color: #fff; }\n        @media screen and (max-width: 525px) {\n          .nav__list ul li:hover .drop-down {\n            position:static;\n            background-color: #fafafa; } }\n        .nav__list ul li:hover .drop-down li {\n          display: block;\n          padding: .4em;\n          color: gray;\n          background-color: #fff; }\n          @media screen and (max-width: 525px) {\n            .nav__list ul li:hover .drop-down li {\n              background-color: #fafafa; } }\n          .nav__list ul li:hover .drop-down li:hover {\n            color: #1d1d1d;\n            cursor: pointer; }\n      .nav__list ul li a {\n        margin: 0 1em 0 0;\n        text-decoration: none;\n        color: #1d1d1d;\n        font-size: 1.2rem;\n        text-transform: uppercase;\n        font-weight: 200;\n        position: relative;\n        -webkit-transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s;\n        transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s; }\n        .nav__list ul li a::before {\n          -webkit-transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s;\n          transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s;\n          content: "";\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 0;\n          height: 3px;\n          background-color: #70f8ba; }\n        .nav__list ul li a:hover::before {\n          width: 100%;\n          left: 100;\n          right: 0; }\n  .nav__hamburger {\n    display: none;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    @media screen and (max-width: 525px) {\n      .nav__hamburger {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; } }\n    .nav__hamburger img {\n      width: 40px;\n      height: 35px;\n      cursor: pointer; }\n\n.container {\n  width: 1100px;\n  text-align: center; }\n\n.content {\n  width: 100%;\n  min-height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .content .container__content {\n    margin: 0 30px; }\n  .content__header {\n    min-height: calc(100vh - 80px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .content__header h1 {\n      font-size: 3rem;\n      font-weight: 300;\n      margin-bottom: 0.5em;\n      margin: .1em; }\n      .content__header h1 span {\n        font-style: italic;\n        position: relative;\n        -webkit-transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;\n        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;\n        white-space: nowrap; }\n        .content__header h1 span::before {\n          -webkit-transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;\n          transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;\n          content: "";\n          bottom: 6px;\n          left: -5px;\n          position: absolute;\n          background-color: #70f8ba;\n          width: 105%;\n          height: 8px;\n          z-index: -10;\n          opacity: 0.7; }\n        .content__header h1 span:hover {\n          color: #fff; }\n          .content__header h1 span:hover::before {\n            height: 100%;\n            bottom: 0; }\n    .content__header h3 {\n      font-weight: 200;\n      margin-top: 1em; }\n  .content__timeline {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    grid-gap: 3em;\n    padding: 8em 0;\n    margin-bottom: 9em; }\n    @media screen and (max-width: 574px) {\n      .content__timeline {\n        grid-template-columns: 1fr; } }\n    .content__timeline--link {\n      text-decoration: none;\n      min-width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .content__timeline .timeline__item {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      background-color: red;\n      height: 450px;\n      position: relative;\n      -webkit-transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;\n      transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s; }\n      .content__timeline .timeline__item:hover::before {\n        background-color: rgba(29, 29, 29, 0.7);\n        z-index: 100; }\n      .content__timeline .timeline__item:hover .hide {\n        z-index: 1000;\n        -webkit-transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;\n        transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;\n        display: block;\n        color: #fff;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n      .content__timeline .timeline__item::before {\n        -webkit-transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;\n        transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;\n        content: "";\n        background-color: rgba(29, 29, 29, 0);\n        width: 100%;\n        height: 100%;\n        position: absolute; }\n      .content__timeline .timeline__item .hide {\n        -webkit-transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;\n        transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;\n        width: 75%;\n        font-size: 1.4rem;\n        display: none;\n        font-weight: 300; }\n      .content__timeline .timeline__item:nth-child(odd) {\n        margin-top: 8em;\n        margin-bottom: -8em; }\n        @media screen and (max-width: 1124px) {\n          .content__timeline .timeline__item:nth-child(odd) {\n            margin-top: 0;\n            margin-bottom: 0; } }\n      .content__timeline .timeline__item--position {\n        background-repeat: no-repeat;\n        background-size: cover; }\n      .content__timeline .timeline__item:nth-child(1) {\n        background-image: url(static/portfolio5.jpg);\n        background-position: 10% 20%; }\n      .content__timeline .timeline__item:nth-child(2) {\n        background-image: url(static/portfolio6.jpg);\n        background-position: 50% 20%; }\n      .content__timeline .timeline__item:nth-child(3) {\n        background-image: url(static/portfolio10.jpg);\n        background-position: 40% 20%; }\n      .content__timeline .timeline__item:nth-child(4) {\n        background-image: url(static/portfolio9.jpg);\n        background-position: 50% 20%; }\n      .content__timeline .timeline__item:nth-child(5) {\n        background-image: url(static/portfolio11.jpg);\n        background-position: 50% 45%; }\n      .content__timeline .timeline__item:nth-child(6) {\n        background-image: url(static/portfolio2.jpg);\n        background-position: 70% 100%; }\n      .content__timeline .timeline__item:nth-child(7) {\n        background-image: url(static/portfolio8.jpg);\n        background-position: 70% 30%; }\n      .content__timeline .timeline__item:nth-child(8) {\n        background-image: url(static/portfolio12.jpg);\n        background-position: 50% 50%; }\n\n.footer {\n  width: 100%;\n  height: 200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #efefef; }\n  .footer__socials {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .footer__socials:hover a {\n      opacity: 0.5; }\n    .footer__socials .socials__icon {\n      padding: 1em;\n      color: #1d1d1d; }\n      .footer__socials .socials__icon a {\n        -webkit-transition: cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s;\n        transition: cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s;\n        color: #1d1d1d; }\n        .footer__socials .socials__icon a:hover {\n          color: #1d1d1d;\n          opacity: 1; }\n        .footer__socials .socials__icon a svg {\n          cursor: pointer; }\n  .footer__name h2 {\n    font-weight: 300;\n    font-size: 1.2rem; }\n\n.contact {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 600px; }\n  .contact .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .contact__header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: left;\n    max-width: 800px;\n    width: 100%;\n    position: relative;\n    z-index: 100;\n    padding: 0 40px; }\n    .contact__header h2 {\n      font-size: 3rem;\n      margin: 0; }\n      @media screen and (max-width: 700px) {\n        .contact__header h2 {\n          font-size: 2.7rem; } }\n  .contact__time {\n    top: -106%;\n    left: 50px;\n    position: absolute;\n    font-size: 11rem;\n    color: #e4e4e4;\n    z-index: -10;\n    font-weight: bold; }\n    @media screen and (max-width: 700px) {\n      .contact__time {\n        top: -122%; } }\n    @media screen and (max-width: 497px) {\n      .contact__time {\n        top: -53%;\n        font-size: 8rem;\n        left: 35px; } }\n    @media screen and (max-width: 381px) {\n      .contact__time {\n        top: -31%;\n        font-size: 6.9rem;\n        left: 35px; } }\n  .contact__desc {\n    max-width: 800px;\n    width: 100%;\n    text-align: left;\n    padding: 0 40px; }\n    .contact__desc p {\n      font-size: 1.2em;\n      font-weight: 300; }\n    .contact__desc .email {\n      color: #57467b;\n      font-weight: 500; }\n\n.aboutme {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 600px;\n  padding: 4em 0; }\n  .aboutme__photo {\n    background-image: url(static/me.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 70% 90%;\n    width: 100%;\n    height: 500px;\n    margin-bottom: 3em; }\n  .aboutme .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0 50px; }\n  .aboutme .article {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-gap: 1em 1em;\n    min-height: 200px; }\n    @media screen and (max-width: 700px) {\n      .aboutme .article {\n        grid-template-columns: 1fr; } }\n    .aboutme .article__title {\n      width: 100%;\n      height: 60px;\n      border-bottom: 2px solid #dddddd;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; }\n      .aboutme .article__title p {\n        padding: .7em 0; }\n    .aboutme .article__description {\n      text-align: left;\n      font-weight: 300; }\n      .aboutme .article__description p {\n        line-height: 1.4em;\n        font-size: 1.2rem; }\n        .aboutme .article__description p a {\n          text-decoration: none;\n          color: #7cb4b8; }\n      .aboutme .article__description h2 {\n        font-weight: 500; }\n\n.portfolio {\n  width: 100%;\n  min-height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .portfolio .container--portfolio {\n    padding: 0 40px; }\n  .portfolio__image {\n    width: 100%;\n    min-height: 600px;\n    background-image: url(static/pizza.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 50%;\n    margin: 2em 0; }\n    .portfolio__image--pizza {\n      background-image: url(static/pizza.jpg); }\n    .portfolio__image--agencja {\n      background-image: url(static/agencja.jpg); }\n    .portfolio__image--meetup {\n      background-image: url(static/meetup.jpg); }\n    .portfolio__image--uixrex {\n      background-image: url(static/uixrex.jpg); }\n    .portfolio__image--photo {\n      background-image: url(static/photo.jpg); }\n    .portfolio__image--food {\n      background-image: url(static/food.jpg); }\n    .portfolio__image--forms {\n      background-image: url(static/forms.jpg); }\n    .portfolio__image--schulz {\n      background-image: url(static/schulz.jpg); }\n  .portfolio__description {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-gap: 1em 1em;\n    min-height: 340px; }\n    @media screen and (max-width: 680px) {\n      .portfolio__description {\n        grid-template-columns: 1fr; } }\n    .portfolio__description--general {\n      padding: .5em;\n      text-align: justify; }\n      .portfolio__description--general h1 {\n        font-weight: 300;\n        font-size: 2rem; }\n      .portfolio__description--general p {\n        font-weight: 300;\n        line-height: 1.5em;\n        font-size: 1.2rem; }\n    .portfolio__description--tech {\n      padding: .5em;\n      text-align: right; }\n      @media screen and (max-width: 680px) {\n        .portfolio__description--tech {\n          text-align: left;\n          margin-bottom: 30px; } }\n      .portfolio__description--tech h1 {\n        font-weight: 300;\n        font-size: 2rem; }\n      .portfolio__description--tech p {\n        font-weight: 300;\n        line-height: 1.5em;\n        font-size: 1.2rem; }\n    .portfolio__description--button {\n      width: 170px;\n      height: 50px;\n      background-color: transparent;\n      color: #70f8ba;\n      font-size: 1.3rem;\n      border: 2px solid #70f8ba;\n      -webkit-transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s;\n      transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s;\n      cursor: pointer;\n      outline: none; }\n      .portfolio__description--button:hover {\n        background-color: #70f8ba;\n        color: #fff; }\n', ""]) }, function (n, e) { n.exports = function (n) { var e = []; return e.toString = function () { return this.map(function (e) { var t = function (n, e) { var t = n[1] || "", i = n[3]; if (!i) return t; if (e && "function" == typeof btoa) { var o = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), r = i.sources.map(function (n) { return "/*# sourceURL=" + i.sourceRoot + n + " */" }); return [t].concat(r).concat([o]).join("\n") } var a; return [t].join("\n") }(e, n); return e[2] ? "@media " + e[2] + "{" + t + "}" : t }).join("") }, e.i = function (n, t) { "string" == typeof n && (n = [[null, n, ""]]); for (var i = {}, o = 0; o < this.length; o++) { var r = this[o][0]; "number" == typeof r && (i[r] = !0) } for (o = 0; o < n.length; o++) { var a = n[o]; "number" == typeof a[0] && i[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), e.push(a)) } }, e } }, function (n, e, t) { var i, o, r = {}, a = (i = function () { return window && document && document.all && !window.atob }, function () { return void 0 === o && (o = i.apply(this, arguments)), o }), c = function (n) { var e = {}; return function (n, t) { if ("function" == typeof n) return n(); if (void 0 === e[n]) { var i = function (n, e) { return e ? e.querySelector(n) : document.querySelector(n) }.call(this, n, t); if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try { i = i.contentDocument.head } catch (n) { i = null } e[n] = i } return e[n] } }(), l = null, s = 0, d = [], p = t(7); function f(n, e) { for (var t = 0; t < n.length; t++) { var i = n[t], o = r[i.id]; if (o) { o.refs++; for (var a = 0; a < o.parts.length; a++)o.parts[a](i.parts[a]); for (; a < i.parts.length; a++)o.parts.push(g(i.parts[a], e)) } else { var c = []; for (a = 0; a < i.parts.length; a++)c.push(g(i.parts[a], e)); r[i.id] = { id: i.id, refs: 1, parts: c } } } } function m(n, e) { for (var t = [], i = {}, o = 0; o < n.length; o++) { var r = n[o], a = e.base ? r[0] + e.base : r[0], c = { css: r[1], media: r[2], sourceMap: r[3] }; i[a] ? i[a].parts.push(c) : t.push(i[a] = { id: a, parts: [c] }) } return t } function b(n, e) { var t = c(n.insertInto); if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var i = d[d.length - 1]; if ("top" === n.insertAt) i ? i.nextSibling ? t.insertBefore(e, i.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), d.push(e); else if ("bottom" === n.insertAt) t.appendChild(e); else { if ("object" != typeof n.insertAt || !n.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); var o = c(n.insertAt.before, t); t.insertBefore(e, o) } } function u(n) { if (null === n.parentNode) return !1; n.parentNode.removeChild(n); var e = d.indexOf(n); e >= 0 && d.splice(e, 1) } function x(n) { var e = document.createElement("style"); if (void 0 === n.attrs.type && (n.attrs.type = "text/css"), void 0 === n.attrs.nonce) { var i = function () { 0; return t.nc }(); i && (n.attrs.nonce = i) } return h(e, n.attrs), b(n, e), e } function h(n, e) { Object.keys(e).forEach(function (t) { n.setAttribute(t, e[t]) }) } function g(n, e) { var t, i, o, r; if (e.transform && n.css) { if (!(r = "function" == typeof e.transform ? e.transform(n.css) : e.transform.default(n.css))) return function () { }; n.css = r } if (e.singleton) { var a = s++; t = l || (l = x(e)), i = w.bind(null, t, a, !1), o = w.bind(null, t, a, !0) } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function (n) { var e = document.createElement("link"); return void 0 === n.attrs.type && (n.attrs.type = "text/css"), n.attrs.rel = "stylesheet", h(e, n.attrs), b(n, e), e }(e), i = function (n, e, t) { var i = t.css, o = t.sourceMap, r = void 0 === e.convertToAbsoluteUrls && o; (e.convertToAbsoluteUrls || r) && (i = p(i)); o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"); var a = new Blob([i], { type: "text/css" }), c = n.href; n.href = URL.createObjectURL(a), c && URL.revokeObjectURL(c) }.bind(null, t, e), o = function () { u(t), t.href && URL.revokeObjectURL(t.href) }) : (t = x(e), i = function (n, e) { var t = e.css, i = e.media; i && n.setAttribute("media", i); if (n.styleSheet) n.styleSheet.cssText = t; else { for (; n.firstChild;)n.removeChild(n.firstChild); n.appendChild(document.createTextNode(t)) } }.bind(null, t), o = function () { u(t) }); return i(n), function (e) { if (e) { if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return; i(n = e) } else o() } } n.exports = function (n, e) { if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment"); (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom"); var t = m(n, e); return f(t, e), function (n) { for (var i = [], o = 0; o < t.length; o++) { var a = t[o]; (c = r[a.id]).refs-- , i.push(c) } n && f(m(n, e), e); for (o = 0; o < i.length; o++) { var c; if (0 === (c = i[o]).refs) { for (var l = 0; l < c.parts.length; l++)c.parts[l](); delete r[c.id] } } } }; var _, k = (_ = [], function (n, e) { return _[n] = e, _.filter(Boolean).join("\n") }); function w(n, e, t, i) { var o = t ? "" : i.css; if (n.styleSheet) n.styleSheet.cssText = k(e, o); else { var r = document.createTextNode(o), a = n.childNodes; a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(r, a[e]) : n.appendChild(r) } } }, function (n, e) { n.exports = function (n) { var e = "undefined" != typeof window && window.location; if (!e) throw new Error("fixUrls requires window.location"); if (!n || "string" != typeof n) return n; var t = e.protocol + "//" + e.host, i = t + e.pathname.replace(/\/[^\/]*$/, "/"); return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (n, e) { var o, r = e.trim().replace(/^"(.*)"$/, function (n, e) { return e }).replace(/^'(.*)'$/, function (n, e) { return e }); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? n : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? t + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")") }) } }]);
//# sourceMappingURL=main.bundle.js.map