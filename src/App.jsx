import './App.css';
import {getWeather} from "./api";


const App = () => {

    getWeather()
        .then((response) => console.log(response.data))

    return (
        <div>
            Hello
        </div>
    );
}

export default App;
