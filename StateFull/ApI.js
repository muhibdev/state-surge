class API {
	subscribed = [];
	_beforeUpdate;
	_afterUpdate;
	on(event, callback) {
		this.current.addEventListener(event, (e) => {
			e.state = this.state;
			e.is = (Query) => F(e.target, Query);
			callback(e);
		});
		return this;
	}

	subscribe(Function) {
		this.subscribed.push(Function);
		return this;
	}
	_runSubscribed() {
		this.subscribed.forEach((Function) => Function(this.state));
	}
	beforeUpdate(Function) {
		if (typeof Function !== 'function') throw new Error('Invalid argument');
		this._beforeUpdate = Function;
		return this;
	}
	afterUpdate(Function) {
		if (typeof Function !== 'function') throw new Error('Invalid argument');
		this._afterUpdate = Function;
		return this;
	}
	appendIn(Element) {
		Element.appendChild(this.current);
	}
	remove() {
		this.current.remove();
	}
}

export default API;
