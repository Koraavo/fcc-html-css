// $(function(){
//     $(".menu-btn").on("click", function() {
//         if($(".menu").hasClass("mobile-hide") && $(".login-button").hasClass("login-show")){
//             $(".menu").removeClass("mobile-hide");
//             $(".menu").addClass("mobile-show").slideDown();
//             $(".login-button").removeClass("login-show");
//             $(".login-button").addClass("login-hide");
//         }

//         else {
//             $(".menu").addClass("mobile-hide");
//             $(".menu").removeClass("mobile-show");
//             $(".login-button").addClass("login-show");
//             $(".login-button").removeClass("login-hide");
//         }
//     })
// });

const menuBtn = document.querySelector('.menu-btn');
const loginBtn = document.querySelector('.login-button')
const menu = document.querySelector('.menu')
let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
    if(menu.classList.contains('mobile-hide') && loginBtn.classList.contains('login-show')){
        menu.classList.remove('mobile-hide');
        menu.classList.add('mobile-show');
        loginBtn.classList.remove('login-show')
        loginBtn.classList.add('login-hide')
        menuOpen = true;
    } else {
        menu.classList.remove('mobile-show');
        menu.classList.add('mobile-hide');
        loginBtn.classList.remove('login-hide')
        loginBtn.classList.add('login-show')
        menuOpen = false;
    }
})