import React from 'react'
import { connect } from 'react-redux'

const NewWeather = ({ status, cityName, weather, lowestTemp, highestTemp }) => {
    // (props) => {} 同上

    // if (status === 'loading') {
    //     return <div>loading weather....</div>
    //     return
    // } else if (status === 'success') {
    //     return (
    //         <div>
    //             <p>{ cityName }: { weather } </p>
    //             <p>lowestTemp: { lowestTemp }</p>
    //             <p>highestTemp: { highestTemp }</p>
    //         </div>
    //     )
    // } else {
    //     return <div>loading weather failure...</div>
    // }
    switch (status) {
        case 'loading': {
            return <div>loading weather....</div>
        }
        case 'success': {
            return (
                <div>
                    <p>{ cityName }: { weather } </p>
                    <p>lowestTemp: { lowestTemp }</p>
                    <p>highestTemp: { highestTemp }</p>
                </div>
            )
        }
        case 'failure': {
            return <div>loading weather failure...</div>
        }
        default: {
            return <div>121212</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status,
        cityName: state.city,
        weather: state.weather,
        lowestTemp: state.temp1,
        highestTemp: state.temp2
    }
}
export default connect(mapStateToProps)(NewWeather)