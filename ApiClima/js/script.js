//IIFE (immediately invoked function expression)
(function() {
const appId = "9f15a7f4dcf2bddb278257f7b6f95a88"; 

//CAPTURO ELEMENTOS
//Formulario
let elemForm = document.getElementById("div-ciudades");

//Boton Buscar -- ADD CIUDADES
let elemAddBtn = document.getElementById("add-btn");

//Elementos de temperatura
let elemTemp = document.getElementById("temp");
let elemPres = document.getElementById("pres");
let elemHum = document.getElementById("hum");
let elemTempMin = document.getElementById("temp-min");
let elemTempMax = document.getElementById("temp-max");



elemAddBtn.addEventListener("click", function(event) {
  event.preventDefault()



  let city = document.getElementById('input-city').value;
  //Fetch url
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appId=${appId}`)
  //fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + city + "&appId=" + appId)


    .then(function(response){
      return response.json();
    })


    //FUNCION DATA
    .then(function (data) {

    //Resultado del Input Ciudad
    let elemCity = document.getElementById('input-city').value;
    let elemCityResul = document.getElementById('resul-city');
    elemCityResul.innerText = elemCity;

    //Datos de temperatura 
    elemTemp.innerText = data.main.temp + '°';
    elemTempMin.innerText = data.main.temp_min + '°';
    elemTempMax.innerText = data.main.temp_max + '°';
    elemPres.innerText = data.main.pressure + '' + 'Hpa';
    elemHum.innerText = data.main.humidity + '%';



    // Celsius
    //Botones cambio de temperatura
    let elemBtnCelsius = document.getElementById('cel');
    elemBtnCelsius.addEventListener("click", function celsius() {
      elemTemp.innerText = parseInt(data.main.temp - 273.15) + '°';
      elemTempMin.innerText = parseInt(data.main.temp_min - 273.15) + '°';
      elemTempMax.innerText = parseInt(data.main.temp_max - 273.15) + '°';
    })


    //Fahrenheit
    //Botones cambio de temperatura
    let elemBtnFahren = document.getElementById('faren');
    elemBtnFahren.addEventListener("click", function fahrenheit() {
      elemTemp.innerText = parseInt(data.main.temp - 273.15 + 32) + '°';
      elemTempMin.innerText = parseInt(data.main.temp_min - 273.15 + 32 )+ '°';
      elemTempMax.innerText = parseInt(data.main.temp_max - 273.15 + 32 )+ '°';
    })


    //To Kelvin
    //Botones cambio de temperatura
    let elemBtnKelvin = document.getElementById('kel');
    elemBtnKelvin.addEventListener("click", function kelvin() {
      elemTemp.innerText = data.main.temp + '°';
      elemTempMin.innerText = data.main.temp_min + '°';
      elemTempMax.innerText = data.main.temp_max + '°';
    })


    }) 
    .catch(function(error){

      console.log("something went wrong", error);
      return error;
    })
  
  })  

})()