function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid values!";
        document.getElementById("category").innerText = "";
        return;
    }

    let heightInMeters = height / 100;
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    document.getElementById("result").innerText = `Your BMI: ${bmi}`;

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight 😟";
        document.getElementById("category").style.color = "#e67e22";
    } 
    else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal Weight 🙂";
        document.getElementById("category").style.color = "#27ae60";
    } 
    else if (bmi >= 25 && bmi < 30) {
        category = "Overweight 😐";
        document.getElementById("category").style.color = "#f1c40f";
    } 
    else {
        category = "Obese 😟";
        document.getElementById("category").style.color = "#e74c3c";
    }

    document.getElementById("category").innerText = category;
}
