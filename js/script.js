const toggleMenu = document.getElementById('mobileMenuTrigger');
const menu = document.getElementById('navigationLinks');

toggleMenu.addEventListener('click', function () {
    const open = toggleMenu.getAttribute('aria-expanded') === 'true';
    toggleMenu.setAttribute('aria-expanded', !open);
    menu.hidden = open;

    if (!menu.hidden) {
        menu.querySelector('a').focus();
    }
});