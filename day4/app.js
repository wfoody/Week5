
console.log(db)

const groceryTextBox = document.querySelector("#groceryTextBox");
const saveButton = document.querySelector("#saveButton");
const storeOutput = document.querySelector("#storeOutput");
const locationTextBox = document.querySelector("#locationTextBox");

saveButton.addEventListener('click', function() {
    let storeToSave = groceryTextBox.value;
    let storeAddress = locationTextBox.value;
    console.log(`I am going to ${storeToSave} at ${storeAddress}.`);
    docRef.set({
        storeLocation: storeAddress
    }).then(function() {
        console.log(`Store saved!`);
    }).catch(function(error) {
        console.log(`Got an error: `, error);
    });
})







