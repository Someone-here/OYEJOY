const small=document.getElementsByClassName('small')[0]
const navLinks=document.getElementsByClassName('nav-links')[0]
small.addEventListener('click',()=>{
navLinks.classList.toggle('active')
})