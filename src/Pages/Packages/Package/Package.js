import React from 'react';
import { Link } from 'react-router-dom';

import './Package.css';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import packagesData from '../../../Data/PackagesData';
import Button from '../../../Components/Button/Button';

class Package extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trips: packagesData,
            title: 'Reykjavik',
            subTitle: 'Iceland',
            marginTop: '',
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
                    <div className="Vacation" key={trip.id}>
                        <div>
                            <img src={trip.img} />
                        </div>
                        <div className="right">
                            <p className="desc">{trip.desc}</p>
                            <p>
                                <i className="fa fa-sun-o"></i>&nbsp;Days - {trip.days}
                            </p>
                            <p>
                                &nbsp;<i className="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;Price - {trip.price}
                            </p>
                            <Link to="/">
                                <Button btnName={'Book Trip'} />
                            </Link>
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
