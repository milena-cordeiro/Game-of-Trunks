import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of trunks</h1>Digite o nome completo de um personagem:
        <label htmlFor='input-name'>
        <input type="text" id='input-name' />
        </label>
        <button type='button'>pesquisar</button>
      </div>
    )
  }
}

export default App