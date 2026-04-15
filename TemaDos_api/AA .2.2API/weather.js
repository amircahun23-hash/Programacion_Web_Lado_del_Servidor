import axios from "axios";

const apiKey = "0f6d242762ffbcf5c49c1175f6ab618f";

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`)
.then(response => {
    console.log("🌤 Clima:", response.data);
})
.catch(error => {
    console.error("Error:", error.response?.data || error.message);
});
