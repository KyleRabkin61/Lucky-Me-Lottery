// create an array to store names

const namesArray = []

function addName() {

    // storing name input element as a variable

    const nameInput = document.getElementById('nameInput')

    // obtain the trimmed value of the input box and store it as a variable

    const name = nameInput.value.trim()

    // add the name to the end of the array

    namesArray.push(name)

    // call the displayNames function to update the list

    displayNames()
    
    // clear the input field after adding the name
    nameInput.value = ''
}