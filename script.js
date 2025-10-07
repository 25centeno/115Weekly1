var Value1 = 0
var Value2 = ""
var Value3 = 0
var Value4 = 0
var Value5 = 0

var Value1IsDone = 0;
var CalcRan = 0;
var IsZero = 0;

const Output = document.getElementById("Output")

function Calculator(Arg){

    function ClearCalc(){
        Value1 = 0
        Value2 = ""
        Value3 = 0
        Value4 = 0

        Value1IsDone = 0
        CalcRan = 0

        Output.innerHTML = "0"
    }

    function CalcV1(Arg2){
            if (Arg2 == "1"){
                Value1 = Value1+"1"
            } else if (Arg2 == "2"){
                Value1 = Value1+"2"
            } else if (Arg2 == "3"){
                Value1 = Value1+"3"
            } else if (Arg2 == "4"){
                Value1 = Value1+"4"
            } else if (Arg2 == "5"){
                Value1 = Value1+"5"
            } else if (Arg2 == "6"){
                Value1 = Value1+"6"
            } else if (Arg2 == "7"){
                Value1 = Value1+"7"
            } else if (Arg2 == "8"){
                Value1 = Value1+"8"
            } else if (Arg2 == "9"){
                Value1 = Value1+"9"
            } else if (Arg2 == "0"){
                Value1 = Value1+"0"
            } else if (Arg2 == "Dot"){
                Value1 = Value1+"."
            } else if (Arg2 == "Negative"){
                Value1 = Value1*-1
            } else if (Arg2 == "Square"){
                Value1 = Value1*Value1
            } else if (Arg2 == "BackSpace" && Number.isNaN(Value1) == false){
                Value1 = Value1.toString()
                var Temp = Value1.length
                Value1 = Value1.substring(0, (Temp-1))
            } else if (Arg2 == "BackSpace" && Number.isNaN(Value1) == true){
                Value1 = 0;
            }

            if (Value1 == ""){
                Value1 = 0;
            }

            Value1 = parseFloat(Value1)
            Output.innerHTML = Value1;
    }

    function CalcV2(Arg2){
        Value1IsDone = 1;

        if (Arg2 == "Plus"){
            Value2 = "Add"
        } else if (Arg2 == "Subtract"){
            Value2 = "Subtract"
        } else if (Arg2 == "Times"){
            Value2 = "Times"
        } else if (Arg2 == "Divide"){
            Value2 = "Divide"
        }
    }

    function CalcV3(Arg2){
        if (Arg2 == "1"){
                Value3 = Value3+"1"
            } else if (Arg2 == "2"){
                Value3 = Value3+"2"
            } else if (Arg2 == "3"){
                Value3 = Value3+"3"
            } else if (Arg2 == "4"){
                Value3 = Value3+"4"
            } else if (Arg2 == "5"){
                Value3 = Value3+"5"
            } else if (Arg2 == "6"){
                Value3 = Value3+"6"
            } else if (Arg2 == "7"){
                Value3 = Value3+"7"
            } else if (Arg2 == "8"){
                Value3 = Value3+"8"
            } else if (Arg2 == "9"){
                Value3 = Value3+"9"
            } else if (Arg2 == "0"){
                Value3 = Value3+"0"
            } else if (Arg2 == "Dot"){
                Value3 = Value3+"."
            } else if (Arg2 == "Negative"){
                Value3 = Value3*-1
            } else if (Arg2 == "Square"){
                Value3 = Value3*Value1
            } else if (Arg2 == "BackSpace" && Number.isNaN(Value3) == false){
                Value3 = Value3.toString()
                var Temp = Value3.length
                Value3 = Value3.substring(0, (Temp-1))
            } else if (Arg2 == "BackSpace" && Number.isNaN(Value3) == true){
                Value3 = 0;
            }

            if (Value3 == ""){
                Value3 = 0;
            }

            if (Value3 == 0 && Arg2 == "0"){
                IsZero = 1;
            }

            Value3 = parseFloat(Value3)
            Output.innerHTML = Value3;
    }

    function Calculate(){
        if (Value2 == "Times"){
            Value4 = parseFloat(Value1)*parseFloat(Value3)
        } else if (Value2 == "Divide" && Value3 != 0){
            Value4 = parseFloat(Value1)/parseFloat(Value3)
        } else if (Value2 == "Divide" && Value3 == 0){
            Value4 = "ERROR"
        } else if (Value2 == "Subtract"){
            Value4 = parseFloat(Value1)-parseFloat(Value3)
        } else if (Value2 == "Add"){
            Value4 = parseFloat(Value1)+parseFloat(Value3)
        }

        Value5 = Value3
        Value1 = Value4
        Value3 = 0
        Output.innerHTML = Value4 

        CalcRan = 1
    }


    if (Arg == "Equal") {
        if (CalcRan == 1 && Value3 == 0 && IsZero == 1){
            IsZero = 0;
            Calculate();
        } else if (CalcRan == 1 && Value3 == 0 && IsZero == 0){
            Value3 = Value5
            Calculate();
        } else {
            Calculate();
        }
    } else if (Arg == "Dot"){
        if (Value1IsDone == 1){
            CalcV3("Dot")
        } else {
            CalcV1("Dot")
        }
    } else if (Arg == "Square"){
        if (Value1IsDone == 1){
            CalcV3("Square")
        } else {
            CalcV1("Square")
        }
    } else if (Arg == "Negative"){
        if (Value1IsDone == 1){
            CalcV3("Negative")
        } else {
            CalcV1("Negative")
        }
    } else if (Arg == "+"){
        CalcV2("Plus");
    } else if (Arg == "/"){
        CalcV2("Divide");
    } else if (Arg == "*"){
        CalcV2("Times");
    } else if (Arg == "-"){
        CalcV2("Subtract");
    } else if (Arg == "1"){
        if (Value1IsDone == 1){
            CalcV3("1")
        } else {
            CalcV1("1")
        }
    } else if (Arg == "2"){
        if (Value1IsDone == 1){
            CalcV3("2")
        } else {
            CalcV1("2")
        }
    } else if (Arg == "3"){
        if (Value1IsDone == 1){
            CalcV3("3")
        } else {
            CalcV1("3")
        }
    } else if (Arg == "4"){
        if (Value1IsDone == 1){
            CalcV3("4")
        } else {
            CalcV1("4")
        }
    } else if (Arg == "5"){
        if (Value1IsDone == 1){
            CalcV3("5")
        } else {
            CalcV1("5")
        }
    } else if (Arg == "6"){
        if (Value1IsDone == 1){
            CalcV3("6")
        } else {
            CalcV1("6")
        }
    } else if (Arg == "7"){
        if (Value1IsDone == 1){
            CalcV3("7")
        } else {
            CalcV1("7")
        }
    } else if (Arg == "8"){
        if (Value1IsDone == 1){
            CalcV3("8")
        } else {
            CalcV1("8")
        }
    } else if (Arg == "9"){
        if (Value1IsDone == 1){
            CalcV3("9")
        } else {
            CalcV1("9")
        }
    } else if (Arg == "0"){
        if (Value1IsDone == 1){
            CalcV3("0")
        } else {
            CalcV1("0")
        }
    } else if (Arg == "ClearEverything"){
        ClearCalc();
    } else if (Arg == "Clear"){
        ClearCalc();
    } else if (Arg == "BackSpace"){
        if (Value1IsDone == 1){
            CalcV3("BackSpace")
        } else {
            CalcV1("BackSpace")
        }
    }
}