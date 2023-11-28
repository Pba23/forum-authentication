let isLoggedIn = true
let rightBarContent = ["photo", "dashboard", "bibblii", "settings", "Deconnect"]
let container = document.getElementById("container-flex")

const preventReloadLinks = container.querySelectorAll('.leftnav-link');


export const displayAccueil = () => {
    if (isLoggedIn) {
        

        let rightBar = document.createElement("div")
        rightBar.id = "rightBar"

        rightBarContent.forEach( (element, i) => {
            if (element == "photo") {
            let li = document.createElement("li")
            let img = document.createElement("img")
            img.src = "./assets/profile.png"
            img.id = `${element}${i}`
            li.appendChild(img)
            rightBar.appendChild(li)
           } else {
            let a = document.createElement("a")
            a.className = "leftnav-link"
            a.href = "/" + element
            a.textContent = element
            a.id = `${element}${i}`
            a.addEventListener('click', function (e) {
                e.preventDefault()
                window.history.pushState({}, '', e.target.href)
                //console.log(e.target.href)
                handleRoutes(e)
            });
            rightBar.appendChild(a)
           }
        })
        
        let content = document.createElement("div")
        content.id = "allContent"
        
        displayAllContent(content)

        container.appendChild(rightBar)
        container.appendChild(content)
        console.log('ok')
        document.body.appendChild(container)
    }
}
export let displayAllContent = (element) => {
    let onlineDiv = document.createElement("div")
    onlineDiv.textContent = '3 people are online'
    onlineDiv.id = "onlineDiv"
    onlineDiv.style.backgroundColor = "blue"

    element.appendChild(onlineDiv)

    let tabBar = document.createElement("div")
    tabBar.id = "tabBar"
    
    tabBar.style.backgroundColor = "yellow"
    let messageButton =  document.createElement("button")
    messageButton.textContent = "Message"
    messageButton.id = "messageButton"
    messageButton.addEventListener("click", (e) => {
        let elem = document.getElementById('posts')
        elem.textContent = "All Message Here"
    })
    let PostButton =  document.createElement("button")
    PostButton.textContent = "Posts"
    PostButton.id = "PostButton"
    PostButton.addEventListener("click", (e) => {
        let elem = document.getElementById('posts')
        elem.textContent = "All Posts Here"
    })
    tabBar.appendChild(PostButton)
    tabBar.appendChild(messageButton)

    element.appendChild(tabBar)

    let bodyContent = document.createElement("div")
    bodyContent.style.backgroundColor = 'red'
    bodyContent.id = "bodyContent"
    let posts = document.createElement("div")
    posts.id = "posts"
    posts.style.backgroundColor = 'red'
    posts.textContent = "All Posts"
    let onlineStatus = document.createElement("div")
    onlineStatus.id = "onlineStatus"
    onlineStatus.style.backgroundColor = 'grey'
    onlineStatus.textContent = 'We are online'

    bodyContent.appendChild(posts)
    bodyContent.appendChild(onlineStatus)

    element.appendChild(bodyContent)
}
let handleRoutes = (e) => {
    
}
displayAccueil() 