const lat = 35.95
const lon = -80 
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
function goTemp() {
  window.location.href = "condition.html";
}
function go Conditions() {
window.location.href = "conditions.html";
}
fetch(url)
.then(res =>res.json())
.then(data => {
  const tempDiv = document.get ElementById("temp")
  const condDiv = document.getElementById("condition");

  if (tempDiv) {
    tempDiv.innerText = ${data.current_weather.temperture} °C`;
    }
    if (condDiv) {
    condDiv.innertext = getconodition(data.current_weathercode);
    }
    });

    function getCondition(code) {
    if ()
    if(code === 0) return "Clear sky";
    if(code <= 3) return "Partly Cloudy";
    if(code <= 48) return "Foggy";
    if (code <= 67) return "Rainy";
    if(code <= 77) return "Snowy";
    if(code <= 99) return "Stormy";
    return "Unknown"; 
    }
      
