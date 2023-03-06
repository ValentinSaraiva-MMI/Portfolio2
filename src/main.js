import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1ZRLTM-kSDmK-Zn-jyQPfpiGSxgDc_Ww",
    authDomain: "portfolio-valentin-saraiva.firebaseapp.com",
    projectId: "portfolio-valentin-saraiva",
    storageBucket: "portfolio-valentin-saraiva.appspot.com",
    messagingSenderId: "820202479447",
    appId: "1:820202479447:web:20d20dc989e587f509e812"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);



const app = createApp(App)

app.use(router)

app.mount('#app')


let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}


navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove('hovered-link')

    });

    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add('hovered-link')
    });


})

document.addEventListener('click', () => {
    mouseCursor.classList.add("expand");

    setTimeout(() => {
        mouseCursor.classList.remove("expand");
    }, 500)
})