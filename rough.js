var button = document.getElementsByClassName('button');
var display = document.getElementById('display');
var oparator = null;
var oparant1 = 0;
var oparant2 = 0;
for(var i = 0; i < button.length; i++)
{
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        console.log(value);
        var text = display.textContent.trim();
        if(value == '+'){
            oparant1 = parseFloat(text);
            oparator = value;
            display.textContent = " ";
            
        }
        else if(value == '-'){
            oparant1 = parseFloat(text);
            oparator = value;
            display.textContent = " ";
            
        }
        else if(value == '*'){
            oparant1 = parseFloat(text);
            oparator = value;
            display.textContent = " ";
            
        }
        else if(value == '/'){
            oparant1 = parseFloat(text);
            oparator = value;
            display.textContent = " ";
        }
        else if(value == 'sign'){
            oparant1 = parseFloat(text);
            display.textContent = -(oparant1);
        }
        else if(value == '='){
            oparant2 = parseFloat(text);
            var result = eval(oparant1 + " " + oparator + " " +oparant2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        else if(value == 'ac'){
            display.textContent = " ";
        }
        else if(value == '%'){
            var result = parseFloat(text);
            var ans = result/100;
            display.textContent = ans;
        }
        else{
            display.textContent += value;
        }
    })
}
