//Capturando elementos do projeto
const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');

const number1 = document.getElementById("number1");

const isNumerosRomanos = document.getElementById("isNumRomanos"); //Pega situação do checkbox
//console.log(isNumerosRomanos.checked)

const setRotation = (element, rotationPercentage) =>{
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () =>{
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage = ( minutesPercentage + currentDate.getHours()) / 12;
    
    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);
    changeSecondsHand(currentDate.getSeconds());
    
}

changeSecondsHand = (seconds) =>{
    if(seconds%2 ==0){
        secondsHand.style.setProperty("background-color","blue");
    }else{
        secondsHand.style.setProperty("background-color","red");
    }
    
};

const changeNumbers = (element) => {
    console.log(element)
    if(element){
        document.getElementById("number1").innerText = "I";
        number2.innerText = "II";
        number3.innerText = "II";
        number4.innerText = "IV";
        number5.innerText = "V";
        number6.innerText = "VI";
        number7.innerText = "VII";
        number8.innerText = "VII";
        number9.innerText = "IX";
        number10.innerText = "X";
        number11.innerText = "XI";
        number12.innerText = "XII";
    }else
    {
        number1.innerText = "1";
        number2.innerText = "2";
        number3.innerText = "3";
        number4.innerText = "4";
        number5.innerText = "5";
        number6.innerText = "6";
        number7.innerText = "7";
        number8.innerText = "8";
        number9.innerText = "9";
        number10.innerText = "10";
        number11.innerText = "11";
        number12.innerText = "12";
    }
    
};


//isNumerosRomanos.addEventListener('change',changeNumbers(isNumerosRomanos.checked)); //descobrir pq essa linha não funciona igual a forma abaixo
isNumerosRomanos.addEventListener('change',()=>{
    changeNumbers(isNumerosRomanos.checked)
});

//Iniciando o relógio e atualizando ele
setClock();

setInterval(setClock, 1000);