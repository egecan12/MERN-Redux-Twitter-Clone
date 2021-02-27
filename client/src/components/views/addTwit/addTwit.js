import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addUser } from '../actions/userAction';
import { addTwit } from '../../../_actions/user_actions';


class AddTwit extends Component {
    state = {
        name: '',
        city: '',
        occupation: ''
    }
    

    handleTextChange = event => {
        const {target: {name, value}} = event;
        this.setState({ [name]: value });
        console.log(this.state);
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addTwit(this.state);
        console.log("handle submit worked perfectly!");
        this.setState({
            name: this.state.name,
            city: this.state.city,
            occupation: this.state.occupation
        });
    }

    render(){
        console.log(this.state);
        return(
            <div className="form-container">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.handleTextChange} value={this.state.name} type="text" name="name" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input onChange={this.handleTextChange} value={this.state.city} type="text" name="city" className="form-control" placeholder="City" />
                    </div>
                    <div className="form-group">
                        <label>Occupation</label>
                        <input onChange={this.handleTextChange} value={this.state.occupation} type="text" name="occupation" className="form-control" placeholder="Occupation" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Add User</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addTwit })(AddTwit);