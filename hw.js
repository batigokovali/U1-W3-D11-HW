//EX7 Write a function to change the h1 text to something else
function changeH1 (Title)
{   
    let nodeTitle = document.getElementById("shop-header-h1")
    nodeTitle.innerText = Title;
}



//EX8
function changeBGColor (newBGColor)
{
    let newBG = document.body;
    newBG.style.backgroundColor = newBGColor;
}



//EX9: Write a function to change the footer address with a fake one

function changeFooter (newFooter)
{
    let footer = document.querySelector(".footer");
    console.log(footer)
    footer.innerText = newFooter;
}



//EX10: Write a function to add a CSS class to every Amazon link

function addCSSClass()
{
    let newCSS = document.querySelectorAll(".image");
    console.log(newCSS);
    for (let i = 0; i < newCSS.length; i++)
    {
        let newCSSNode = newCSS[i];
        newCSSNode.classList.add("image-class");
    }
}




//EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function toggleImages()
{
    let imageNodes = document.querySelectorAll(".image")
    for (let i = 0; i < imageNodes.length; i++)
    {
        let node = imageNodes[i]
        node.classList.toggle("selected")
    }
}


//EX12: Write a function to color the price of the products in a different one every time it’s invoked

function randomInteger(max)
{
    return Math.floor(Math.random()*(max +1));
}

console.log(randomInteger(255));

function randomRGBColor()
{
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}


function randomPriceColor()
{
    let priceNode = document.querySelectorAll(".price")
    for (i = 0; i< priceNode.length; i++)
    {
        let node = priceNode[i];
        node.style.color = `rgb(${randomRGBColor()})`
    }
}

randomPriceColor()