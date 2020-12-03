let cityInput = document.getElementById("cityInput")
let searchButton = document.getElementById("searchButton")
let weatherOutput = document.getElementById("weatherOutput")
let errorOutput = document.getElementById("errorOutput")

searchButton.addEventListener("click", () => {
    let varURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=49ac96f4ba652f4ab69217775805c9be&units=imperial`

    fetch(varURL)
    .then(response => response.json())
    .then(weatherItems => {
        console.log(weatherItems)
        let description = convertArray(weatherItems.weather[0].description)
        let weatherVar = `<ul>
                            <p id="lineSpace"><i><span>City: </span></i>${weatherItems.name}</p>
                            <p><i><span>Description: </span></i>${description}</p>
                            <p><i><span>High of: </span></i>${weatherItems.main.temp_max}&#176F</p>
                            <p><i><span>Low of: </span></i>${weatherItems.main.temp_min}&#176F</p>
                            <p><i><span>Feels Like: </span></i>${weatherItems.main.feels_like}&#176F</p>
                          </ul>`
        weatherOutput.innerHTML = weatherVar
        
        }
    ).catch(() => {
        let statement = "Not a city!"
        errorOutput.innerHTML = statement
    })

function convertArray(string) {
    let someVar = string.split(" ")
    let titleLetters = []
    for(let index = 0; index < someVar.length; index++) {
        let firstLetter = someVar[index][0].toUpperCase()
        let secondLetter = someVar[index].slice(1)
        titleLetters.push(`${firstLetter}${secondLetter}`)
    }
return titleLetters.join(" ")
}})



