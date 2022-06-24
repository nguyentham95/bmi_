function check() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / (Math.pow(height,2))
    let result = "";
    console.log(bmi);
    if ( bmi < 16) {
        result = "Gầy cấp độ 3";
    } else if(bmi < 17) {
        result = "Gầy cấp độ 2";
    } else if (bmi < 18.5) {
        result = "Gầy cấp độ 1";
    } else if (bmi < 25) {
        result = "Bình thường";   
    } else if (bmi < 30) {
        result = "Thừa cân";  
    } else if (bmi < 35) {
        result = "Béo phì độ 1";  
    } else if (bmi < 40) {
        result = "Béo phì độ 2";
    } else  {
        result = "Béo phì độ 3";
    }

document.getElementById("result").innerHTML = result;
    
}