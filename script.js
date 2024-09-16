const menuBarCLickHandler = ()=>{
    const menuIcon = document.querySelector('#menu-icon');
    const menu = document.querySelector('.mobile-menu-items'); 
    menuIcon.addEventListener('click',()=>{
        menu.classList.toggle("clicked")
      
      
    })
}


const backgroundNavbarOnScroll = ()=>{
    const navigationBar = document.querySelector(".navigation");
    window.addEventListener("scroll",(e)=>{
 if(window.scrollY> 0){
    navigationBar.classList.add("scroll");
 }else{
    navigationBar.classList.remove("scroll");
 }
    })
}
document.addEventListener('DOMContentLoaded',()=>{
    menuBarCLickHandler();
backgroundNavbarOnScroll();
})