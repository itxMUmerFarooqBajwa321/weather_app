document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#search-btn').onclick=()=>{
        const city= document.querySelector('#city-input').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48db447071adee4e7901983feb908f24&units=metric`)
        .then(response => response.json())
        .then (data=>{
            
            const temp= Math.round(data.main.temp);
            const humidity = data.main.humidity;
            const windSpeed = Math.round( data.wind.speed);
            const cityName = data.name;
            const main = data.weather[0].main;     // tells clouds,clear, etc

            const cityEle= document.querySelector('#city');
            const tempEle = document.querySelector('#temp');
            const humidityEle = document.querySelector('#humidity');
            const windSpeedEle = document.querySelector('#wind-speed');
            const imageEle = document.querySelector('#weather-visual');
            
            tempEle.innerText = temp+"°C";
            humidityEle.innerText = humidity+"%";
            windSpeedEle.innerText = windSpeed+ "km/h";
            cityEle.innerText = cityName;
            
            let path= "assets/";
            path+= main;
            path += ".png";
            console.log(path);

            imageEle.src =path;
            document.querySelector('#invalid-city').innerText="";
            document.querySelector('.weather').style.display ='block';

        })
        .catch (error =>{
            document.querySelector('#invalid-city').style.display= 'flex'; 
            document.querySelector('.weather').style.display='none';
            console.log(`Error: ${error}`);
        });
        
    };
});







