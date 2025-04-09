export function initHeader() {

    // Open / close menu
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");
    
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    })

    // Smooth scroll to section
    const navLink = document.querySelectorAll(".nav-link");
    
    navLink.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }

            nav.classList.toggle("open");
        })
    })
    
    // Order the project button + scroll
    const orderBtn = document.querySelector(".header-btn-link");

    orderBtn.addEventListener("click", event => {
        event.preventDefault();

        const target = document.getElementById("work-together");

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    })

    // Open mobile menu
    const burgerMenuBtn = document.querySelector(".burger-menu-btn");
    const mobMenuCloseBtn = document.querySelector(".mobile-menu-btn-close");
    const mobMenu = document.querySelector(".mobile-menu");
    
    burgerMenuBtn.addEventListener("click", () => {
        mobMenu.classList.toggle("open");
    })
    
    // Close mobile menu
    mobMenuCloseBtn.addEventListener("click", () => {
        mobMenu.classList.toggle("open");
    })

    // Smooth scroll to section mobile menu
    const navMobMenu = document.querySelector(".mobile-menu-nav");
    const navLinkMobMenu = document.querySelectorAll(".mobile-menu-link");

    navLinkMobMenu.forEach(navLink => {
        navLink.addEventListener("click", event => {
            event.preventDefault();
            
            const targetIdMobMenu = navLink.getAttribute("href").substring(1);
            const targetElementMobMenu = document.getElementById(targetIdMobMenu);
            
            if (targetElementMobMenu) {
                targetElementMobMenu.scrollIntoView({ behavior: "smooth" });
            }

            mobMenu.classList.toggle("open");
        })
    })

    // Order the project button mobile menu
    const orderBtnMobMenu = document.querySelector(".mobile-menu-btn-link");

    orderBtnMobMenu.addEventListener("click", event => {
        event.preventDefault();

        // const targetMobMenu = document.getElementById("work-together");

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    })
}
