
/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 70,
	breakpoints: {
		// when window is <= 767px
		767: {
			slidesPerView: 1
		},
		// when window is <= 991px
		991: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
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