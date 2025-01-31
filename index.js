// img {
//   -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
//   filter: blur(5px);
// }

const container = document.querySelector('.container');

 
window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {  // Change 100 to the scroll threshold you prefer
        container.style.backgroundImage = 'url("./otherScreen.jpg")';
    }
    else if (window.scrollY< 100) {  // Change 100 to the scroll threshold you prefer
        container.style.backgroundImage = 'url("./wallper.jpg")';
    }
    
    else {
        container.style.backgroundImage = originalImage;
    }
});