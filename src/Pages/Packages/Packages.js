import React from 'react';
import { Link } from 'react-router-dom';

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
            subTitle: 'Choose Your Adventure',
            titleStyles: {
                color: '#fff',
                marginTop: '20px'
            }
        }
    }
    render(){
        const packagesList = this.state.trips.map((trip,index) => {
            return (
                <Link to={'/package/' + trip.id} key={index}>
                <article >
                    <div className="Image-container" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${trip.img})`}}>
                        <h4>{trip.country}, {trip.city}</h4>
                    </div>
                    <div className="Desc">
                        <p><i className="fa fa-sun-o"></i>&nbsp;Days - {trip.days}</p>
                        <p>&nbsp;<i className="fa fa-usd" aria-hidden="true"></i>
&nbsp;&nbsp;Price - ${trip.price.toLocaleString()}</p>
                    </div>
                </article>
                </Link>
            )

        })
        return (
            <div className="Packages">
                <PageTitle
                title={this.state.title}
                subTitle={this.state.subTitle}
                color={this.state.titleStyles.color}
                marginTop={this.state.titleStyles.marginTop}
                />
                <section className="Packages-list">{packagesList}</section>
            </div>
        )
    }
}

export default Packages;
