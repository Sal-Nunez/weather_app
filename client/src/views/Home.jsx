import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Current from '../components/Current'
import { Switch, Route, useHistory, Link, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import FiveDayHistory from '../components/FiveDayHistory'
import SevenDayForecast from '../components/SevenDayForecast'
import HourlyForecast from '../components/HourlyForecast'
import WeatherNews from '../components/WeatherNews'
import LandscapeFlower from '../assets/videos/landscape_flower_ad.gif'
import PizzaAd from '../assets/videos/pizza_ad.gif'
import HairAd from '../assets/videos/hair_ad.gif'

const Home = (props) => {

    const [city, setCity] = useState("")
    const { api_key } = props
    // const [weatherInfo, setWeatherInfo] = useState(null)

    const [weatherInfo, setWeatherInfo] = useState({"lat":34.0522,"lon":-118.2437,"timezone":"America/Los_Angeles","timezone_offset":-28800,"current":{"dt":1637095726,"sunrise":1637072821,"sunset":1637110134,"temp":293.49,"feels_like":293.12,"pressure":1016,"humidity":59,"dew_point":285.22,"uvi":3.23,"clouds":1,"visibility":6437,"wind_speed":0,"wind_deg":0,"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}]},"minutely":[{"dt":1637095740,"precipitation":0},{"dt":1637095800,"precipitation":0},{"dt":1637095860,"precipitation":0},{"dt":1637095920,"precipitation":0},{"dt":1637095980,"precipitation":0},{"dt":1637096040,"precipitation":0},{"dt":1637096100,"precipitation":0},{"dt":1637096160,"precipitation":0},{"dt":1637096220,"precipitation":0},{"dt":1637096280,"precipitation":0},{"dt":1637096340,"precipitation":0},{"dt":1637096400,"precipitation":0},{"dt":1637096460,"precipitation":0},{"dt":1637096520,"precipitation":0},{"dt":1637096580,"precipitation":0},{"dt":1637096640,"precipitation":0},{"dt":1637096700,"precipitation":0},{"dt":1637096760,"precipitation":0},{"dt":1637096820,"precipitation":0},{"dt":1637096880,"precipitation":0},{"dt":1637096940,"precipitation":0},{"dt":1637097000,"precipitation":0},{"dt":1637097060,"precipitation":0},{"dt":1637097120,"precipitation":0},{"dt":1637097180,"precipitation":0},{"dt":1637097240,"precipitation":0},{"dt":1637097300,"precipitation":0},{"dt":1637097360,"precipitation":0},{"dt":1637097420,"precipitation":0},{"dt":1637097480,"precipitation":0},{"dt":1637097540,"precipitation":0},{"dt":1637097600,"precipitation":0},{"dt":1637097660,"precipitation":0},{"dt":1637097720,"precipitation":0},{"dt":1637097780,"precipitation":0},{"dt":1637097840,"precipitation":0},{"dt":1637097900,"precipitation":0},{"dt":1637097960,"precipitation":0},{"dt":1637098020,"precipitation":0},{"dt":1637098080,"precipitation":0},{"dt":1637098140,"precipitation":0},{"dt":1637098200,"precipitation":0},{"dt":1637098260,"precipitation":0},{"dt":1637098320,"precipitation":0},{"dt":1637098380,"precipitation":0},{"dt":1637098440,"precipitation":0},{"dt":1637098500,"precipitation":0},{"dt":1637098560,"precipitation":0},{"dt":1637098620,"precipitation":0},{"dt":1637098680,"precipitation":0},{"dt":1637098740,"precipitation":0},{"dt":1637098800,"precipitation":0},{"dt":1637098860,"precipitation":0},{"dt":1637098920,"precipitation":0},{"dt":1637098980,"precipitation":0},{"dt":1637099040,"precipitation":0},{"dt":1637099100,"precipitation":0},{"dt":1637099160,"precipitation":0},{"dt":1637099220,"precipitation":0},{"dt":1637099280,"precipitation":0},{"dt":1637099340,"precipitation":0}],"hourly":[{"dt":1637092800,"temp":293.7,"feels_like":293.27,"pressure":1016,"humidity":56,"dew_point":284.63,"uvi":3.69,"clouds":21,"visibility":10000,"wind_speed":2.42,"wind_deg":169,"wind_gust":2.09,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1637096400,"temp":293.49,"feels_like":293.12,"pressure":1016,"humidity":59,"dew_point":285.22,"uvi":3.23,"clouds":1,"visibility":10000,"wind_speed":2.71,"wind_deg":164,"wind_gust":2.34,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1637100000,"temp":293.94,"feels_like":293.51,"pressure":1015,"humidity":55,"dew_point":284.58,"uvi":2.21,"clouds":11,"visibility":10000,"wind_speed":2.6,"wind_deg":168,"wind_gust":1.93,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1637103600,"temp":294.33,"feels_like":293.84,"pressure":1015,"humidity":51,"dew_point":283.8,"uvi":1.07,"clouds":17,"visibility":10000,"wind_speed":2.67,"wind_deg":173,"wind_gust":1.96,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1637107200,"temp":294.21,"feels_like":293.68,"pressure":1014,"humidity":50,"dew_point":283.4,"uvi":0.31,"clouds":21,"visibility":10000,"wind_speed":2.66,"wind_deg":168,"wind_gust":1.93,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1637110800,"temp":293.16,"feels_like":292.65,"pressure":1014,"humidity":55,"dew_point":283.85,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":2.95,"wind_deg":157,"wind_gust":2.65,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1637114400,"temp":292.07,"feels_like":291.58,"pressure":1014,"humidity":60,"dew_point":283.73,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":2.66,"wind_deg":149,"wind_gust":2.73,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1637118000,"temp":291.46,"feels_like":291.02,"pressure":1014,"humidity":64,"dew_point":284.06,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":2.57,"wind_deg":137,"wind_gust":2.88,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1637121600,"temp":291.01,"feels_like":290.6,"pressure":1015,"humidity":67,"dew_point":284.3,"uvi":0,"clouds":3,"visibility":10000,"wind_speed":2.41,"wind_deg":144,"wind_gust":2.79,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1637125200,"temp":290.71,"feels_like":290.32,"pressure":1015,"humidity":69,"dew_point":284.55,"uvi":0,"clouds":21,"visibility":10000,"wind_speed":2.56,"wind_deg":127,"wind_gust":3.28,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1637128800,"temp":290.36,"feels_like":290.02,"pressure":1015,"humidity":72,"dew_point":284.82,"uvi":0,"clouds":33,"visibility":10000,"wind_speed":2.37,"wind_deg":139,"wind_gust":2.98,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1637132400,"temp":290.09,"feels_like":289.8,"pressure":1015,"humidity":75,"dew_point":285.06,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":1.97,"wind_deg":143,"wind_gust":2.48,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637136000,"temp":290.05,"feels_like":289.78,"pressure":1015,"humidity":76,"dew_point":285.15,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":1.71,"wind_deg":141,"wind_gust":2.24,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637139600,"temp":290.07,"feels_like":289.78,"pressure":1015,"humidity":75,"dew_point":285.1,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":1.39,"wind_deg":127,"wind_gust":1.98,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637143200,"temp":289.99,"feels_like":289.69,"pressure":1015,"humidity":75,"dew_point":285.03,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":1.39,"wind_deg":144,"wind_gust":1.99,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637146800,"temp":289.85,"feels_like":289.59,"pressure":1015,"humidity":77,"dew_point":285.16,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":1.41,"wind_deg":173,"wind_gust":1.77,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637150400,"temp":289.83,"feels_like":289.56,"pressure":1015,"humidity":77,"dew_point":285.26,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":0.59,"wind_deg":229,"wind_gust":0.87,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637154000,"temp":289.84,"feels_like":289.58,"pressure":1015,"humidity":77,"dew_point":285.15,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":1.04,"wind_deg":153,"wind_gust":1.56,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637157600,"temp":289.85,"feels_like":289.59,"pressure":1015,"humidity":77,"dew_point":285.2,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":1.37,"wind_deg":180,"wind_gust":1.66,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637161200,"temp":289.71,"feels_like":289.48,"pressure":1016,"humidity":79,"dew_point":285.44,"uvi":0,"clouds":97,"visibility":10000,"wind_speed":1.02,"wind_deg":170,"wind_gust":1.35,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1637164800,"temp":290.46,"feels_like":290.18,"pressure":1016,"humidity":74,"dew_point":285.25,"uvi":0.38,"clouds":96,"visibility":10000,"wind_speed":1.17,"wind_deg":168,"wind_gust":1.14,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1637168400,"temp":291.57,"feels_like":291.22,"pressure":1017,"humidity":67,"dew_point":284.85,"uvi":1.12,"clouds":80,"visibility":10000,"wind_speed":1.69,"wind_deg":166,"wind_gust":1.43,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1637172000,"temp":292.65,"feels_like":292.25,"pressure":1017,"humidity":61,"dew_point":284.45,"uvi":2.1,"clouds":68,"visibility":10000,"wind_speed":1.73,"wind_deg":188,"wind_gust":1.14,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1637175600,"temp":293.68,"feels_like":293.25,"pressure":1016,"humidity":56,"dew_point":284.07,"uvi":3.13,"clouds":8,"visibility":10000,"wind_speed":2.2,"wind_deg":190,"wind_gust":1.38,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1637179200,"temp":294.5,"feels_like":294.05,"pressure":1016,"humidity":52,"dew_point":283.77,"uvi":3.42,"clouds":7,"visibility":10000,"wind_speed":2.49,"wind_deg":200,"wind_gust":1.49,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1637182800,"temp":295.14,"feels_like":294.67,"pressure":1015,"humidity":49,"dew_point":283.56,"uvi":3,"clouds":7,"visibility":10000,"wind_speed":2.68,"wind_deg":204,"wind_gust":1.62,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1637186400,"temp":295.38,"feels_like":294.91,"pressure":1014,"humidity":48,"dew_point":283.51,"uvi":2.05,"clouds":10,"visibility":10000,"wind_speed":2.73,"wind_deg":202,"wind_gust":1.42,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1637190000,"temp":295.17,"feels_like":294.73,"pressure":1014,"humidity":50,"dew_point":283.74,"uvi":0.99,"clouds":15,"visibility":10000,"wind_speed":2.88,"wind_deg":200,"wind_gust":1.48,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1637193600,"temp":294.32,"feels_like":293.9,"pressure":1015,"humidity":54,"dew_point":284.14,"uvi":0.28,"clouds":24,"visibility":10000,"wind_speed":2.84,"wind_deg":208,"wind_gust":1.57,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1637197200,"temp":292.98,"feels_like":292.59,"pressure":1015,"humidity":60,"dew_point":284.63,"uvi":0,"clouds":49,"visibility":10000,"wind_speed":2.66,"wind_deg":215,"wind_gust":2.13,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1637200800,"temp":292.13,"feels_like":291.78,"pressure":1016,"humidity":65,"dew_point":284.97,"uvi":0,"clouds":33,"visibility":10000,"wind_speed":1.97,"wind_deg":220,"wind_gust":1.86,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1637204400,"temp":291.68,"feels_like":291.34,"pressure":1016,"humidity":67,"dew_point":284.99,"uvi":0,"clouds":26,"visibility":10000,"wind_speed":1.59,"wind_deg":216,"wind_gust":1.68,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1637208000,"temp":291.39,"feels_like":291.05,"pressure":1017,"humidity":68,"dew_point":284.85,"uvi":0,"clouds":25,"visibility":10000,"wind_speed":1.35,"wind_deg":202,"wind_gust":1.42,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1637211600,"temp":291.13,"feels_like":290.76,"pressure":1017,"humidity":68,"dew_point":284.65,"uvi":0,"clouds":32,"visibility":10000,"wind_speed":1.34,"wind_deg":196,"wind_gust":1.42,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1637215200,"temp":290.89,"feels_like":290.52,"pressure":1017,"humidity":69,"dew_point":284.53,"uvi":0,"clouds":43,"visibility":10000,"wind_speed":1.23,"wind_deg":202,"wind_gust":1.22,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1637218800,"temp":290.69,"feels_like":290.3,"pressure":1017,"humidity":69,"dew_point":284.41,"uvi":0,"clouds":90,"visibility":10000,"wind_speed":0.72,"wind_deg":205,"wind_gust":0.81,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637222400,"temp":290.59,"feels_like":290.19,"pressure":1017,"humidity":69,"dew_point":284.23,"uvi":0,"clouds":95,"visibility":10000,"wind_speed":0.93,"wind_deg":207,"wind_gust":1.02,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637226000,"temp":290.4,"feels_like":289.98,"pressure":1017,"humidity":69,"dew_point":284.18,"uvi":0,"clouds":96,"visibility":10000,"wind_speed":0.91,"wind_deg":217,"wind_gust":1.07,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637229600,"temp":290.24,"feels_like":289.83,"pressure":1017,"humidity":70,"dew_point":284.06,"uvi":0,"clouds":95,"visibility":10000,"wind_speed":0.49,"wind_deg":209,"wind_gust":0.72,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637233200,"temp":290.11,"feels_like":289.66,"pressure":1017,"humidity":69,"dew_point":283.88,"uvi":0,"clouds":96,"visibility":10000,"wind_speed":0.49,"wind_deg":223,"wind_gust":0.91,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637236800,"temp":289.94,"feels_like":289.5,"pressure":1017,"humidity":70,"dew_point":283.74,"uvi":0,"clouds":88,"visibility":10000,"wind_speed":0.58,"wind_deg":214,"wind_gust":1,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1637240400,"temp":289.81,"feels_like":289.36,"pressure":1017,"humidity":70,"dew_point":283.61,"uvi":0,"clouds":33,"visibility":10000,"wind_speed":0.68,"wind_deg":203,"wind_gust":1.07,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1637244000,"temp":289.64,"feels_like":289.2,"pressure":1017,"humidity":71,"dew_point":283.59,"uvi":0,"clouds":62,"visibility":10000,"wind_speed":0.56,"wind_deg":180,"wind_gust":0.81,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"pop":0},{"dt":1637247600,"temp":289.8,"feels_like":289.35,"pressure":1018,"humidity":70,"dew_point":283.59,"uvi":0,"clouds":75,"visibility":10000,"wind_speed":0.62,"wind_deg":193,"wind_gust":0.95,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1637251200,"temp":290.58,"feels_like":290.13,"pressure":1019,"humidity":67,"dew_point":283.63,"uvi":0.38,"clouds":81,"visibility":10000,"wind_speed":0.5,"wind_deg":189,"wind_gust":0.53,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1637254800,"temp":291.57,"feels_like":291.11,"pressure":1019,"humidity":63,"dew_point":283.53,"uvi":1.12,"clouds":85,"visibility":10000,"wind_speed":1.12,"wind_deg":193,"wind_gust":0.73,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1637258400,"temp":292.56,"feels_like":292.1,"pressure":1019,"humidity":59,"dew_point":283.64,"uvi":2.12,"clouds":87,"visibility":10000,"wind_speed":1.82,"wind_deg":191,"wind_gust":1.39,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1637262000,"temp":293.58,"feels_like":293.11,"pressure":1018,"humidity":55,"dew_point":283.59,"uvi":3.25,"clouds":74,"visibility":10000,"wind_speed":1.79,"wind_deg":202,"wind_gust":1.27,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0}],"daily":[{"dt":1637089200,"sunrise":1637072821,"sunset":1637110134,"moonrise":1637105820,"moonset":1637063640,"moon_phase":0.42,"temp":{"day":293.55,"min":290.09,"max":294.33,"night":290.09,"eve":293.16,"morn":290.75},"feels_like":{"day":293.08,"night":289.8,"eve":292.65,"morn":290.11},"pressure":1016,"humidity":55,"dew_point":284.22,"wind_speed":2.95,"wind_deg":157,"wind_gust":3.28,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":41,"pop":0,"uvi":3.69},{"dt":1637175600,"sunrise":1637159279,"sunset":1637196501,"moonrise":1637193840,"moonset":1637153460,"moon_phase":0.45,"temp":{"day":293.68,"min":289.71,"max":295.38,"night":290.69,"eve":292.98,"morn":289.84},"feels_like":{"day":293.25,"night":290.3,"eve":292.59,"morn":289.58},"pressure":1016,"humidity":56,"dew_point":284.07,"wind_speed":2.88,"wind_deg":200,"wind_gust":2.24,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":8,"pop":0,"uvi":3.42},{"dt":1637262000,"sunrise":1637245736,"sunset":1637282871,"moonrise":1637282040,"moonset":1637243280,"moon_phase":0.48,"temp":{"day":293.58,"min":289.64,"max":295.09,"night":290.29,"eve":292.27,"morn":289.81},"feels_like":{"day":293.11,"night":289.86,"eve":291.86,"morn":289.36},"pressure":1018,"humidity":55,"dew_point":283.59,"wind_speed":2.74,"wind_deg":226,"wind_gust":2.29,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":74,"pop":0,"uvi":3.55},{"dt":1637348400,"sunrise":1637332193,"sunset":1637369241,"moonrise":1637370480,"moonset":1637333160,"moon_phase":0.5,"temp":{"day":292.02,"min":289.4,"max":294.13,"night":290.33,"eve":292.86,"morn":289.46},"feels_like":{"day":291.53,"night":289.85,"eve":292.32,"morn":289},"pressure":1019,"humidity":60,"dew_point":283.37,"wind_speed":2.55,"wind_deg":237,"wind_gust":1.78,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":100,"pop":0,"uvi":3.12},{"dt":1637434800,"sunrise":1637418650,"sunset":1637455614,"moonrise":1637459160,"moonset":1637423040,"moon_phase":0.54,"temp":{"day":291.71,"min":289.37,"max":293.19,"night":289.56,"eve":292.52,"morn":289.67},"feels_like":{"day":291.16,"night":288.98,"eve":291.87,"morn":289.1},"pressure":1017,"humidity":59,"dew_point":282.97,"wind_speed":2.33,"wind_deg":202,"wind_gust":1.75,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":100,"pop":0,"uvi":2.55},{"dt":1637521200,"sunrise":1637505107,"sunset":1637541989,"moonrise":1637548140,"moonset":1637512740,"moon_phase":0.57,"temp":{"day":292.42,"min":288.77,"max":294.82,"night":290.55,"eve":292.89,"morn":288.78},"feels_like":{"day":291.68,"night":289.78,"eve":292.17,"morn":288.1},"pressure":1017,"humidity":49,"dew_point":280.87,"wind_speed":2.49,"wind_deg":239,"wind_gust":2.57,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":4,"pop":0.2,"rain":0.17,"uvi":3},{"dt":1637607600,"sunrise":1637591563,"sunset":1637628365,"moonrise":1637637540,"moonset":1637602440,"moon_phase":0.6,"temp":{"day":295.09,"min":290.13,"max":297.14,"night":290.76,"eve":294.01,"morn":290.13},"feels_like":{"day":293.99,"night":290.06,"eve":293.12,"morn":289.06},"pressure":1018,"humidity":25,"dew_point":273.92,"wind_speed":2.4,"wind_deg":226,"wind_gust":3.5,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":0,"pop":0.22,"rain":0.11,"uvi":3},{"dt":1637694000,"sunrise":1637678020,"sunset":1637714743,"moonrise":1637727120,"moonset":1637691720,"moon_phase":0.63,"temp":{"day":291.02,"min":288.27,"max":292.99,"night":289.04,"eve":291.19,"morn":288.34},"feels_like":{"day":290.51,"night":288.62,"eve":290.64,"morn":287.95},"pressure":1017,"humidity":63,"dew_point":283.33,"wind_speed":3.79,"wind_deg":240,"wind_gust":3.8,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":59,"pop":0.93,"rain":2.93,"uvi":3}],"city":"Los Angeles","state":"CA"})
    const [unit, setUnit] = useState("F")
    const history = useHistory()
    const location = useLocation()

    const unitFormat = num => {
        return unit === "K" ? `${Math.round(num)}° K` : unit === "C" ? `${Math.round(num - 273.15)}° C` : `${Math.round((num - 273.15) * (9 / 5) + 32)}° F`
    }

    const dateFormat = (unix, length='l') => {
        const base = new Date(unix * 1000);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const year = base.getFullYear()
        const month = months[base.getMonth()]
        const date = base.getDate()
        const hour = base.getHours()
        const long_date = `${month} ${date}, ${year}`
        const short_date = `${month} ${date}`
        if (length === 'l') return long_date
        if (length === 's') return short_date
    }

    const timeFormat = (unix) => {
        let base = new Date(unix * 1000);
        let hour = base.getHours()
        let min = base.getMinutes()
        let a = "am"
        if (hour > 12){
            hour -= 12
            a = "pm"
        } else if (hour === 12) {
            a = "pm"
        }
        if(min < 10){
            min = '0' + min
        }
        if (hour === 0) hour = 12
        const time = `${hour}:${min} ${a}`
        return time
    }

    const buttonTransformClass = path => {
        return `col-auto btn btn-block me-3 mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-gray-200 hover:border-blue-500 font-bold ${location.pathname === `/${path}` ? 'border-blue-500 bg-transparent text-gray-200' : 'bg-blue-500'}`
    }

    const cityHandler = (e) => {
        setCity(e.target.value)
    }

    const searchHandler = (e) => {
        e.preventDefault()
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyDAmANHssnJ_6cRIuRyTbAITMkOUz9_EZo`)
        //     .then(res => {
        //         const lon = res.data.results[0].geometry.location.lng
        //         const lat = res.data.results[0].geometry.location.lat
        //         const state = res.data.results[0].address_components[2].short_name
        //         const city = res.data.results[0].address_components[0].long_name
        //         console.log(lon, lat)
        //         axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`)
        //             .then(res => {
        //                 console.log(res.data)
        //                 setWeatherInfo({ ...res.data, city, state })
        //                 history.push('/current')
        //             })
        //             .catch(err => console.log(err))
        //     })
        //     .catch(err => console.error(err))
    }


    return (
        <>
            <Navbar setUnit={setUnit} setCity={cityHandler} search={searchHandler} />
            <div className="" style={{ marginLeft: '60px', minWidth: '1004px' }}>
                {
                    weatherInfo ?
                        <div className="">
                            <Link to="/current" onClick={e => e.target.blur()} className={buttonTransformClass('current')}>Current Weather</Link>
                            <Link to="/history" onClick={e => e.target.blur()} className={buttonTransformClass('history')}>5 Day History</Link>
                            <Link to="/forecast" onClick={e => e.target.blur()} className={buttonTransformClass('forecast')}>7 Day Forecast</Link>
                            <Link to="/hourly" onClick={e => e.target.blur()} className={buttonTransformClass('hourly')}>Hourly Forecast</Link>
                        </div>
                        : null
                }
                <Switch>
                    <Route exact path='/current'>
                        <Current buttonTransformClass={buttonTransformClass} unitFormat={unitFormat} timeFormat={timeFormat} weatherInfo={weatherInfo} dateFormat={dateFormat} />
                    </Route>
                    <Route exact path='/history'>
                        <FiveDayHistory unitFormat={unitFormat} timeFormat={timeFormat} weatherInfo={weatherInfo} dateFormat={dateFormat} />
                    </Route>
                    <Route exact path='/forecast'>
                        <SevenDayForecast unitFormat={unitFormat} timeFormat={timeFormat} weatherInfo={weatherInfo} dateFormat={dateFormat} />
                    </Route>
                    <Route exact path='/hourly'>
                        <HourlyForecast unitFormat={unitFormat} timeFormat={timeFormat} weatherInfo={weatherInfo} dateFormat={dateFormat} />
                    </Route>
                </Switch>

            </div>
            <div style={{minWidth: '1004px'}} className="row ms-5 my-5">
                <div className="col-auto mb-3">
                    <img style={{ width: '652px' }} src={LandscapeFlower} alt="" />
                    <WeatherNews />
                </div>
                <div className="col-auto">
                    <div className="d-flex flex-column">
                        <img className="mb-5" style={{ width: '300px' }} src={PizzaAd} alt="" />
                        <div className="border my-5"></div>
                        <img className="mt-5" style={{ width: '300px' }} src={HairAd} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home