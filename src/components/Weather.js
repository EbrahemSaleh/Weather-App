import React from 'react'

 const  Weather = (props) => {

        return (
            <div className='info' >
              {
               props.temperture && 
               <p className="info-key">temperture : {props.temperture}</p>
              }
                {
               props.city && <p className="info-key">City : {props.city}</p>
              }
                  {
               props.country && <p className="info-key">Country : {props.country}</p>
              }
                  {
               props.humidity && <p className="info-key">Humidity : {props.humidity}</p>
              }
                   {
               props.description && <p className="info-key">Description : {props.description}</p>
              }
                   {
               props.error && <p className="info-key">Error : {props.error}</p>
              }

            </div>
        )
    
}

export default Weather
