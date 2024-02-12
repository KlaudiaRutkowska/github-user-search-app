// const username = "KlaudiaRutkowska"
const username = "octocat"
// const username = "Juraso2"

fetch(`https://api.github.com/users/${ username }`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Nie udało się pobrać danych");
        }
    })
    .then((userData) => {
        setData(userData)
    })
    .catch((error) => {
        console.error("Wystąpił błąd: ", error.message);
    });

    const setData = (data) => {
        console.log(data)

        const img = document.querySelector('img[alt="user icon"]')
        img.setAttribute('src', data.avatar_url)

        const h2 = document.querySelector('h2.name')
        if (data.name != null) {
            h2.innerHTML = data.name
        } else {
            h2.innerHTML = data.login
        }

        const login = document.querySelector('p.login')
        login.innerHTML = '@' + data.login

        const createdAt = document.querySelector('p.created-at')
        const fullDate = new Date(data.created_at)
        const day = fullDate.getDate()
        const month = fullDate.toLocaleString('en-US', {
            month: 'short'
        })

        const year = fullDate.getFullYear()
        createdAt.innerHTML = 'Joined ' + day + ' ' + month + ' ' + year

        const description = document.querySelector('p.description')
        if (data.bio != null) {
            description.innerHTML = data.bio
        } else {
            description.innerHTML = 'This profile has no bio'
        }

        const repos = document.querySelector('.repos-wrapper > .repos')
        repos.innerHTML = data.public_repos

        const followers = document.querySelector('.followers-wrapper > .followers')
        followers.innerHTML = data.followers

        const following = document.querySelector('.following-wrapper > .following')
        following.innerHTML = data.following

        const location = document.querySelector('p.location')
        const svgLocation = document.querySelector('.location-wrapper > svg')
        if (data.location != null) {
            location.innerHTML = data.location
            location.classList.remove('not-avaliable')
            svgLocation.classList.remove('not-avaliable')
        } else {
            location.innerHTML = 'Not Avaliable'
            location.classList.add('not-avaliable')
            svgLocation.classList.add('not-avaliable')
        }

        const blog = document.querySelector('a.blog')
        const svgBlog = document.querySelector('.blog-wrapper > svg')
        if (data.blog != false) {
            blog.setAttribute('href', data.blog)
            blog.innerHTML = data.blog
            blog.classList.remove('not-avaliable')
            svgBlog.classList.remove('not-avaliable')
        } else {
            blog.innerHTML = 'Not Avaliable'
            blog.classList.add('not-avaliable')
            svgBlog.classList.add('not-avaliable')
        }

        const twitter = document.querySelector('p.twitter')
        const svgTwitter = document.querySelector('.twitter-wrapper > svg')
        if (data.twitter_username != null) {
            twitter.innerHTML = data.twitter_username
            twitter.classList.remove('not-avaliable')
            svgTwitter.classList.remove('not-avaliable')
        } else {
            twitter.innerHTML = 'Not Avaliable'
            twitter.classList.add('not-avaliable')
            svgTwitter.classList.add('not-avaliable')
        }

        const github = document.querySelector('a.github')
        const svgGithub = document.querySelector('.github-wrapper > svg')
        if (data.html_url != null) {
            github.setAttribute('href', data.html_url)
            github.innerHTML = '@github'
            github.classList.remove('not-avaliable')
            svgGithub.classList.remove('not-avaliable')
        } else {
            github.innerHTML = 'Not Avaliable'
            github.classList.add('not-avaliable')
            svgGithub.classList.add('not-avaliable')
        }
    }