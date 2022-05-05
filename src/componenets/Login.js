import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event =>{
        const pseudo = event.target.value
        this.setState({pseudo})
    }

    //previent de la soumition du formulaire 
    handleSubmit = event =>{
        event.preventDefault() //gere seul le changement de page
        this.setState({goToChat: true})
    }
    
    render() {
        if (this.state.goToChat) {
            const texte = '/chatbox-app/pseudo/' + this.state.pseudo
            return <Redirect push to={texte }/>
        }
        return (
            <div className='loginBox'>
                <div className="Title-app" >CHATBOX</div>
                <form className='login' onSubmit={this.handleSubmit}>
                    <input 
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='pseudo'
                    type="text"
                    required 
                    />
                    <button type='submit'>Connexion</button>
                </form>
            </div>
        );
    }
}
export default Login;
