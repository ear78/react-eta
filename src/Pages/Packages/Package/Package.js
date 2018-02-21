import React from 'react';

class Package extends React.Component{

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return (
            <section>
                This is from the package page
            </section>
        )
    }
};

export default Package;
