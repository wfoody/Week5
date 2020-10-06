

let emailInput = document.getElementById("emailInput")
let orderInput = document.getElementById("orderInput")
let coffeeListUL = document.getElementById("coffeeListUL")
let submitButton = document.getElementById("submitButton")


let orderLink = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/'
let emailOrderLink = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress'

let request = new XMLHttpRequest()
request.onload = function () {
    let orderItems = Object.values(JSON.parse(this.responseText))
    orderItems.map(function(item) {
        coffeeListUL.innerHTML += `
            <li>Email Address: ${item.emailAddress}</li>
            <li>Coffee Order: ${item.coffee}</li>
        `
    })
}

request.open("GET", orderLink)
request.send()

submitButton.addEventListener("click", function() {
    let email = emailInput.value
    let order = orderInput.value
    let postRequest = new XMLHttpRequest()
    postRequest.open("POST", orderLink)

    let orderDetails = { 
        coffee: order,
        emailAddress: email
    }
    postRequest.setRequestHeader("Content-Type", "application/json")
    postRequest.send(JSON.stringify(orderDetails))

    postRequest.onload = function() {
        let newCoffee = JSON.parse(this.responseText)
        // console.log(newCoffee)
        coffeeListUL.innerHTML += `   
        <li>Email Address: ${newCoffee.emailAddress}</li>
        <li>Coffee Order: ${newCoffee.coffee}</li>
   
    `
    }
})

/* #####################################################################################  */
let filterBox = document.getElementById("filterBox")
let filterButton = document.getElementById("filterButton")

// need to replace emailaddress with the input emailaddress

let filterRequest = new XMLHttpRequest()

filterButton.addEventListener("click", function(){
    let filterCoffee = JSON.parse(this.responseText)
    filterRequest.onload = function(){
        coffeeListUL.innerHTML = `
            <li> <strong>Email Address:</strong> ${filterCoffee.emailAddress}</li>
            <li> <strong>Coffee Order:</strong> ${filterCoffee.coffee} </li>
        `
    }

    filterRequest.open("GET", `https://dc-coffeerun.herokuapp.com/api/coffeeorders/${filterBox.value}`)
    filterRequest.send()


})
