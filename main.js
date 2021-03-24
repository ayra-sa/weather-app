let weather = {
    apiKey : "49d5d134cc3fd61b9fa218c858de2b84",
    fetchWeather : function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data)); 
    },
    displayWeather: (data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" +icon+ ".png";
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".desc").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-inp").value);
    },
};

document.querySelector(".search button").addEventListener("click", () => {
        weather.search();
});