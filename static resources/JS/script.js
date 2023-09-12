let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");



const sr= ScrollReveal({
    distance:'40px',
    duration:2500,
    reset: true
});
/*sr.reveal('.logo',{delay:200,origin:'left'});
sr.reveal('.navbar',{delay:250,origin:'top'}); 
sr.reveal('.menu-btn',{delay:500,origin:'right'});*/
sr.reveal('.home-text',{delay:350,origin:'left'});
sr.reveal('.home-img',{delay:400,origin:'left'});

menu.onclick=()=>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle('open');
    
};