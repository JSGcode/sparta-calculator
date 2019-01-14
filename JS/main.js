// =============Basic Calculator Function =============
function basicCalculator(){
    var input1 = prompt("Insert your first value");
    var input2 = prompt("Insert your second value");
    var basicOperator = prompt("Insert the desired operation (+,-,*,/)");
    var str2Int1 = Number(input1);
    var str2Int2 = Number(input2);
        switch (basicOperator) {
            case "+":
                result = str2Int1+str2Int2;
                break;  
            case "-":
                result = str2Int1-str2Int2;
                break;
            case "/":
                result = (str2Int1/str2Int2);
                break;
            case "*":
                result = str2Int1*str2Int2;
                break;
            default:5
                alert("Invalid Operator");
                break;
        }
        return result;
}

// =============Advanced Calculator Function =============
function advCalculator() {
    var option = prompt("Which Operation would you like:\n 1 - BMI,\n 2 - Celsius to Farenheit,\n 3 - Farenheit to Celsius");
        switch (option) {
            case "1":
                var weight = prompt("Please enter your weight(kg):");
                var height = prompt("Please enter your height(m):");
                var weight2Int = parseFloat(weight);
                var height2Int = parseFloat(height);
                result = weight2Int/Math.pow(height2Int, 2);
                break;  
            case "2":
                var celsiusStr = prompt("Please the tempreture(in celsius) to convert to Farenheit:");
                var celsius2Int = parseFloat(celsiusStr);
                result = (celsius2Int*1.8)+32;
                break;
            case "3":
                var farenStr = prompt("Please the tempreture(in Farenheit) to convert to celsius:");
                var faren2Int = parseFloat(farenStr);
                result = (faren2Int-32)/1.8;
                break;
            default:
                alert("Invalid Option");
                break;
        }
        return result;
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


