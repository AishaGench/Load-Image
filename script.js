
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise((resolve,reject) =>{
          let imgTag = document.createElement("img");
          imgTag.src =imgPath;
          console.log(imgTag)
          imgContainer.appendChild(imgTag);

          imgTag.addEventListener("load",function(){
              console.log(`Image is loaded`);
              resolve(imgTag);
          });

          imgTag.addEventListener("error",function(){
            reject(`We are unable to load the image at this moment!!`);
        });

  })
}
let currentImage;
const  waitFor = ms =>new Promise(resolve => setTimeout(resolve, ms));

createImage("./images/img-1.jpg")
    .then( (result)=> {
        currentImage = result; 
        return waitFor(2000)})
    .then( ()=> {
        currentImage.style.display = "none";
        return createImage("./images/img-2.jpg")})
    .then( (result)=> {
        currentImage = result; 
        return waitFor(2000)})
    .then( ()=> {
        currentImage.style.display = "none";
        return createImage("./images/img-3.jpg")})
    .catch( (err)=> {
        console.log(err)
    })



