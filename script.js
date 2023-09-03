const redSlider=document.getElementById("redSlider");
const greenSlider=document.getElementById("greenSlider");
const blueSlider=document.getElementById("blueSlider");

const redValueSpan=document.getElementById("redValue");
const greenValueSpan=document.getElementById("greenValue");
const blueValueSpan=document.getElementById("blueValue");

const colorbox=document.getElementById("color-box");
const copyButton=document.getElementById("copyButton");
const inpuTtypeRGBValue=document.getElementById("input-type");

redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyButton.addEventListener('click',copyRGBValue);

function updateColor(){
 const redValue=redSlider.value;
 const greenValue=greenSlider.value;
 const blueValue=blueSlider.value;

  const rgbColor=`rgb(${redValue},${greenValue},${blueValue})`
  console.log(rgbColor);
  colorbox.style.backgroundColor=rgbColor;

  redValueSpan.textContent=redValue;
  greenValueSpan.textContent=greenValue;
  blueValueSpan.textContent=blueValue;

  inpuTtypeRGBValue.textContent=rgbColor;

}
updateColor();

function copyRGBValue(){
    const redValue=redSlider.value;
    const greenValue=greenSlider.value;
    const blueValue=blueSlider.value;
    const rgbColor=`rgb(${redValue},${greenValue},${blueValue})`
     
    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("RGB Value to be copied to clipboard"+rgbColor);
    })
    .catch((error)=>{
        console.error("Failed To Copy RGB Value",error);
    });

}

