import { animateCountUp } from "./countUp";

// const username = "KlaudiaRutkowska";
// const username = "octocat"
// const username = "Juraso2"

const form = document.querySelector("form")
const input = document.querySelector('input[type="text"]')
const noResults = document.querySelector('.input-wrapper > span')

input.addEventListener('input', (event) => {
    if (noResults.style.display === 'block') {
        noResults.style.display = 'none'
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetchData(data.get("username"));
});

const fetchData = (username) => {
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if (response.ok) {
                noResults.style.display = 'none'
                return response.json()
            } else {
                noResults.style.display = 'block'
                throw new Error("Nie udało się pobrać danych")
            }
        })
        .then((userData) => {
            setData(userData);
        })
        .catch((error) => {
            console.error("Wystąpił błąd: ", error.message);
        });
};

const setData = (data) => {
    const img = document.querySelector('img[alt="user icon"]');
    const loadingIcon = document.querySelector("div.loading-icon");
    img.classList.remove("skeleton", "skeleton-icon");
    loadingIcon.style.display = "none";
    img.style.display = "block";
    img.setAttribute("src", data.avatar_url);

    const h2 = document.querySelector("h2.name");
    h2.classList.remove("skeleton", "skeleton-name");
    if (data.name != null) {
        h2.innerHTML = data.name;
    } else {
        h2.innerHTML = data.login;
    }

    const login = document.querySelector("p.login");
    login.classList.remove("skeleton", "skeleton-login");
    login.innerHTML = "@" + data.login;

    const createdAt = document.querySelector("p.created-at");
    createdAt.classList.remove("skeleton", "skeleton-date");
    const fullDate = new Date(data.created_at);
    const day = fullDate.getDate();
    const month = fullDate.toLocaleString("en-US", {
        month: "short",
    });

    const year = fullDate.getFullYear();
    createdAt.innerHTML = "Joined " + day + " " + month + " " + year;

    const description = document.querySelector("p.description");
    description.classList.remove("skeleton", "skeleton-description");
    if (data.bio != null) {
        description.innerHTML = data.bio;
    } else {
        description.innerHTML = "This profile has no bio";
    }

    const repos = document.querySelector(".repos-wrapper > .repos");
    animateCountUp(repos, data.public_repos, 1000);

    const followers = document.querySelector(".followers-wrapper > .followers");
    animateCountUp(followers, data.followers, 1000);

    const following = document.querySelector(".following-wrapper > .following");
    animateCountUp(following, data.following, 1000);

    const location = document.querySelector("p.location");
    location.classList.remove("skeleton", "skeleton-social");
    const svgLocation = document.querySelector(".location-wrapper > svg");
    if (data.location != null) {
        location.innerHTML = data.location;
        location.classList.remove("not-avaliable");
        svgLocation.classList.remove("not-avaliable");
    } else {
        location.innerHTML = "Not Avaliable";
        location.classList.add("not-avaliable");
        svgLocation.classList.add("not-avaliable");
    }

    const blog = document.querySelector("a.blog");
    blog.classList.remove("skeleton", "skeleton-social");
    const svgBlog = document.querySelector(".blog-wrapper > svg");
    if (data.blog != false) {
        blog.setAttribute("href", data.blog);
        blog.innerHTML = data.blog;
        blog.classList.remove("not-avaliable");
        svgBlog.classList.remove("not-avaliable");
    } else {
        blog.innerHTML = "Not Avaliable";
        blog.classList.add("not-avaliable");
        svgBlog.classList.add("not-avaliable");
    }

    const twitter = document.querySelector("p.twitter");
    twitter.classList.remove("skeleton", "skeleton-social");
    const svgTwitter = document.querySelector(".twitter-wrapper > svg");
    if (data.twitter_username != null) {
        twitter.innerHTML = data.twitter_username;
        twitter.classList.remove("not-avaliable");
        svgTwitter.classList.remove("not-avaliable");
    } else {
        twitter.innerHTML = "Not Avaliable";
        twitter.classList.add("not-avaliable");
        svgTwitter.classList.add("not-avaliable");
    }

    const github = document.querySelector("a.github");
    github.classList.remove("skeleton", "skeleton-social");
    const svgGithub = document.querySelector(".github-wrapper > svg");
    if (data.html_url != null) {
        github.setAttribute("href", data.html_url);
        github.innerHTML = "@github";
        github.classList.remove("not-avaliable");
        svgGithub.classList.remove("not-avaliable");
    } else {
        github.innerHTML = "Not Avaliable";
        github.classList.add("not-avaliable");
        svgGithub.classList.add("not-avaliable");
    }
};