let subMenu = document.getElementById("subMenu")
const page = document.querySelector(".page")


const toggleMenu = () => {
  subMenu.classList.toggle("open-menu")
}

// quand on clique sur la page, on enleve la classe open-menu
page.addEventListener("click", () => {
  subMenu.classList.remove("open-menu")
})