import React, { Component } from 'react';
import {Redirect} from 'react-router-dom' //envoi des info entre les pages par le lien

class Connexion extends Component {
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
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
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

export default Connexion;
/**
 * le principe est de se servire du lient au dessus pour passe de information au reste des page (compenente)
 *  import {Redirect} from 'react-router-dom'  aide a le faire  <Redirect to={texte }/> la fontion utilise
 *  import {BrowserRouter, Route, Switch} from 'react-router-dom'  permet de capture le super lient 
 *  <Route exact path='/' component = {Connexion}></Route>  permet d affichier le du 
 */