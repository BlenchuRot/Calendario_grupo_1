class EventEmitter {
    constructor() {
        // eventos a [cb]
        this._subscriptions = Object.create(null);
    }
    on(type, cb) {
        // para el evento de tipo type, anadir la cb
        this._subscriptions[type] = this._subscriptions[type] || [];
        this._subscriptions[type].push(cb);
    }
    off(type, cb) {
        // buscar la cb en las subscripciones de type
        // y si existe la borramos
        const subs = this._subscriptions[type];
        if (!subs) {
            return;
        }
        const cbIndex = subs.indexOf(cb);
        if (cbIndex !== -1) {
            // a partir de cbIndex borra 1 elemento
            subs.splice(cbIndex, 1);
        }
    }
    emit(type, ...data) {
        const subs = this._subscriptions[type];
        if (!subs) {
            return;
        }
        subs.forEach((cb) => {
            cb(...data);
        });
    }
}

export { EventEmitter };