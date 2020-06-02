const myImage = document.querySelector('img')

myImage.onclick = function () {
  let imgSrc = myImage.getAttribute('src')
  if (imgSrc === 'images/download.jpeg') {
    myImage.setAttribute('src', 'images/oefeningen-twee.jpeg')
  } else {
    myImage.setAttribute('src', 'images/donwnload.jpeg')
  }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
  let myName = prompt('Please enter your name.')
  if (!myName) {
    setUserName()
  }
  localStorage.setItem('name', myName)
  myHeading.textContent = 'Mozilla is cool, ' + myName
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  let storedName = localStorage.getItem('name')
  myHeading.textContent = 'Mozilla is cool, ' + storedName
}
myButton.onclick = function () {
  setUserName()
}
