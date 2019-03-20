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

  // get audio src > audio.getAttribute('src');
  // loop through it and replace -s for spaces
  // uppercase first element after space

  displayAudioName = (audio) => {
    let audioSource = audio.getAttribute('src');

    let cleanedAudioSource = this.cleanAudioSource(audioSource);
    document.getElementById('display').innerHTML = cleanedAudioSource;
  }

  cleanAudioSource = (audioSource) => {
    // todo: think of a regexp-only or native-code-only solution for the two lines below
    audioSource = audioSource.replace(/-/g, ' ').replace(/.wav/g, '');
    audioSource = audioSource.substring(audioSource.lastIndexOf("/") + 1);

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
        <div id="display" className="display"></div>

        <div className="drum-pad-block">
          <div id="Q" className="drum-pad">
            <audio id="Q" className="clip" src="static/beep.wav"></audio>
            <kbd>Q</kbd>
          </div>

          <div id="W" className="drum-pad">
            <audio id="W" className="clip" src="static/fail-buzzer-04.wav"></audio>
            <kbd>W</kbd>
          </div>

          <div id="E" className="drum-pad">
            <audio id="E" className="clip" src="static/hihat.wav"></audio>
            <kbd>E</kbd>
          </div>
        </div>

        <div className="drum-pad-block">
          <div id="A" className="drum-pad">
            <audio id="A" className="clip" src="static/magic-chime-02.wav"></audio>
            <kbd>A</kbd>
          </div>

          <div id="S" className="drum-pad">
            <audio id="S" className="clip" src="static/openhat.wav"></audio>
            <kbd>S</kbd>
          </div>

          <div id="D" className="drum-pad">
            <audio id="D" className="clip" src="static/ride.wav"></audio>
            <kbd>D</kbd>
          </div>
        </div>

        <div className="drum-pad-block">
          <div id="Z" className="drum-pad">
            <audio id="Z" className="clip" src="static/snare.wav"></audio>
            <kbd>Z</kbd>
          </div>

          <div id="X" className="drum-pad">
            <audio id="X" className="clip" src="static/squeeze-toy-5.wav"></audio>
            <kbd>X</kbd>
          </div>

          <div id="C" className="drum-pad">
            <audio id="C" className="clip" src="static/whip-whoosh-01.wav"></audio>
            <kbd>C</kbd>
          </div>
        </div>
      </div>
    );
	}
};