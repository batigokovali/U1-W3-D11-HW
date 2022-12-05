//EX7 Write a function to change the h1 text to something else
function changeH1 (newTitle)
{
    let newH1 = document.getElementById("shop-header-h1")
    console.log(newH1)
    newH1.innerText = newTitle;
}

changeH1(newTitle)

//EX8
function changeBGColor (newBGColor)
{
    let newBG = document.body;
    newBG.style.backgroundColor = newBGColor;
}

changeBGColor(newBGColor)

//EX9: Write a function to change the footer address with a fake one

function changeFooter (newFooter)
{
    let footer = document.querySelector(".footer");
    console.log(footer)
    footer.innerText = newFooter;
}

changeFooter(newFooter)

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

addCSSClass()


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

function invokePrices()
{
    let priceNodes = document.querySelectorAll(".price")
    for (let i = 0; i< priceNodes.length; i++)
    {
        let node = priceNodes[i]
        node.classList.toggle("invoke")
    }
}