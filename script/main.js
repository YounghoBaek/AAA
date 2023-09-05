//변수설정
const slider = document.querySelector("#slider");
const slider2 = document.querySelector("#slider2");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let enableClick = true;

init(slider);
init(slider2);
next.addEventListener("click", (e) => {
    e.preventDefault();
    if (enableClick) {
        nextSlide(slider);
        nextSlide(slider2);
        enableClick = false;
    }
})
prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (enableClick) {
        prevSlide(slider);
        prevSlide(slider2);
        enableClick = false;
    }
})
//next슬라이드를 움직이는 함수
function nextSlide(frame) {
    const ul = frame.querySelector("ul");
    new Anim(ul, {
        prop: "margin-left",
        value: "-200%",
        duration: 1000,
        callback: () => {
            ul.style.marginLeft = "-100%";
            ul.append(ul.firstElementChild);
            enableClick = true;
        }
    })
}
//prev로 슬라이드를 움직이는 함수
function prevSlide(frame) {
    const ul = frame.querySelector("ul");
    new Anim(ul, {
        prop: "margin-left",
        value: "0%",
        duration: 1000,
        callback: () => {
            ul.style.marginLeft = "-100%";
            ul.prepend(ul.lastElementChild);
            enableClick = true;
        }
    })
}
//초기화작업을 하는 함수
function init(frame) {
    const ul = frame.querySelector("ul");
    const lis = ul.querySelectorAll("li");
    const len = lis.length;
    ul.style.marginLeft = "-100%";
    ul.prepend(ul.lastElementChild);
    ///
    ul.style.width = `${100 * len}`;

    lis.forEach((el) => {
        el.style.width = `${100 / len}`;
    })

}