alert ("start");

let weight = Number(prompt("Enter your weight in kg:"));
let height = Number(prompt("Enter your height in meters:"));
let BMI = weight / (height * height);
console.log("Your BMI is " + BMI);

if (BMI <18.5) {
    console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 25) {
    console.log("You have a normal weight");
} else if (BMI >= 25 && BMI <= 30) {
    console.log("You are overweight");
} else {
    console.log("You are obese");
}


let scoredmarks = Number(prompt("Enter your scored marks:"));
let totalmarks = Number(prompt("Enter your total marks:"));
let percentage = (scoredmarks / totalmarks) * 100;
console.log("Your percentage is " + percentage + "%");
if (percentage >= 80) {
console.log("You got A grade");
}
else if (percentage >= 70 && percentage < 79) {
    console.log("You got B grade");
}
else if (percentage >= 60 && percentage < 69) {
    console.log("You got C grade");
}
else if (percentage >= 50 && percentage < 59) {
    console.log("You got D grade");
}
else {
    console.log("You got U grade");
}


for (let i = 1; i <= 5; i++) {
    console.log("Room number " + i);
     let lenght = Number(prompt("Enter lenght for Room" +i+ ": "));
    let width = Number(prompt("Enter width for Room" +i+ ": "));

    let area = lenght * width;

    console.log("Area of Room " + i + " is " + area);

}

console.log("All Rooms are calculated");

