import React from 'react'

const Message = ({pseudo, message, isUser}) => {
    //uttilise la difference de User pour affiche les message du bon cote
    if(isUser(pseudo)){
      return (
        <p className='user-message'>
          {message}
        </p>
      )
    }else{
      return (
        <p className='not-user-message'>
          <strong>{pseudo}: <br/></strong>{message}
        </p>
      )
    }
   
}

export default Message
