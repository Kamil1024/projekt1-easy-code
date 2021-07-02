const button = document.querySelector(".mobile-button__wrapper");
const mobileNav = document.querySelector(".mobile-menu__wrapper");
// const sendForm = document.getElementById('sendForm');
function toggleNav(){
    if(mobileNav.style.display=="")
    mobileNav.style.display = 'block';
    else{
        mobileNav.style.display = "";
    }
}
function catchError(){
    if(window.innerWidth>=1200){
        mobileNav.style.display = "";
    }
}
// const handleSubmit = e=>{
//     console.log(e)
//     e.preventDefault()
// }
button.addEventListener('click',toggleNav);
window.addEventListener('resize',catchError);
// sendForm.addEventListener('submit',e=>handleSubmit(e))