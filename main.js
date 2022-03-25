let phrases = [
    { text: "Do'stlaringizga jonatganda uyalmang", image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'Aviabilet kabi tez ketsin', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'Reperning soziday tez ishlasin', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'MindDev kabi', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'Kitoblar va gullar kabi chiroyli bolsin', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
    { text: 'tan olingan payti Londonda qimmatga ketsin', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'kamentariyalar va yangiliklarda bomba bolsin', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'yoqimli musiqa kabi bolsin', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function timeShower() {
    var timeNow = new Date();
    document.querySelector(".hours").textContent = timeNow.getHours()
    document.querySelector(".minuts").textContent = timeNow.getMinutes()
    document.querySelector(".seconds").textContent = timeNow.getSeconds()
}
timeShower()
setInterval(function() {
    timeShower()
}, 1000)
let button = document.getElementById('button');
let butto = document.getElementById('butto');
let butt = document.getElementById('butt');
let but = document.getElementById('but');
let bu = document.getElementById('bu');
let btn = document.getElementById('btn');
let bbc = document.getElementById('bbc');
let bc = document.getElementById('bc');
let bs = document.getElementById('bs');
let ba = document.getElementById('ba');
let image = document.getElementById('image');
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let d = document.getElementById('d')
let e = document.getElementById('e')
let f = document.getElementById('f')
let g = document.getElementById('g')
let h = document.getElementById('h')
let j = document.getElementById('j')
let i = document.getElementById('i')
button.addEventListener('click', () => {
    image.style.display = 'none'
    button.style.display = 'none'
    butto.style.display = 'block'
    a.style.display = 'block'
});
butto.addEventListener('click', () => {
    a.style.display = 'none'
    b.style.display = 'block'
    butt.style.display = 'block'
    butto.style.display = 'none'
});
butt.addEventListener('click', () => {
    b.style.display = 'none'
    c.style.display = 'block'
    but.style.display = 'block'
    butt.style.display = 'none'
});
but.addEventListener('click', () => {
    c.style.display = 'none'
    d.style.display = 'block'
    bu.style.display = 'block'
    but.style.display = 'none'
});
bu.addEventListener('click', () => {
    d.style.display = 'none'
    e.style.display = 'block'
    btn.style.display = 'block'
    bu.style.display = 'none'
});
btn.addEventListener('click', () => {
    e.style.display = 'none'
    f.style.display = 'block'
    bbc.style.display = 'block'
    btn.style.display = 'none'
});
// bbc.addEventListener('click', () => {
//     f.style.display = 'none'
//     g.style.display = 'block'
//     bc.style.display = 'block'
//     bbc.style.display = 'none'
// });
bc.addEventListener('click', () => {
    g.style.display = 'none'
    h.style.display = 'block'
    bc.style.display = 'none'
    bs.style.display = 'block'
});
bs.addEventListener('click', () => {
    h.style.display = 'none'
    i.style.display = 'block'
    bs.style.display = 'none'
    ba.style.display = 'block'
});
ba.addEventListener('click', () => {
    i.style.display = 'none'
    j.style.display = 'block'
    bs.style.display = 'none'
    button.style.display = 'block'
});
let loader = document.querySelector('.loader');
document.addEventListener("DOMContentLoaded", () => {
    let loader = document.querySelector(".loader");
    setTimeout(function() {
        loader.style.display = "none";
        setTimeout(function() {
            loader.style.opacity = "0";
        }, 1000);
    }, 1500);
});