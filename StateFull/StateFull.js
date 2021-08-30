import { C, CA, F, Q, QA } from './utils/DOM.js';
import { removBracket } from './utils/helper.js';
import API from './ApI.js';

class StateFull extends API {
	state = {};
	change = [];

	constructor(Element /* (<Dom Element> | <String>) */) {
		super(Element);
		/*  Checking Element Type */
		if (Element instanceof HTMLElement) this.current = Element;
		else if (typeof Element === 'string' && Q(Element)) this.current = Q(Element);
		else throw new Error('Invalid argument');
		this._init();
	}
	_init() {
		this._genrateVariable();
	}

	_genrateVariable() {
		[...QA('*', this.current), this.current].forEach((element) => {
			// select Dynamic Attributes Form Element
			element.getAttributeNames().forEach((attr) => {
				this._setVariables(element.getAttributeNode(attr));
			});
			//  Select Dynamic Text Nodes
			element.childNodes.forEach((textNode) => {
				if (!textNode.nodeValue) return;
				this._setVariables(textNode);
			});
		});
	}
	_setVariables(node) {
		const variable = [...new Set(node.nodeValue.match(/{{.+?}}/g))];
		if (variable.length !== 0) {
			this.change.push({
				variable,
				value: node.nodeValue,
				element: node,
			});
		}
	}

	async setState(newStateOrFunction) {
		if (typeof newStateOrFunction === 'function') newStateOrFunction = newStateOrFunction(this.state);
		if (typeof newStateOrFunction !== 'object') throw new Error('Invalid argument');

		/* Check State Object is Update then Call Render Function */
		const updatedState = { ...this.state, ...newStateOrFunction };
		if (JSON.stringify(this.state) === JSON.stringify(updatedState)) return;

		await this._render(newStateOrFunction, updatedState);
		return this;
	}

	async _render(newState, updatedState) {
		/*  Call Function Befor State Update */
		if (this._beforeUpdate) {
			const update = this._beforeUpdate(this.state, newState);
			if (!update) return;
		}
		/*  Check State Object is Update then Call Render Function */
		Object.keys(newState).forEach((key) => {
			this.change.forEach((change) => {
				if (!change.variable.includes(`{{${key}}}`)) return;
				const newText = change.value.replaceAll(
					/{{.+?}}/g,
					(slectedEle) => updatedState[removBracket(slectedEle)] ?? ''
				);
				if (newText !== change.element.nodeValue) change.element.nodeValue = newText;
			});
		});
		this.state = updatedState;

		/* Call Function After State Update */
		this._afterUpdate && this._afterUpdate(this.state);

		/* Call Subscribed Function */
		this._runSubscribed();
	}
}

const init = (Element) => new StateFull(Element);

export default init;
