var form = document.getElementById('formId');
var weather_report =[];




function getWeather(txt){
    let child = document.createElement("li");

    fetch('https://api.weatherapi.com/v1/current.json?key=3d8c3846d674495ba38141908210511&q=' +txt+ '&aqi=no') 
    .then(response => response.json())
    .then(response=> {
        res =response;
        let new_report = {
            city:  res.location.name,
            state: res.location.region,
            feelLike: res.current.feelslike_c,
            temperature: res.current.temp_c,
            humidity: res.current.humidity,
            windSpeed:res.current.wind_kph,
            precipition: res.current.precip_mm ,
            pressure :res.current.pressure_in,
            cond:res.current.condition.text,
            img: res.current.condition.icon
        }

        weather_report.push(new_report);
        console.log(res)
        // console.log(weather_report.length)
        for(var i =0; i < weather_report.length; i++){
            child.innerHTML = `
            <div class="card" id="li`+i+`">
                    <div class="head">
                        <span>`+weather_report[i].city+`, `+weather_report[i].state+`</span>
                    </div>
                    <div class="weather">
                    <img src="`+weather_report[i].img+`" class="img">
                    <span>`+weather_report[i].cond+`</span>
                        <span class="main">`+weather_report[i].temperature+`°C</span>
                        <span>feels like: `+weather_report[i].feelLike+`°C</span>
                    </div>
                    <div class="description">
                        <span>Humidity:`+weather_report[i].humidity+`%</span>
                        <span>Wind Speed:`+weather_report[i].windSpeed+` Kmph</span>
                        <span>Pressure:`+weather_report[i].pressure+`</span>
                        <span>Precipition:`+weather_report[i].precipition+` mm</span>
                    </div>
                    
                    <div class="button">
                    <button class="remove" id="nt" onclick = "foof()">Remove</button>
                    </div>
                    </div>
                    `
                    
                    document.getElementById('info').appendChild(child)
                    let btn = document.querySelectorAll("#nt")
                    
                    for(var j = 0; j < btn.length ;j++){
                        btn[j].addEventListener("click", foof)
                    }
                }
                // console.log(weather_report[i])
            }
            )
}
let foof = (e)=>{
    let ele = document.getElementById(e.target.parentElement.parentElement.id);
    ele.style.display = "none"
    
    // console.log(e)
};
function ex (e){
    e.preventDefault();
    var text = document.getElementById('search').value;

    if(text != ''){
        getWeather(text)
    } else{
        alert("enter a place")
    }
   
}

form.addEventListener('submit', ex);
// btn.addEventListener("click", foof)
