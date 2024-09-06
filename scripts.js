let lastScrollTop = 0;
const header = document.getElementById('main-header');
const headerHeight = 150; // Adjust based on your header height

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < headerHeight) {
        header.classList.add('visible');
        header.classList.remove('hidden');
    } else if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the header
        header.classList.add('hidden');
        header.classList.remove('visible');
    } else {
        // Scrolling up, show the header
        header.classList.add('visible');
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Ensure header is always visible on hover
header.addEventListener('mouseenter', () => {
    header.classList.add('visible');
    header.classList.remove('hidden');
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('heroVideo');

    // Wait for the video to load
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = 10; // Start at 10 seconds
    });
});