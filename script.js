function validation(){
    let phone = document.getElementById("num").value;
    let numLength = phone.length;
    let firstNumbers = phone.substr(0,2);
    let lastNums = phone.substr(numLength-9, 9);
    let num;


    if (numLength < 9){
        alert("Numbers Missing! please check again....")
        document.getElementById("msg").innerHTML ="Invalid Number";
    }else if (numLength == 9){
        alert("Number validation successful!");
        num = "94" + phone;
        document.getElementById("msg").innerHTML = num;
    }else if (numLength == 10){
       num = "94" + lastNums;
       document.getElementById("msg").innerHTML = num;
    }else if (numLength > 11){
        alert("Invalid! please check again....")
        document.getElementById("msg").innerHTML ="Invalid Number";
    }else if(numLength == 11 && firstNumbers != 94){
        alert("Numbers Missing! please check again....")
        document.getElementById("msg").innerHTML ="Invalid Number";
    }else if (numLength == 11 && firstNumbers == 94){
         alert("Number validation successful!");
         num = phone;
         document.getElementById("msg").innerHTML = num;
    }else {
         alert("Invalid! please check again....")
        document.getElementById("msg").innerHTML ="Invalid Number";
    }


}

