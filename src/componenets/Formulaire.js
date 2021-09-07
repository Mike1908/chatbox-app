import React, { Component } from '../../node_modules/react';
import {Redirect} from 'react-router-dom';

class Formulaire extends Component {

    state = {
        message:'',
        length: this.props.length,
        connect: true
    }

    //
    createMessage = () =>{
        //recupere le props passse au formulaire 
        const {addMessage, pseudo, length} = this.props

        const message = {
            pseudo,
            message: this.state.message 
        }
        addMessage(message)

        //retourne le massage a vide 
        this.setState({message:'', length})
    }

    //change a l ecriture 
    handelChange = event =>{
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({message, length})
    }

    handelKeyUp = event =>{
        if(event.key === 'Enter'){
            this.createMessage()
        }
    }

    //appele quand on soumet le formulaire 
    handelSubmit = event =>{
        event.preventDefault()
        this.createMessage()
    }

    deconnection = () =>{
        this.setState({connect:false});
    }

    render() {
        if (!this.state.connect) {
            return <Redirect push to='/'/>;
        } else {
            return (
                <div>
                    <form className='form'
                    onSubmit= {this.handelSubmit}>
                        <textarea 
                        value = {this.state.message}
                        onKeyUp ={this.handelKeyUp}
                        required
                        maxLength = {this.props.length}
                        onChange={this.handelChange}/>
                        <div className='info'>
                            {this.state.length}
                        </div>
                        <button type='submit'>
                            Envoyer!
                        </button>
                    </form>
                    <button type='submit' onClick={this.deconnection}>
                        Deconnecter
                    </button>
                </div>
            )
        }
    }
}

export default Formulaire
