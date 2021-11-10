class Listeners {
	cb: any = {};

	run() {
		for (const key in this.cb) {
			this.cb?.[key].forEach((cb: any) => {
				cb();
			});
		}
	}

	runUpdate(key: string, newState: any) {
		this.cb[key].forEach((cb: any) => {
			cb(newState);
		});
	}
}

export default new Listeners();
