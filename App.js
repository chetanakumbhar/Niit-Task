const API_KEY = `67264fb8aaa19443e51f4e816202ef0a`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const respose = await fetch(url);
    const data = await respose.json()
    console.log(respose);
    return showWeather(data)
}

const showWeather = (data)=>{
    if(data.cod == '404'){
        weather.innerHTML=`<h2>City not found <h2>`
        return;
    }
    weather.innerHTML=`
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} °C</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
            event.preventDefault();

    }
)