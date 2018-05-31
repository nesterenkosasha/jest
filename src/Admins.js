import React, { Component } from 'react';
import { connect } from 'react-redux'
import { auth } from './actions';
import './App.css';
import isValid from './utils'
import PropTypes from 'prop-types';


export class Admins extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    
    handelSubmit (e) {
        e.preventDefault()
        console.log(this.state)
        this.props.auth(this.state)
        
    }
    handelChange = async ({ target }) => {
        try{
            await isValid(target.id, target.value)
            this.setState({[target.id]: target.value})
            console.log(target.id, target.value, this.state)     
        } catch({ message }){
            console.log(message)
        }
    }
    
    render(){
        return(
            <div className="logi">
            <div className="App-intro" >
            <h1>LOGIN PAGE</h1>
            <form onSubmit={this.handelSubmit.bind(this)}
            onChange={this.handelChange}>
            <label htmlFor="login">Login: </label>
            <input type="text" id="login" /><br/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" />
            <button>SUBMIT</button>
            </form>
            </div>
          </div>
  
)
}
}

const mapDispatchToProps = {
    auth
};
export default connect (null, mapDispatchToProps)(Admins)

Admins.propTypes = {    
    auth: PropTypes.func
}