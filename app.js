let nav_state = "close"

document.querySelector(".hamburger").addEventListener("click", () => {
   if(nav_state == "close")
   {
     document.querySelector("nav").classList.add("nav-open")
     nav_state = "open"
}
else
{
        document.querySelector("nav").classList.remove("nav-open")
        nav_state = "close"
   }
})

const blog_pages = 3
let i = 1

document.querySelectorAll(".paginator i").forEach(element => {
   element.addEventListener("click", paginator)
})
document.querySelectorAll(".paginator a").forEach(element => {
   element.addEventListener("click", setIndex)
})

function setIndex()
{
   document.querySelector(".paginator a:nth-child(" + (i+1) + ")").classList.remove("active")
   i = Array.from(this.parentElement.children).indexOf(this)
   document.querySelector(".paginator a:nth-child(" + (i+1) + ")").classList.add("active")
}

function paginator()
{
   document.querySelector(".paginator a:nth-child(" + (i+1) + ")").classList.remove("active")
   if(this.id == "next-page")
   {
      i = (i == blog_pages) ? 1 : (i+1)
      window.location.href = "#blogs" + i
   }
   else
   {
      i =  (i == 1) ? blog_pages : (i-1)
      window.location.href = "#blogs" + i
   }
   document.querySelector(".paginator a:nth-child(" + (i+1) + ")").classList.add("active")
}