
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-link");
const x = document.querySelector(".social-icons")

navToggle.addEventListener("click", function() {
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }else{
        links.classList.add("show-links")
    }
})

// navToggle.addEventListener("click", function() {
//     if(socialLinks.classList.contains("show-link")){
//         socialLinks.classList.remove("show-link")
//     }else{
//         socialLinks.classList.add("show-link")
//     }
// })

function myFunction() {
      if(x.style.display === "block"){
          x.style.display === "none";
      }else{
          x.style.display === "block";
      }
}