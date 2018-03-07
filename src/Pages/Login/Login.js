import React from "react";

import PageTitle from '../../Components/PageTitle/PageTitle';
import "./Login.css";

import Button from '../../Components/Button/Button';
import SignupButton from "../../Components/SignupButton/SignupButton";

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            title: 'Login To ETA',
            subTitle: 'Track Your Adventures'
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        alert('this was submitted! Thank you!')
    }

    render() {
        return (
            <div className="Login-container">
                <PageTitle
                title={this.state.title} subTitle={this.state.subTitle}/>

                <div className="Login-background">
                    <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" placeholder="User Name" value={this.state.username}
                    onChange={this.onChange.bind(this)}
                    name="username" />
                    <input type="password" placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange.bind(this)} name="password"/>
                    <p>Have An Account? Sign Up Below!</p>
                    {/*<button type="submit">Login</button>*/}
                    <Button btnName={'Login'}/>
                    <SignupButton />
                    </form>
                </div>

            </div>
        );
    }
}

export default Login;
