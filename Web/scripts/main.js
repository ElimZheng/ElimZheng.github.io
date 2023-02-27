/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/*document.querySelector('html').addEventListener('click', 
()=>{alert('Do not tickle me, I am sensitive.');})*/

let myImage = document.querySelector('img')
myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src') /* myImage.src is incorrect */
    if(mySrc === 'images/profile.JPG')
        myImage.setAttribute('src', 'images/know.JPG')
    else
        myImage.setAttribute('src', 'images/profile.JPG')
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('Please enter your name');
    if(!myName)
    {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome cool guy ' + myName;
}
  

if(!localStorage.getItem('name')) 
{
    setUserName();
} 
else 
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome cool guy ' + storedName;
}
  

myButton.onclick = function()
{
    setUserName();
}

