// Random Arabic Letter generator
//Math.floor((Math.random()*10)+6)  <--------for (6 to 15)
//Math.floor((Math.random()*10)+1)  <--------for (1 to 10)

/*
  // Between any two numbers
 Math.floor(Math.random() * (max - min + 1)) + min;

// Between 0 and max
Math.floor(Math.random() * (max + 1));

// Between 1 and max
Math.floor(Math.random() * max) + 1;

 */

/* --------------------><--------------------------- */
/* Arabic Letter Array */
let ArabicLetters = ["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","ء"];
//29 -->0 - 28

$("#generator").click(function(){
    let randomIndex = randomNumberGenerator(0,28);
    console.log(randomIndex);
    $("#display").html(ArabicLetters[randomIndex]);
    $("#display").css('fontSize',"9rem");
    $("#display").css('color',"green");
    $("#display").attr('class',"neonBorder");
    window.clearInterval(slideUpInterval);
    clearSlideUpInterval();
    // $("#fixedContainer").css("display","none");
});


let slideUpInterval = setInterval(function(){
    $("#slideUpArowContainer").slideUp(1100);
    $("#slideUpArowContainer").fadeIn(1100);
},900)


function clearSlideUpInterval(){
    window.clearInterval(slideUpInterval);
}

//Display None Function
function displayNone(){
    $("#fixedContainer").css("display","none");
}

//Current Year
let currentYear = new Date().getFullYear();

//jQuery
$("#year").html(currentYear); 


//Function For Generating Random Number
function randomNumberGenerator(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min ;
}