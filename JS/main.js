// =============Basic Calculator Function =============
function basicCalculator(){
    var input1 = parseInt(prompt("Insert your first value"));
    var input2 = parseInt(prompt("Insert your second value"));
    var basicOperator = prompt("Insert the desired operation (+, -, *, /)");
        switch (basicOperator) {
            case "+":
                result = input1+input2;
                break;  
            case "-":
                result = input1-input2;
                break;
            case "/":
                result = (input1/input2);
                break;
            case "*":
                result = input1*input2;
                break;
            default:
                alert("Invalid Operator");
                break;
        }
        return result;
}

// =============Advanced Calculator Function =============
function advCalculator() {
    var option = prompt("Which calculation would you like to do:\n 1 - For BMI,\n 2 - To convert Celsius into Farenheit,\n 3 - To convert Farenheit into Celsius");
        switch (option) {
            case "1":
                var weight = parseFloat(prompt("Please enter your weight(kg):"));
                var height = parseFloat(prompt("Please enter your height(m):"));
                result = weight/Math.pow(height, 2);
                break;  
            case "2":
                var celsius = parseFloat(prompt("Please the tempreture(in celsius) to convert to Farenheit:"));
                result = (celsius*1.8)+32;
                break;
            case "3":
                var faren = parseFloat(prompt("Please the tempreture(in Farenheit) to convert to celsius:"));
                result = (faren-32)/1.8;
                break;
            default:
                alert("Invalid Option");
                break;
        }
        return result.toFixed(2);
}

// ============= Main Code =============
var bool = true;
var calcOption;
while(bool === true){
    calcOption = prompt("Which Calculator do you wish to use type:\n 1 - For Basic Calculator\n 2 - For Advanced Calculator\n 3 - to Quit");
    if (calcOption === "1"){
        alert(basicCalculator());
    }
    else if(calcOption === "2"){
        alert(advCalculator());
    }
    else if(calcOption === "3"){
        alert("Bye Bye");
        bool = false;
    }
    else{
        alert("Invalid Option");
    }
}


