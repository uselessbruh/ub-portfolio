

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); })

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () { elementToggleFunc(this); });

for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener('click', function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i].classList.remove('active');
            }
        }
    });
}


// Project Modal Logic
const projectModalContainer = document.querySelector('[data-project-modal-container]');
const projectModalOverlay = document.querySelector('[data-project-modal-overlay]');
const projectModalCloseBtn = document.querySelector('[data-project-modal-close-btn]');
const projectModalImg = document.querySelector('[data-project-modal-img]');
const projectModalTitle = document.querySelector('[data-project-modal-title]');
const projectModalText = document.querySelector('[data-project-modal-text] p');
const projectModalLink = document.querySelector('[data-project-modal-link]');
const projectModalCategory = document.querySelector('[data-project-modal-category]');

// Project data (add your descriptions and links here)
const projectData = {
    'TELEports': {
        desc: 'TELEports is a community-driven Telegram client built on Telegram’s TDLib and tailored for the Ubuntu Touch mobile ecosystem. Designed with performance and privacy in mind, TELEports brings the power of Telegram’s messaging platform to devices running Ubuntu Touch, ensuring a smooth, secure, and feature-rich communication experience.',
        link: 'https://github.com/uselessbruh/TELEports',
        img: '/assets/teleports.png'
    },
    'Bat Chat': {
        desc: 'Bat Chat is a Batman-themed real-time chat application built with React, Vite, and Firebase. Features dark UI, user authentication, instant messaging, profile uploads, and emoji support. Channel your inner Dark Knight while chatting with friends in this sleek, Gotham-inspired platform.',
        link: 'https://github.com/uselessbruh/bat-chat',
        img: '/assets/batchat.png'
    },
    'Virtual Herbal Garden': {
        desc: 'Virtual Herbal Garden is an interactive React + Firebase app to explore themed garden zones, learn about medicinal plants, meet friendly characters, and shop virtual herbs. Includes relaxing background music, a mobile-friendly UI, and an admin panel for secure content management.',
        link: 'https://github.com/uselessbruh/virtual-herbal-garden',
        img: '/assets/virtualherbalgarden.png'
    },
    'GenG': {
        desc: 'A full-stack web application for generating synthetic medical data, AI-powered medical images (X-ray/MRI), and conducting literature reviews. Built with React & Flask, featuring 25+ medical data types, GAN-based image generation, PubMed integration, and comprehensive data validation tools for research and AI development.',
        link: 'https://github.com/uselessbruh/geng',
        img: '/assets/geng.png'
    },
    'Tic Tac Toe.': {
        desc: 'This is a full-stack AI gaming project that combines machine learning, web development, and game theory into an engaging Tic Tac Toe experience!',
        link: 'https://github.com/uselessbruh/tic-tac-toe',
        img: '/assets/tictactoe.png'
    },
    'UB Notes': {
        desc: 'A modern Electron-based note-taking application with Firebase integration. Features real-time synchronization, collection organization, secure authentication, and a beautiful responsive UI. Create, manage, and sync notes across devices with professional design and seamless user experience.',
        link: 'https://github.com/uselessbruh/ub-notes',
        img: '/assets/ubnotes.png'
    },
    'UB Calculator': {
        desc: 'A sleek, modern desktop calculator built with Electron. Features both basic and scientific modes, custom frameless design, calculation history, memory operations, and full keyboard support. Dark-themed UI with smooth animations and glass morphism effects. Perfect for everyday calculations and advanced mathematical functions.',
        link: 'https://github.com/uselessbruh/ub-calculator',
        img: '/assets/ubcalculator.png'
    },
    'Weather App': {
        desc: 'Python GUI weather app using Linux shell scripting (bash, curl, jq, sed, grep) to fetch real-time data from wttr.in API. Features charts, forecasts & astronomy data. Educational project for learning command-line tools & JSON processing. MIT licensed.',
        link: 'https://github.com/uselessbruh/weather-app',
        img: '/assets/weatherapp.png'
    },
    'Minimal Chat': {
        desc: 'Real-time disposable chat app built with Flask & Socket.IO. Features anonymous messaging, glassmorphism UI, no registration required. Messages are temporary & disappear after session ends. Perfect for quick conversations with beautiful modern design & WebSocket-powered instant delivery.',
        link: 'https://github.com/uselessbruh/minimal-chat',
        img: '/assets/minimalchat.png'
    },
    'Gene DB - Python': {
        desc: 'GENEDB is a powerful desktop bioinformatics application built that serves as a mini gene database management system, Also quering other Bioinformatics databases, and performing action on bioinformatics data.',
        link: 'https://github.com/uselessbruh/genedb_python',
        img: '/assets/genedbpython.png'
    },
    'Resume Generator': {
        desc: 'A web-based application that helps users create professional resumes easily. Features include customizable templates, real-time previews, and downloadable PDF output.',
        link: 'https://github.com/uselessbruh/resume-generators',
        img: '/assets/resumegenerator.png'
    },
    'NucleoIDE': {
        desc: 'A modern Electron-based code editor inspired by VS Code, featuring a file explorer, Monaco editor, integrated multi-terminal, diagnostics, and output panels, designed for efficient development and seamless user experience.',
        link: 'https://github.com/uselessbruh/nucleoide',
        img: '/assets/nucleoide.png'
    }
};

const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const title = this.querySelector('.project-title').innerText;
        const data = projectData[title] || {};
        const category = this.querySelector('.project-category')?.innerText || '';
        projectModalTitle.innerText = title;
        projectModalText.innerText = data.desc || 'No description available.';
        projectModalImg.src = data.img || '';
        projectModalImg.alt = title + ' image';
        projectModalLink.href = data.link || '#';
        projectModalLink.style.display = data.link ? '' : 'none';
        projectModalCategory.innerText = category ? `${category}` : '';
        projectModalContainer.classList.add('active');
    });
});

function closeProjectModal() {
    projectModalContainer.classList.remove('active');
}
projectModalCloseBtn.addEventListener('click', closeProjectModal);
projectModalOverlay.addEventListener('click', closeProjectModal);

