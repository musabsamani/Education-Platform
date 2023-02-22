const axios = require("axios")
url = "http://localhost:5000/api/events"
date = new Date()
console.log(date)
hh = axios.post(date, url).then((res) => { console.log(res) })
console.log(hh)
