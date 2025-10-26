const bindMenus = document.querySelectorAll('.bind-menu');


bindMenus.forEach( (menu) => {
    const subMenuWrapper = menu.querySelector('.sub-menu-wrapper');

    menu.addEventListener('mouseenter', () => {
        if (subMenuWrapper) {
            subMenuWrapper.classList.add('smooth-active');
        }
    });

    menu.addEventListener('mouseleave', () => {
        if (subMenuWrapper) {
            subMenuWrapper.classList.remove('smooth-active');
        }
    });
});
