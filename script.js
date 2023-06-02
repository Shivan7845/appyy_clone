var one = document.querySelector("#one");
var slide = document.querySelector("#slide");

var flag = 0
one.addEventListener("mouseover" , function(){
    if(flag == 0){
        slide.style.top = "0"
        flag = 1;
    }else{
        slide.style.top = "-100%"
        flag = 0;
    }

});