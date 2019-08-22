import React, {Component} from 'react';
import DrumMachine from '../components/drum-machine';
import Header from '../components/header';
import Footer from '../components/footer';

export default class DrumMachineContainer extends Component {
  render() {
    return (
      <div className="nightly-theme">
        <div className="content-container">
          <Header />
          <DrumMachine />
        </div>

        <Footer />
      </div>
    );
  }
}
