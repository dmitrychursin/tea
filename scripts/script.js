$(document).ready(function () {


    $('.banner-main').slick({
        infinite: true,
        slidesToShow: 1
    });

    $(function () {
        $("#accordion").accordion();
    });

    $('.image-link').magnificPopup({
        type: 'image'
    });

    $('.card-image').magnificPopup({
        type: 'image'
    });

    $('.card-image2').magnificPopup({
        type: 'image'
    });
    $('.card-image3').magnificPopup({
        type: 'image'
    });
    $('.card-image4').magnificPopup({
        type: 'image'
    });
    $('.card-image5').magnificPopup({
        type: 'image'
    });
    $('.card-image6').magnificPopup({
        type: 'image'
    });


    new WOW({
        animateClass: 'animate__animated',
    }).init();


    const name = document.getElementById('validationCustom01');
    const surname = document.getElementById('validationCustom02');
    const tel = document.getElementById('validationCustom03');
    const country = document.getElementById('validationCustom04');
    const index = document.getElementById('validationCustom05');
    const address = document.getElementById('validationCustom06');
    const btn = document.getElementById('btn');
    const form = document.querySelector('form');
    const orderInfo = document.getElementById('order-info');
    const orderTitle = document.getElementById('h2');
    const order = document.getElementById('order');


    name.addEventListener("keydown", (event) => {
        const number = +event.key;
        if (!isNaN(number)) {
            event.preventDefault();
        }
    });
    surname.addEventListener("keydown", (e) => {
        const number = +e.key;
        if (!isNaN(number)) {
            e.preventDefault();
        }
    });
    country.addEventListener("keydown", (e) => {
        const number = +e.key;
        if (!isNaN(number)) {
            e.preventDefault();
        }
    });
    index.addEventListener("keydown", (e) => {
        const number = +e.key;
        if (isNaN(number)) {
            e.preventDefault();
        }
    });


    name.onkeydown = function (e) {
        if (e.key === ".") {
            return false;
        }
        if (e.key === ",") {
            return false;
        }
    };
    surname.onkeydown = function (e) {
        if (e.key === ".") {
            return false;
        }
        if (e.key === ",") {
            return false;
        }
    };
    country.onkeydown = function (e) {
        if (e.key === ".") {
            return false;
        }
        if (e.key === ",") {
            return false;
        }
    };

    const phone = $('.phone');
    phone.inputmask({"mask": "(999) 999-99-99"});

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (!name.value) {
            alert("заполните поле 'Имя'.");
            return;
        }
        if (!surname.value) {
            alert("заполните поле 'Фамилия'.");
            return;
        }
        if (!tel.value) {
            alert("заполните поле 'Телефон'.");
            return;
        }
        if (!country.value) {
            alert("заполните поле 'Страна'.");
            return;
        }
        if (index.value.length <= 5) {
            alert("заполните поле 'Индекс' не менее 6 символов");
            return;
        }
        if (!address.value) {
            alert("заполните поле 'Адрес'.");
            return;
        }
        orderInfo.style.display = 'block';
        orderTitle.remove();
        order.remove();

    });


});


