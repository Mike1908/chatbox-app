//configuration de fire base 
import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBV1iXIlSe3eE1nWu-Ulz7HVPWYgAqQkUA",
    authDomain: "chatbox-1-65fbf.firebaseapp.com",
     databaseURL: "https://chatbox-1-65fbf.firebaseio.com",
 
})

//gestion de la base de donne 
const base = Rebase.createClass(firebase.database())

//initialisation de l app
export{firebaseApp}

export default base 