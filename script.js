let $container = document.getElementById("container");
let $input = document.getElementById("input");
let $button = document.getElementById("button");

const fetchData = async () => {
    try {
        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${$input.value}&units=metric&appid=50a7aa80fa492fa92e874d23ad061374`)
        let data = await api.json();
        let temperature = Math.floor(data.main.temp)
        let weather = data.weather[0].main
        let icon = data.weather[0].icon
        let nameCity = data.name
        $container.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">${nameCity}</h3>
                    <h1 class="card-title"><b>${temperature}°C</b></h1>
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
                    <h3 class="card-text">${weather}</h3>
                </div>
            </div>
        `
    } catch (error) {
        $container.innerHTML = `<div class="error"><h1>Ocurrio un error😕, intentelo nuevamente</div>`
    }
}

$button.addEventListener("click", () => {
    if ($input.value == "") {
        alert("Ingrese un dato, porfavor")
    }else {
        fetchData();
    }
})