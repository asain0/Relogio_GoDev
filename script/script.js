//Capturando elementos do projeto
const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');

const isNumerosRomanos = document.getElementById("isNumRomanos"); //Pega situação do checkbox

const digitalHours = document.querySelector(".digitalHours");
const digitalMinutes = document.querySelector('.digitalMinutes');
const digitalSeconds = document.querySelector('.digitalSeconds');
const digitalClock = document.querySelector('.digitalClock');
const isDigitalClock = document.getElementById('isDigitalClock');
const isAnalogicClock = document.getElementById('isAnalogicClock');
const analogicClock = document.querySelector(".clock");

const isDateVisible = document.getElementById('isDateVisible');
const dateComponent = document.querySelector('.currentDate');

const setRotation = (element, rotationPercentage) =>{
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

const updateDisplay = (date)=>{
    digitalSeconds.innerText = date.getSeconds().toString().padStart(2, '0'); //estudar outras formas de melhorar esse trecho
    digitalMinutes.innerText = date.getMinutes();
    digitalHours.innerText = date.getHours();
}

const setClock = () =>{
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    
    const secondsPercentage = currentSeconds / 60;
    const minutesPercentage = (secondsPercentage + currentMinutes) / 60;
    const hoursPercentage = ( minutesPercentage + currentHour) / 12;
    
    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);
    changeSecondsHand(currentDate.getSeconds());
    updateDisplay(currentDate);
    
}

//Mudar cor do ponteiro dos segundos
changeSecondsHand = (seconds) =>{
    seconds%2 ==0 ?
        secondsHand.style.setProperty("background-color","blue") : 
        secondsHand.style.setProperty("background-color","red");
};

const changeNumbers = (isRomanos) => {
    
    if(isRomanos){
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

const showsAnalogicClock = (isAnalogic) => {
    !isAnalogic ?
        analogicClock.style.setProperty("display", "none") :
        analogicClock.style.setProperty("display", "block");//exemplo
};

const showsDigitalClock = (isDigital) => {
    !isDigital ?
        digitalClock.style.setProperty("display", "none") :
        digitalClock.style.setProperty("display", "flex");
};

const showDateComponent = (isDateVisible) => {
    !isDateVisible ?
        dateComponent.style.setProperty("display", "none") :
        dateComponent.style.setProperty("display", "flex");
}

//isNumerosRomanos.addEventListener('change',changeNumbers(isNumerosRomanos.checked)); //descobrir pq essa linha não funciona igual a forma abaixo
isNumerosRomanos.addEventListener('change',()=>{
    changeNumbers(isNumerosRomanos.checked)
});

isAnalogicClock.addEventListener('change',()=>{
    showsAnalogicClock(isAnalogicClock.checked);
});
isDigitalClock.addEventListener('change',()=>{
    showsDigitalClock(isDigitalClock.checked);
});

isDateVisible.addEventListener('change',()=>{
    showDateComponent(isDateVisible.checked);
});

//Iniciando o relógio e atualizando ele
setClock();

setInterval(setClock, 1000);