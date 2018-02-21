import React from 'react';

import packagesData from '../../../Data/PackagesData';

class Package extends React.Component{
    constructor(){
        super();
        this.state = {
            trips: packagesData
        }
    }

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const vacation = this.state.trips.map((trip, id) => {

            return (
                <div key={trip.id}>
                    <p>{trip.country} - {trip.id} - {trip.city} - {trip.days} - {trip.price} - {trip.img}
                    </p>
                </div>
            )
        });

        return (
            <section>
                {vacation}
            </section>
        )
    }
};

export default Package;
