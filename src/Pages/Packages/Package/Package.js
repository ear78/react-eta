import React from 'react';

import packagesData from '../../../Data/PackagesData';

class Package extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trips: packagesData
        }
    }

    componentDidMount(){
        console.log(this.props)



    }
    render(){

        const trip = this.state.trips.filter(trip => {
            if(trip.id == this.props.match.params.id){
                return trip;
            }
        })
        console.log(trip, this.state.trips);
        const vacation = trip.map((trip, id) => {

                return (
                    <div key={trip.id}>
                        <img src={trip.img} />
                        <p>{trip.desc}</p>
                        <p>{trip.country} - {trip.city} - {trip.days} - {trip.price}
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
