import React , {Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';


class App extends  Component {

    state ={ 
      temperture: '',
      city : '',
      country: '',
      humidity : '',
      description:'',
      error:''
    }
  
  
  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const apiWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`);
    const dataWeather = await apiWeather.json();

    if(city && country){
      this.setState({
        temperture: dataWeather.main.temp,
        city : dataWeather.name,
        country: dataWeather.sys.country,
        humidity : dataWeather.main.humidity,
        description:dataWeather.weather[0].description,
        error:''
      })
    }else{
      this.setState( { 
        temperture: '',
        city : '',
        country: '',
        humidity : '',
        description:'',
        error:'Please Enter Data'
      })
    }
  }

render() {
  return (
    <div className="wrapper">
      <div className="container">
    <Form getWeather={this.getWeather}/>
    <Weather
     
      temperture= {this.state.temperture}
      city ={this.state.city}
      country= {this.state.country}
      humidity = {this.state.humidity}
      description={this.state.description}
      error= {this.state.error}
    
    />
    </div>
    </div>
  );
}
}

export default App;
