import React, { useState } from "react";


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); //Previne o comportamento Default do browser.
    fetch('http://localhost:3000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    .then((response) => response.json())
    .then ((data) => {
      console.log("Success!", data)
    })

  }

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input 
          id="email"
          type="email"
          inputMode="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="username"
        />
        
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  )
}