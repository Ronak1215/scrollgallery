let scrollerContainer = document.querySelector(".gallery")
let backbtn = document.querySelector("#back-btn")
let nextbtn = document.querySelector("#next-btn")

scrollerContainer.addEventListener("wheel",(e)=>{
  e.preventDefault();
  scrollerContainer.scrollLeft += e.deltaY
  scrollerContainer.style.scrollBehavior = "smooth";
})

backbtn.addEventListener('click',()=>{
  scrollerContainer.scrollLeft -= 270
  scrollerContainer.style.scrollBehavior = "smooth";
})
nextbtn.addEventListener('click',()=>{
  scrollerContainer.scrollLeft += 270
  scrollerContainer.style.scrollBehavior = "smooth";
})