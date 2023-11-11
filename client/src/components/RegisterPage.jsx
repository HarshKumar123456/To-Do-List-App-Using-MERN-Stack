import React, { useState } from "react";
import "../componentCSS/signInButton.css";

function RegisterPage(props) {
    
    async function handleClick(event){
      event.preventDefault();
      props.onRegister();
    }

    return <form>
      
      <button type="button" class="login-with-google-btn" onClick={handleClick}>
    Continue with Google
  </button>
    </form>;
}

export default RegisterPage;