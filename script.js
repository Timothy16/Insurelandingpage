let removeText = document.querySelector(".removeText")
let picture= document.querySelector(".picture")
let removeImage = document.querySelector(".image")
let addImage = document.querySelector(".addImage")
let addText = document.querySelector(".addText")
function myColor(y){
    if(y.matches){
        removeText.style.display = "none"
        picture.style.marginTop = "0"
        removeImage.style.display = "none"
        addImage.classList.add("image")
        addImage.style.display="block"
        addImage.style.maxWidth = "100%"
        addImage.style.height = "auto"
        // addText.style.display="block"
        addText.classList.add("col")

        
    }
    // else{
    //     document.body.style.backgroundColor = "blue"
    // }
}
var y = window.matchMedia("(max-width:700px)")
myColor(y)
