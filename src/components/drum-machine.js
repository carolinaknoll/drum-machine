import React, {Component}  from 'react';

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.playSound);
    document.addEventListener('click', this.playSound);
  }

  playSound = (e) => {
    let pressedKey = e.key;
    let clickedKey = e.target.id;

    if (!pressedKey && !clickedKey) {
      return;
    }

    let selectedKey = pressedKey ? pressedKey : clickedKey;

    selectedKey = selectedKey.toUpperCase();

    let audio = document.querySelector(`audio#${selectedKey}`);

    if (audio) {
      this.displayAudioName(audio);
      audio.currentTime = 0;
      audio.play();
    }
  }

  // get audio src name via second class name
  // loop through it and replace -s for spaces
  // uppercase first element after space

  displayAudioName = (audio) => {
    let audioSource = audio.classList[1];

    let cleanedAudioSource = this.cleanAudioSource(audioSource);
    document.getElementById('display').innerHTML = cleanedAudioSource;
  }

  cleanAudioSource = (audioSource) => {
    audioSource = audioSource.replace(/-/g, ' ');
    return this.titleCaseAudioSource(audioSource);
  }

  titleCaseAudioSource = (audioSource) => {
    audioSource = audioSource.split(' ').map((word) => {
      return word.replace(word[0], word[0].toUpperCase());
    });

    return audioSource.join(' ');
  }

	render() {
    return (
      <div id="drum-machine" className="drum-container">
        <div id="display" className="display">
          <p>Click/press a key to display a sound name here.</p>
        </div>

        <div className="drum-pad-block">
          <div id="Q" className="drum-pad">
            <audio id="Q" className="clip beep" src="static/beep.wav"></audio>
            <p>Q</p>
          </div>

          <div id="W" className="drum-pad">
            <audio id="W" className="clip fail-buzzer" src="static/fail-buzzer-04.wav"></audio>
            <p>W</p>
          </div>

          <div id="E" className="drum-pad">
            <audio id="E" className="clip hihat" src="static/hihat.wav"></audio>
            <p>E</p>
          </div>
        </div>

        <div className="drum-pad-block">
          <div id="A" className="drum-pad">
            <audio id="A" className="clip magic-chime" src="static/magic-chime-02.wav"></audio>
            <p>A</p>
          </div>

          <div id="S" className="drum-pad">
            <audio id="S" className="clip openhat" src="static/openhat.wav"></audio>
            <p>S</p>
          </div>

          <div id="D" className="drum-pad">
            <audio id="D" className="clip ride" src="static/ride.wav"></audio>
            <p>D</p>
          </div>
        </div>

        <div className="drum-pad-block">
          <div id="Z" className="drum-pad">
            <audio id="Z" className="clip snare" src="static/snare.wav"></audio>
            <p>Z</p>
          </div>

          <div id="X" className="drum-pad">
            <audio id="X" className="clip squeeze-toy" src="static/squeeze-toy-5.wav"></audio>
            <p>X</p>
          </div>

          <div id="C" className="drum-pad">
            <audio id="C" className="clip whip-whoosh" src="static/whip-whoosh-01.wav"></audio>
            <p>C</p>
          </div>
        </div>
      </div>
    );
	}
};
