'use strict'

const menuSize = '250px';

let open = true;

const abrirMenu = document.querySelector('#btnMenu');

if (abrirMenu != null) {
    abrirMenu.addEventListener('click', e => {
        open = !open;
        toggleMenu();
    })
    
    function toggleMenu() {
        if (open) {
            document.querySelector('#sidebar').style.marginLeft = 0;
            return;
        }
        document.querySelector('#sidebar').style.marginLeft = `-${menuSize}`;
    }
}
'use strict'

const menuSize = '250px';

let open = true;

const abrirMenu = document.querySelector('#btnMenu');

if (abrirMenu != null) {
    abrirMenu.addEventListener('click', e => {
        open = !open;
        toggleMenu();
    })
    
    function toggleMenu() {
        if (open) {
            document.querySelector('#sidebar').style.marginLeft = 0;
            return;
        }
        document.querySelector('#sidebar').style.marginLeft = `-${menuSize}`;
    }
}
