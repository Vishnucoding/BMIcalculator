var heightInput = document.querySelector("#height")
var weightInput = document.querySelector("#weight")

function BMIcal() {

    let height = heightInput.value;
    let weight = weightInput.value;
    let bmitotal = weight/(height*height); 
    console.log(bmitotal);
     
    resultbmi.innerHTML = `BMI: ${bmitotal.toFixed(2)}`;

    if(bmitotal < 18.5){
        document.getElementById("result").innerHTML = "You are Under Weight ! Increase Food Intake";    
    }else if((bmitotal > 18.5) && (bmitotal < 24.9)){
        document.getElementById("result").innerHTML = "Your Weight is Normal";
    }else if((bmitotal > 25) && (bmitotal < 29.9 )){
        document.getElementById("result").innerHTML = "You are Over Weight!! Start Working Out";
    }else{
        document.getElementById("result").innerHTML = "You are Obese !! Start Working Out and Control your Diet ";
    }
}