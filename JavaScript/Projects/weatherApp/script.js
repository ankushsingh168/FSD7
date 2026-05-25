 async function getWeather() {

      const city = document.getElementById("cityInput").value;

      const apiKey = "fb5955210d7c25ae8a0c092f1ade9623";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod == "404"){
          alert("City not found");
          return;
        }

        document.getElementById("temp").innerHTML =
          Math.round(data.main.temp) + "°C";

        document.getElementById("city").innerHTML =
          data.name;

        document.getElementById("humidity").innerHTML =
          data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
          data.wind.speed + " km/h";

      } catch(error){
        alert("Something went wrong");
      }
    }