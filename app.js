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