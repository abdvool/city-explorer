
const axios = require('axios');







const getWeather = async(req,res) => {

    let city = req.query.city
    
    
        let url=await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&city=${city}`)
    
        let weatherInfo = url.data.data.map(obj =>  new WeatherClass(obj.datetime,obj.weather.description) )
    
        res.send(weatherInfo)
        console.log(weatherInfo);
    
    }


    class WeatherClass{

        constructor(date,des){
    
      this.date=date
      this.des=des
    
        }
    
    
    }
    

    module.exports=getWeather
