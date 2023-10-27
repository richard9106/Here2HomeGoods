const sectionOne = document.querySelector(".section-one");
const nav = document.querySelector(".container-nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    nav.classList.remove(scrollUp);
    sectionOne.style="margin-top:0px";
    return;
  }
  if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
    // down
    nav.classList.remove(scrollUp);
    nav.classList.add(scrollDown);
    sectionOne.style="margin-top:0px";
  } else if (currentScroll < lastScroll && nav.classList.contains(scrollDown)) {
    // up
    nav.classList.remove(scrollDown);
    nav.classList.add(scrollUp);
    sectionOne.style="margin-top:75.14px";
  }
  lastScroll = currentScroll;
});