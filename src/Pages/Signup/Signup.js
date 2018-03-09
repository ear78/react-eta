import React from 'react';

import SignupForm from './SignupForm/SignupForm';

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({value: event.target.value})
    }
    
    handleSubmit = (event) => {
        alert('Thank you for your submission! ' + this.state.value);
        event.preventDefault();
    }
    
    render(){
        return(
            <div className="Signup">
                <SignupForm 
                submit={this.handleSubmit}
                change={this.handleChange}
                value={this.state.value}/>
            </div>
        )
    }
}

export default Signup;