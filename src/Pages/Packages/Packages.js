import React from 'react';

import packagesData from '../../Data/PackagesData';
import './Packages.css';
import truck from '../../Images/tim-trad-truck.jpg';
import PageTitle from '../../Components/PageTitle/PageTitle';

class Packages extends React.Component {
    constructor(){
        super();
        this.state = {
            trips: packagesData,
            title: 'Packages',
            subTitle: 'Choose Your Adventure'
        }
    }
    render(){
        const packagesList = this.state.trips.map((trip,index) => {
            return (
                <article key={index}>
                    <p className="Image-container" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${trip.img})`}}>
                        <h4>{trip.country}, {trip.city}</h4>
                    </p>

                    <p>Days - {trip.days}</p>
                    <p>Price - {trip.price.toLocaleString()}</p>
                </article>
            )

        })
        return (
            <div className="Packages">
                <PageTitle
                title={this.state.title} subTitle={this.state.subTitle}/>
                <section className="Packages-list">{packagesList}</section>
            </div>
        )
    }
}

export default Packages;
