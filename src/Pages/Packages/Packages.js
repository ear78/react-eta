import React from 'react';

import packagesData from '../../Data/PackagesData';
import './Packages.css';

class Packages extends React.Component {
    constructor(){
        super();
        this.state = {
            trips: packagesData
        }
    }
    render(){
        console.log(packagesData);
        const packagesList = this.state.trips.map((trip,index) => {
            return (
                <div key={index}>
                    <p><img src={trip.img} /></p>
                    <p>Destination - {trip.country}, {trip.city}</p>
                    <p>Days - {trip.days}</p>
                    <p>Price - {trip.price.toLocaleString()}</p>
                </div>
            )

        })
        return (
            <section className="Packages">{packagesList}</section>

        )
    }
}

export default Packages;
