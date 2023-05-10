import { useState } from 'react';
import classes from './Weather.module.scss';
const api = {
    key: '3e3c083f4932805be5b4bf653a46eedf',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const Weather = () => {

    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState({});

    const search = (event) => {
        if (event.key === 'Enter') {
            fetch(`${api.base}weather?q=${country}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    debugger;
                    setWeather(result);
                    setCountry('');
                });
        }
    }

    const dateBuilder = (dateZ) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let days = ["Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday", "Sunday"];



        let day = days[dateZ.getDay()];
        let date = dateZ.getDate();
        let month = months[dateZ.getMonth()];
        let year = dateZ.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    return (
        <div className={classes.weatherSection}>
            <main className={classes.MainSectionSet}>
                <div className={classes.searchArea}>
                    <input
                        type="text"
                        className={classes.searchBar}
                        placeholder="Search..."
                        onChange={e => setCountry(e.target.value)}
                        value={country}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className={classes.locationBox}>
                            <div className={classes.location}>{weather.name}, {weather.sys.country}</div>
                            <div className={classes.date}>{dateBuilder(new Date())}</div>
                        </div>
                        <div className={classes.weatherBox}>
                            <div className={classes.temperature}>
                                {Math.round(weather.main.temp)}°C
                            </div>
                            <div className={classes.weather}>{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </div>

    );
};
export default Weather;