// @ts-ignore: Unreachable code error
import onChange from 'on-change';

class State {
	stateObj: any;

	constructor() {
		this.stateObj = onChange({ state: {} }, this.#updateCall.bind(this));
	}

	#updateCall(path: string, value: any) {
		console.log(path, value);
	}

	getState(): object {
		return this.stateObj.state;
	}
	setState(state: object) {
		this.stateObj.state = state;

		return 'age';
	}
}

export default new State();
