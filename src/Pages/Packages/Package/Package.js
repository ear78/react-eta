import React from 'react';

import './Package.css';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import packagesData from '../../../Data/PackagesData';

class Package extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trips: packagesData,
            title: 'Reykjavik',
            subTitle: 'Iceland'
        }
    }

    render(){

        const trip = this.state.trips.filter(trip => {
            if(trip.id == this.props.match.params.id){
                return trip;
            }
        })

        const vacation = trip.map((trip, id) => {

                return (
                    <div key={trip.id}>
                        <div>
                            <img src={trip.img} />
                        </div>
                        <div>
                            <p>{trip.desc}</p>
                        <p>{trip.country} - {trip.city} - {trip.days} - {trip.price}
                        </p>
                        </div>

                    </div>
                )


        });
        return (
            <section className="Package">
                <PageTitle
                title={this.state.title} subTitle={this.state.subTitle}/>
                {vacation}
            </section>
        )
    }
};

export default Package;
