//EX7 Write a function to change the h1 text to something else
function changeH1 (newTitle)
{
    let newH1 = document.getElementById("shop-header-h1")
    console.log(newH1)
    newH1.innerText = newTitle;
}

changeH1("Batı's Smartphone Shop")

//EX8
function changeBGColor (newBGColor)
{
    let newBG = document.body;
    newBG.style.backgroundColor = newBGColor;
}

changeBGColor("white")

//EX9: Write a function to change the footer address with a fake one

function changeFooter (newFooter)
{
    let footer = document.querySelector(".footer");
    console.log(footer)
    footer.innerText = newFooter;
}

changeFooter("Prof. Dr. Sadan Gokovali Cd. No:18 Ula/Mugla")

//EX10: Write a function to add a CSS class to every Amazon link

function addCSSClass(newCSSClass)
{
    let newCSS = document.querySelectorAll("image");
    for (let i = 0; newCSS.length; i++)
    {
        let newCSSNode = newCSS[i]
        newCSSNode.classList.add(newCSSClass);
    }
}

addCSSClass("image-class")


//EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

//EX12: Write a function to color the price of the products in a different one every time it’s invoked