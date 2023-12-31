import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// toggle
const app = new App({
    button: document.querySelector('#menu'),
    content: document.querySelector('main'),
    drawer: document.querySelector('#drawer'),
    jumbotron: document.querySelector('.jumbotron'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
