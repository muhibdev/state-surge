import { State, Listeners } from '../Configration';

class StateFullStore {
	setState(state: Object) {
		// console.log(state);

		State.setState(state);
		// @ts-ignore: Unreachable code error
		Listeners.runUpdate('age', State.getState().age);
	}
}

export default new StateFullStore();
