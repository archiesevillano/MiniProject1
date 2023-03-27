
// Slides inside the form
const donate_amount = document.querySelector('.dc1');
const donate_personal = document.querySelector('.dc2');
const donate_payment = document.querySelector('.dc3');

//Next Btns
document.getElementById('confirm-amount-btn').addEventListener('click', () => switchSlide(donate_amount, donate_personal));
document.getElementById('next-btn').addEventListener('click', () => switchSlide(donate_personal, donate_payment));

//Back Btns
document.getElementById('p-info-back-btn').addEventListener('click', () => switchSlide(donate_personal, donate_amount));
document.getElementById('back-btn').addEventListener('click', () => switchSlide(donate_payment, donate_personal));


function switchSlide(fromSlide, toSlide) {
    //current slide will move to left and be hidden
    fromSlide.style.left = "200%";
    fromSlide.style.opacity = 0;

    //New slide will show from right to left
    toSlide.style.left = 0;
    toSlide.style.opacity = 1;
}
