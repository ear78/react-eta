import React from 'react';

const signupForm = (props) => {
        return(
            <form onSubmit={props.submit} className="Signup-form">
                <label>
                    Name: 
                    <input type="text" value={props.value} onChange={props.change} />
                </label>
                <label>
                    Email: 
                    <input type="text" value={props.value} onChange={props.change} />
                </label>
                <label htmlFor="select_1">Country</label>
                <select id="select_1" name="country_select">
                    <option selected value="usa">USA</option>
                    <option value="canada">Canada</option>
                </select>
                <button type="submit" value="Submit">Submit</button>
            </form>
        )
}

export default signupForm;