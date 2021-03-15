let img = document.querySelectorAll(".img-effect")

for(let i = 0; i < img.length; i++){
    img[i].addEventListener("touchstart", function(){
        img[i].classList.add("img-effect:hover");
        img[i].classList.add("img-effect");
        img[i].classList.add("img-effect:hover::before");
        img[i].classList.add("img-effect::before");
        console.log("sample")
    })

}