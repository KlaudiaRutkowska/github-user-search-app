import "../styles/style.scss"
import "./fetchUserData.js"

let isDarkMode = false;
const modeButton = document.querySelector("button.mode")
const html = document.documentElement
const modeButtonText = document.querySelector('button.mode > p')

const changeColorMode = (darkMode) => {
    if (darkMode) {
        isDarkMode = true
        html.classList.add("dark")
        html.style.colorScheme = "dark"
        modeButtonText.innerHTML = 'light'

        return
    }

    isDarkMode = false;
    html.classList.remove("dark")
    html.style.colorScheme = "light"
    modeButtonText.innerHTML = 'dark'
};

modeButton.addEventListener("click", () => {
    changeColorMode(!isDarkMode)
})

//it runs on first page render
//matchMedia is function which checks window matches media query
//prefers-color-scheme checks system color scheme
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
//matches is boolean which is true when media query is matched
changeColorMode(darkThemeMq.matches)