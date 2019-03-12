import routing from './routing.js'

const homePage = `
    <h1>Domówka</h1>
    <a class="home" href="/#home">Home</a>
    <a class="portfolio" href="/#portfolio">Portofino</a>
    <a class="resume" href="/#resume">Rezjuum</a>
    <a class="contact" href="/#contact">Konkat</a>
`;

const portfolioPage = `
    <h1>Portofino</h1>
`;

const resumePage = `
    <h1>Rezjuum</h1>
`;

const contactPage = `
    <h1>Konkat</h1>
`;

routing(homePage, portfolioPage, resumePage, contactPage);