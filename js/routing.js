import homePage from "../sites/homePage.js";
import portfolioPage from "../sites/portfolioPage.js";
import resumePage from "../sites/resumePage.js";
import contactPage from "../sites/contactPage.js";

function routing() {

    const pages = {
        home: homePage,
        portfolio: portfolioPage,
        resume: resumePage,
        contact: contactPage
    };

    const app = document.querySelector('.app');

    function getCurrent() {
        return window.location.hash;
    };

    function navigate(path) {
        const current = window.location.href;
        window.location.href = current.replace(/#(.*)$/, '') + '#' + path;
    };

    let url = null;

    (function listen() {
        let current = getCurrent();
        let noHash = current.slice(1);
        let page = pages[noHash];
        if (current !== url) {
            url = current;
            if (!noHash) {
                navigate('home');
                current = getCurrent();
                noHash = current.slice(1);
                page = pages[noHash];
            };
            app.innerHTML = page;
        };
        setTimeout(listen, 200);
    }());
};

export default routing;