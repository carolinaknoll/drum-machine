import React, {Component}  from 'react';

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audioFilePaths: [],
      audioNames: ['beep', 'fail-buzzer', 'hihat', 'magic-chime', 'openhat', 'ride', 'snare', 'squeeze-toy', 'whip-whoosh'],
      padLetters: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    };
  }

  componentDidMount() {
    this.importAudioFiles();
    document.addEventListener('keydown', this.playSound);
    document.addEventListener('click', this.playSound);
  }

  // import multiple audio files without having to import one by one
  // https://stackoverflow.com/a/42118921
  importAudioFiles = () => {
    let audioPathContext = require.context('../assets/static/', false, /\.(mp3|wav)$/);
    let audioFilePaths =  audioPathContext.keys().map(audioPathContext);

    this.setState({audioFilePaths: audioFilePaths});
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

  // 1. get audio name via getAttribute (faster than classList)
  // https://measurethat.net/Benchmarks/Show/5846/0/getattribute-vs-classlist
  // 2. loop through it and replace -s for spaces
  // 3. uppercase first element of each word of audio name

  // I could have written data attrs like "Fail Buzzer" instead of "fail-buzzer"
  // but that wouldn't be as much fun :P
  // and in a real world scenario we cannot control how these names are given to us

  displayAudioName = (audio) => {
    let audioSource = audio.getAttribute('data-audio-name');
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

  createDrumPads = (range) => {
    const { audioFilePaths, audioNames, padLetters } = this.state;

    return range.map((index) => {
      return (
        <div id={padLetters[index]} className="drum-pad" key={padLetters[index]}>
          <audio id={padLetters[index]} className="clip" data-audio-name={audioNames[index]} src={audioFilePaths[index]}></audio>
          <p>{padLetters[index]}</p>
        </div>
      )
    })
  }

	render() {
    let audioFilePaths = this.state.audioFilePaths;

    return (
      <div id="drum-machine" className="drum-container">
        <div id="display" className="display">
          <p>Click/press a key to display a sound name here.</p>
        </div>

        <div className="drum-pad-block">
          {this.createDrumPads([0, 1, 2])}
        </div>

        <div className="drum-pad-block">
          {this.createDrumPads([3, 4, 5])}
        </div>

        <div className="drum-pad-block">
          {this.createDrumPads([6, 7, 8])}
        </div>
      </div>
    );
	}
};
