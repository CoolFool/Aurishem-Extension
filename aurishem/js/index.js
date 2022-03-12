let install = document.createElement("div");
install.id = "aurishem"
install.style.textAlign = "center"
install.style.margin = "0.5em"

let button = document.createElement('input');
button.name = "install"
button.value = "Install"
button.type = "button"

let aurFooter = document.getElementById("footer")
let parentDiv = aurFooter.parentNode
parentDiv.insertBefore(install,aurFooter)

let packageName = document.querySelector("td.main").textContent.split(".")[0].split(":")[1].trim()
let aurRepoUrl = `https://aur.archlinux.org/packages/${packageName}`
aurRepoUrl = encodeURIComponent(aurRepoUrl)

let aurishemLink = document.createElement('a');
aurishemLink.href = `aurishem://${aurRepoUrl}`

install.appendChild(aurishemLink)
aurishemLink.appendChild(button)
