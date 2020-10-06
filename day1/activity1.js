let catFactsUL = document.getElementById("catFactsUL")

let request = new XMLHttpRequest()

request.addEventListener('load', function() {
    

    let result = JSON.parse(this.responseText)

    let factItems = result.all.map((fact) => {
        return `<li>
        <label>${fact.text}</label>
        <b>${fact.user ? fact.user.name.first : null}</b>
        <b>${fact.user ? fact.user.name.last : null}</b>

        </li>`
    })

    catFactsUL.insertAdjacentHTML('beforeend', factItems.join(''))
    
    // result.all.forEach((fact) => {
    //     console.log(fact.text)
    //     if(fact.user) {
    //     console.log(fact.user.name.first)
    //     console.log(fact.user.name.last)
    //     }

    // })

})

request.open('GET', 'https://cat-fact.herokuapp.com/facts')

request.send()