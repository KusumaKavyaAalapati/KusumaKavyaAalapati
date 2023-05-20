const userInput = document.querySelector("#textareaInput")
const postData = document.querySelector("#post-data")
const postButton = document.querySelector("#post-btn")
let userInputData;
const userInputHandler = (e) => {
    userInputData = e.target.value
}
const postClickHandler = () => {
    postData.textContent = userInputData
}
userInput.addEventListener("input",userInputHandler)
postButton.addEventListener("click",postClickHandler)
