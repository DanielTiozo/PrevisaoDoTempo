
const key = "dd877b2a20c73e78fedf1a4e71cf6ff7"

function motrarClima(dados){
	console.log(dados)
	
	document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
	document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)+"°C"
	document.querySelector(".temp-min").innerHTML = `Minima: ${Math.floor(dados.main.temp_min)}°C`
	document.querySelector(".temp-max").innerHTML = `Máxima: ${Math.floor(dados.main.temp_max)}°C`
	document.querySelector(".img-clima").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
	document.querySelector(".texto-clima").innerHTML = dados.weather[0].description
	document.querySelector(".umidade").innerHTML = `Umidade do ar: ${dados.main.humidity}%`
	document.querySelector(".vel").innerHTML = `Velocidade do vento: ${dados.wind.speed}km/h`
	document.querySelector(".lat").innerHTML = `Latitude: ${dados.coord.lat}`
	document.querySelector(".lon").innerHTML = `Longitude: ${dados.coord.lon}`	
}

async function buscarClima(cidade){
	const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
		
	motrarClima(dados)
//	Umidade do ar:
}

function clicouBuscar(){
	const cidade = document.querySelector(".input-cidade").value
	
	buscarClima(cidade)
}

function teclouEnter() {
	let x = event.keyCode
	const cidade = document.querySelector(".input-cidade").value
	
	if(x == 13){
		buscarClima(cidade)
	}
}