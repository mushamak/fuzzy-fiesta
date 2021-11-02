const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))
async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50")

    const { results } = await res.json()
    console.log(results);

    //Clear results
    result.innerHTML = ""

    results.forEach(user => {
        const li = document.createElement("li")
        const img = document.createElement('img')
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        listItems.push(li)

    //     li.innerHTML = `
    // <img scr="${user.picture.large}" alt="${user.name.first}">
    // <div class="user-info">
    //    <h4>${user.name.first} ${user.name.last}</h4>
    //    <p>${user.location.city}, ${user.location.country}</p>
    // </div> 
    // `
        img.src = user.picture.large
        img.setAttribute('alt', user.name.first)

        h4.textContent = `${user.name.first} ${user.name.last}`
        p.textContent = `${user.location.city}, ${user.location.country}`

        div.appendChild(h4)
        div.appendChild(p)
        div.className = 'user-info'
        li.appendChild(img)
        li.appendChild(div)

        result.appendChild(li)

    });
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide")
        } else {
            item.classList.add("hide")

        }
    })

}