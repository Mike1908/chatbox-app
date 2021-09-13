import React, { Component, createRef } from 'react'

import './App.css'
import './animationas.css' // css speciale pour l annimation 

import Formulaire from './componenets/Formulaire'
import Message from './componenets/Message'

// Firebase
import base from './base'
//Animations
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class App extends Component {

  state={
    messages:{},
    pseudo: this.props.match.params.pseudo
  }

  //manipule le DOM en react 
  messagesRef = createRef()

  /**
   * syncronise la base avec l app 
   * context: this la state actule 
   * dans le state les messages
   */
  componentDidMount (){
    base.syncState('/chatbox-app/',{
      context: this,
      state: 'messages'
    })
  }

  //se lance a chaque mise ajour du state
  componentDidUpdate (){
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  //ajoute un message a chaque appel
  //sera passe en paramaitre pour arrive dans Formulaire
  addMessage = message =>{
    const messages = {...this.state.messages}
    const clekU = 'message'+Date.now()
    messages[clekU] = message
    
    //suprimet le 1er message quand en a 10 msg
    /**
     * recuper les messages par cas cles 
     * verifie que il en a moin de 10
     * ceux depasent 10 sont nullifier et 
     */
    Object
      .keys(messages)
      .slice(0,-10)
      .forEach(key=>{
        messages[key] = null
      })

    this.setState({messages})
  }

  //verifie de le pseudo active et l auteur du message
  isUser = pseudo => pseudo === this.state.pseudo

  render () {
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={key}>
        <Message
        isUser = {this.isUser}
        message = {this.state.messages[key].message}
        pseudo={this.state.messages[key].pseudo}>

        </Message>
      </CSSTransition>
      
    ))
    return (
      <div className='box'>
        <div>
          <div className='messages' ref = {this.messagesRef}>
            <TransitionGroup className='message'>
              {messages}
            </TransitionGroup>
          </div>
        </div>
        
        <Formulaire
        length={140}
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
