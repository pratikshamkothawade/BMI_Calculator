
let myButton = document.querySelector("button");

myButton.onclick=()=>{
    bmi();
};
function bmi(){
    let height = prompt("Enter height (in m): ");
    let weight = prompt("Enter weight (in kg): ");
    let result = weight/(height*height);
    let res = Math.round(result);
    if(res<18.5){
        alert("You are underweight, you should consider gaining weight to reach a healthy BMI range.This can be achieved by eating a balanced diet and engaging in regular exercise.");
    }
    else if(res>=18.5 && res<25){
        alert("Congratulations! This is a healthy BMI range, and you should focus on maintaining your current weight by continuing to eat a balanced diet and exercising regularly.");
    }
    else if(res>=25 && res<30){
        alert("You are overweight, you should focus on losing weight to reach a healthy BMI range. This can be achieved by making dietary changes and engaging in regular exercise.");
    }
    else{
        alert("You are obese, you are at an increased risk of developing serious health conditions such as heart disease, diabetes, and certain types of cancer. You should focus on losing weight to reduce your risk of these health problems. This can be achieved by making dietary changes, engaging in regular exercise, and seeking the help of a healthcare professional if needed.");
    }
}