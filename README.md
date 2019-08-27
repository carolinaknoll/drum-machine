#### :bell: React Drum-Machine

:notes: Drum Machine project, where you can click or press a key and it will highlight this button and play a unique sound. Visit the project by clicking [here](https://carolinaknoll.github.io/drum-machine/).

***

This project is part of the FreeCodeCamp [Frontend Libraries Projects](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine/), and follows a series of requested user stories. You can [visit the project's website](https://carolinaknoll.github.io/drum-machine/) and click 'Run Tests' on the FreeCodeCamp Test Suite on the top left corner to see the below tests pass.

- [x] <strong>User Story #1:</strong> I should be able to see an outer container with a corresponding <code>id="drum-machine"</code> that contains all other elements.   
- [x] <strong>User Story #2:</strong> Within <code>#drum-machine</code> I can see an element with a corresponding <code>id="display"</code>.   
- [x] <strong>User Story #3:</strong> Within <code>#drum-machine</code> I can see 9 clickable drum pad elements, each with a class name of <code>drum-pad</code>, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.   
- [x] <strong>User Story #4:</strong> Within each <code>.drum-pad</code>, there should be an HTML5 <code>audio</code> element which has a <code>src</code> attribute pointing to an audio clip, a class name of <code>clip</code>, and an id corresponding to the inner text of its parent <code>.drum-pad</code> (e.g. <code>id="Q"</code>, <code>id="W"</code>, <code>id="E"</code> etc.).   
- [x] <strong>User Story #5:</strong> When I click on a <code>.drum-pad</code> element, the audio clip contained in its child <code>audio</code> element should be triggered.   
- [x] <strong>User Story #6:</strong> When I press the trigger key associated with each <code>.drum-pad</code>, the audio clip contained in its child <code>audio</code> element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).   
- [x] <strong>User Story #7:</strong> When a <code>.drum-pad</code> is triggered, a string describing the associated audio clip is displayed as the inner text of the <code>#display</code> element (each string must be unique).   

:notes: To run the project locally, use your favorite command-line interface to type the following commands:

1. Clone it with `git clone git@github.com:carolinaknoll/drum-machine.git`
2. Go to the project's directory with `cd drum-machine`
3. Install the required dependencies with `npm install`
4. Finally, start the project with `npm start`
