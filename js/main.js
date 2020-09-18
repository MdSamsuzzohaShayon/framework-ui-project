// MEGA MENU START
const mega_menu_icon = document.getElementById("mega-menu-icon");
const mega_menu_box = document.getElementById('mega-menu-box');






const mouseOverEvent = () => { 
    mega_menu_box.classList.add('box-preview');
    console.log( mega_menu_box.classList);
    mega_menu_box.addEventListener("mouseover", mouseOverEvent);
    mega_menu_box.addEventListener("mouseout", mouseOutEvent);
};


const mouseOutEvent = () => { 
    mega_menu_box.classList.remove('box-preview');
    console.log( mega_menu_box.classList);
    console.log( mega_menu_box.classList);

};



mega_menu_icon.addEventListener("mouseover", mouseOverEvent);
mega_menu_icon.addEventListener("mouseout",mouseOutEvent);
// MEGA MENU ENDS






// SIDE MENU START
const side_menu_icon = document.getElementById('sidemenu');
const menu_box = document.getElementById('menu-box');
const close_icon = document.getElementById('close-icon');

console.log(menu_box);
side_menu_icon.addEventListener('click', ()=>{
    menu_box.style.display = "block";
});
close_icon.addEventListener('click', ()=>{
    menu_box.style.display = "none";
});
// SIDE MENU ENDS 


