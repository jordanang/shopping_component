document.addEventListener("DOMContentLoaded", function(event) {
    const imagesContainer = document.getElementById("images_container");
    const mainImg = document.getElementById("main_image");

    const images = [
        "./assets/primary_shadow.png",
        "./assets/shadow0.png",
        "./assets/shadow1.png",
        "./assets/shadow2.png",
        "./assets/shadow3.png",
    ];

    let mainIndex = 0;

    setMainImg(images[mainIndex]);

    // Initially build image elements
    for (let i=0; i<images.length; i++){
        if (i !== mainIndex) {
            const newImage = document.createElement("img");
            newImage.setAttribute("src", images[i]);
            newImage.setAttribute("index", i);
            newImage.addEventListener("click", handleChangeImage);
            imagesContainer.appendChild(newImage);
        }
    }

    function setMainImg(src){
        mainImg.setAttribute("src", src);
    }

    function rebuildImages(){
        const imageElements = imagesContainer.getElementsByTagName("img")
        let p = 0;
        for (let i=0; i<images.length;i++){
            if (i !== parseInt(mainIndex)){
                imageElements[p].setAttribute("src", images[i]);
                imageElements[p].setAttribute("index", i)
                p++
            }
        }
    }

    function handleChangeImage(e) {
        mainIndex = e.target.getAttribute("index")
        setMainImg(images[mainIndex])
        rebuildImages();
    }

});