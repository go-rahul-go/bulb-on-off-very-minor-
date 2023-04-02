var image=document.getElementById("image");
const h1=document.getElementById("h1");
const div=document.querySelector(".image-box");
function changeImage()
{
    if(image.src.match("bulbon"))
    {
        image.src="pic_bulboff.gif";
        h1.style.color="white";
        div.style.borderColor="white";
    }
    else
    {
        image.src="pic_bulbon.gif";
        h1.style.color="yellow";
        div.style.borderColor="yellow";
    }
    
}