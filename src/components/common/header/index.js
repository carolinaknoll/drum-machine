import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Drum Machine</h1>
        <h3>Press or click one of the keys below to activate a sound.</h3>
      </header>
    );
  }
}
