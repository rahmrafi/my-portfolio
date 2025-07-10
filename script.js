document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const overlay = document.querySelector('.overlay');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    function openMenu() {
        dropdown.classList.add('active');
        body.classList.add('menu-active');
    }

    function closeMenu() {
        dropdown.classList.remove('active');
        body.classList.remove('menu-active');
    }

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const isMenuActive = dropdown.classList.contains('active');
        if (isMenuActive) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    window.addEventListener('click', function(event) {
        if (body.classList.contains('menu-active') && !dropdown.contains(event.target)) {
            closeMenu();
        }
    });
});