//Capturando elementos do projeto
const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');
const isNumerosRomanos = document.getElementById("isNumRomanos"); //Pega situação do checkbox
const digitalHours = document.querySelector(".digitalHours");
const digitalMinutes = document.querySelector('.digitalMinutes');
const digitalSeconds = document.querySelector('.digitalSeconds');
const isDigitalClock = document.getElementById('isDigitalClock');
const isAnalogicClock = document.getElementById('isAnalogicClock');
const analogicClock = document.querySelector(".clock");

const isDayVisible = document.getElementById('dayVisible');
const isMonthVisible = document.getElementById('monthVisible');
const isYearVisible = document.getElementById('yearVisible');

const dayComponent = document.querySelector('.day');
const monthComponent = document.querySelector('.month');
const yearComponent = document.querySelector('.year');




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

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage = ( minutesPercentage + currentDate.getHours()) / 12;
    
    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);
    changeSecondsHand(currentDate.getSeconds());
    updateDisplay(currentDate);
    
}

//Mudar cor do ponteiro dos segundos
changeSecondsHand = (seconds) =>{
    if(seconds%2 ==0){
        secondsHand.style.setProperty("background-color","blue");
    }else{
        secondsHand.style.setProperty("background-color","red");
    }
    
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
    if(!isAnalogic){
        analogicClock.style.setProperty("display", "none");//exemplo
    }else{
        analogicClock.style.setProperty("display", "block");//exemplo
    }
    
};
const showsDigitalClock = (isDigital) => {
    if(!isDigital){
        digitalClock.style.setProperty("display", "none");
    }else{
        digitalClock.style.setProperty("display", "flex");
    }
};

const showDayComponent = (isDayVisible) => {
    if(!isDayVisible){
        dayComponent.style.setProperty("display", "none");
    }else{
        dayComponent.style.setProperty("display", "block");
    }
}
const showMonthComponent = (isMonthVisible) => {
    if(!isMonthVisible){
        monthComponent.style.setProperty("display", "none");
    }else{
        monthComponent.style.setProperty("display", "block");
    }
}
const showYearComponent = (isYearVisible) => {
    if(!isYearVisible){
        yearComponent.style.setProperty("display", "none");
    }else{
        yearComponent.style.setProperty("display", "block");
    }
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

isDayVisible.addEventListener('change',()=>{
    showDayComponent(isDayVisible.checked);
});

isMonthVisible.addEventListener('change',()=>{
    showMonthComponent(isMonthVisible.checked);
});

isYearVisible.addEventListener('change',()=>{
    showYearComponent(isYearVisible.checked);
});





//Iniciando o relógio e atualizando ele
setClock();

setInterval(setClock, 1000);