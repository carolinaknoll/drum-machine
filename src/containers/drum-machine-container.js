import React, {Component} from 'react';
import DrumMachine from '../components/drum-machine/drum-machine';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

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
