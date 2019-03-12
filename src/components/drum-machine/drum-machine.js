import React, {Component}  from 'react';

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

	render() {
    return (
      <div className="drum-container">
        <div className="keys">

          <div data-key="81" className="key">
            <kbd>Q</kbd>
          </div>

          <div data-key="87" className="key">
            <kbd>W</kbd>
          </div>

          <div data-key="69" className="key">
            <kbd>E</kbd>
          </div>
        </div>

        <div className="keys">
          <div data-key="65" className="key">
            <kbd>A</kbd>
          </div>

          <div data-key="83" className="key">
            <kbd>S</kbd>
          </div>

          <div data-key="68" className="key">
            <kbd>D</kbd>
          </div>
        </div>

        <div className="keys">
          <div data-key="90" className="key">
            <kbd>Z</kbd>
          </div>

          <div data-key="88" className="key">
            <kbd>X</kbd>
          </div>

          <div data-key="67" className="key">
            <kbd>C</kbd>
          </div>
        </div>
      </div>
    );
	}
};