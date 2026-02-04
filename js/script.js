
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.onscroll = function() {
    const nav = document.querySelector('.header');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};


function initScrollAnimations() {
    const observer10 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const targetElements10 = document.querySelectorAll(
    '.heroImage, .heroText, .secondTitle , .service-card ,.portfolioHeader , .portfolioContainer ,.weTitle , .companiesTitle , .exp-content'
    );
    
    if (targetElements10.length > 0) {
        targetElements10.forEach(div => observer10.observe(div));
    } else {
        console.warn("Observer 10: No elements found for .home-text or .first-column-text");
    }
}
initScrollAnimations();

/** Begininng Of script for menu **/

function openNav(){
    document.getElementById("menu").style.display="none";
    document.getElementById("sidenav").style.width="100%";
    document.getElementById("sidenav").style.opacity="1";
    document.getElementById("sidenav").style.display="block";
    document.getElementById("sidenav").style.display="flex";
	document.getElementById("themeAndResumez").style.display="block";
	document.getElementById("themeAndResumez").style.display="flex";
    document.getElementById("sidenav").style.zIndex="7";

     const observer11 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const targetElements11 = document.querySelectorAll(
    '.up, .down'
    );
    
    if (targetElements11.length > 0) {
        targetElements11.forEach(div => observer11.observe(div));
    } else {
        console.warn("Observer 11: No elements found for .up or .down");
    }
}


// THE KEY: Fix the "Sticky Menu" when returning to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        // Reset everything for desktop
        document.getElementById("sidenav").style.display = "none";
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("menu").style.display = "none";
        document.body.style.overflow = "auto";
    } else {
        // Ensure hamburger is visible on mobile if menu is closed
        if (document.getElementById("sidenav").style.width === "0px" || 
            document.getElementById("sidenav").style.width === "0") {
            document.getElementById("menu").style.display = "block";
        }
    }
});

function closeNav(){
    document.getElementById("menu").style.display="flex";
    document.getElementById("sidenav").style.width="0";
	document.getElementById("themeAndResumez").style.display="none";

     const observer11 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const targetElements11 = document.querySelectorAll(
    '.up, .down'
    );
    
    if (targetElements11.length > 0) {
        targetElements11.forEach(div => observer11.observe(div));
    } else {
        console.warn("Observer 11: No elements found for .up or .down");
    }
    
    document.getElementById("sidenav").style.zIndex="-7";
    document.getElementById("sidenav").style.opacity="0";
}
/** End Of script for menu */

// Wrapped in a function to isolate it from other errors
function initScrollAnimations() {
    const observer10 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const targetElements10 = document.querySelectorAll(
    '.heroImage, .heroText, .secondTitle , .service-card ,.portfolioHeader , .portfolioContainer ,.weTitle , .companiesTitle , .exp-content'
    );
    
    if (targetElements10.length > 0) {
        targetElements10.forEach(div => observer10.observe(div));
    } else {
        console.warn("Observer 10: No elements found for .home-text or .first-column-text");
    }
}
initScrollAnimations();

// Theme Toggle Logic
/*
const themeBtn = document.querySelector('.theme');
const themeIcon = document.querySelector('.theme img');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    // Check if light theme is active to change the icon
    if (body.classList.contains('light-theme')) {
        // Change to a Sun icon (Ensure you have a sun image in your folder)
        themeIcon.src = "images/globe.png"; 
        themeIcon.alt = "Switch to dark mode";
    } else {
        // Change back to Moon icon
        themeIcon.src = "images/moon (1).png";
        themeIcon.alt = "Switch to light mode";
    }
    
    // Optional: Save preference to local storage
   // const isLight = body.classList.contains('light-theme');
   // localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
});

// Check for saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
   // if (savedTheme === 'light') {
    //    body.classList.add('light-theme');
   //     themeIcon.src = "images/globe.png";
   // }
});
*/

// Optimized Theme Toggle for Desktop & Mobile
const themeButtons = document.querySelectorAll('.theme');
const body = document.body;

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        // Update ALL theme icons at once
        const allThemeIcons = document.querySelectorAll('.theme img');
        allThemeIcons.forEach(img => {
            if (body.classList.contains('light-theme')) {
                img.src = "images/globe.png"; 
                img.alt = "Dark Mode";
            } else {
                img.src = "images/moon (1).png";
                img.alt = "Light Mode";
            }
        });
    });
});

// script for the WORK EXPERIENCE section

function showExperience(id, btn) {
    // 1. Hide all content sections
    const contents = document.querySelectorAll('.exp-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // 2. Reset ALL tab styles (The "Dark" state)
    const tabs = document.querySelectorAll('.tab-btn');
	const tabSpan = document.querySelectorAll('.tab-span');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.style.backgroundColor = '#111111'; // Dark background
        tab.style.color = '#999999';           // Grey text
    });


    // 3. Show the specific content clicked
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
	
    }

    // 4. Highlight the clicked tab (The "Active" state)
    btn.classList.add('active');
    btn.style.backgroundColor = '#ffffff'; // White background
    btn.style.color = '#6C63FF';           // Purple text
	
}