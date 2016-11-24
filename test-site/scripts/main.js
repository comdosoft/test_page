var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.jpg') {
      myImage.setAttribute ('src','images/alt-logo.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-logo.jpg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}