document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('header');


    const scrollThreshold = 50; 


    window.addEventListener('scroll', function() {

        if (window.scrollY > scrollThreshold) {
            
            navbar.classList.add('navbar-scrolled');
        } else {
            
            navbar.classList.remove('navbar-scrolled');
        }
    });
});

const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }


        hamburger.addEventListener("click", (e) => {
            e.stopPropagation(); 
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                closeMenu();
            });
        });
        
        window.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }});