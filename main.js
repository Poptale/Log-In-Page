let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page4 = document.querySelector(".page4");
let toggle = document.querySelector(".toggle")
let btn = document.querySelector(".toggle-btn");
let btn2 = document.querySelector(".back");
btn.addEventListener("click", ()=>{
    toggle.classList.add("tgl");
    toggle.classList.remove("tgl2");
    page2.classList.remove("pp2");
    page2.classList.add("p2");
    page3.style.display = "flex";
    page3.classList.remove("pp3");
    page3.classList.add("p3");
    page4.style.display = "flex";
    page4.classList.add("p4");
    page4.classList.remove("pp4");
    page1.classList.add("p1");
    }
)
btn2.addEventListener("click", ()=>{
    toggle.classList.remove("tgl");
    toggle.classList.add("tgl2");
    page2.classList.remove("p2");
    page2.classList.add("pp2");
    page3.style.display = "none";
    page3.classList.remove("p3");
    page4.classList.add("pp4");
    page4.classList.remove("p4");
    page1.classList.remove("p1");
    }
)