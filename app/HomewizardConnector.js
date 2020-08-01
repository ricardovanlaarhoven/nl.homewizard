const fetch = require('node-fetch');
const Heatlink = require('./models/Heatlink.js');
module.exports = class HomewizardConnector {
    constructor(ipGetter, passwordGetter) {
        this.getIp = ipGetter;
        this.getPassword = passwordGetter;
        this.listeners = [];
    }

    registerListener(callback) {
        this.listeners.push(callback);
    }

    callAlListeners() {
        this.listeners.forEach((callback) => callback());
    }

    call(call) {
        return new Promise((resolve, reject) => {
            const ip = this.getIp();
            const password = this.getPassword();
            console.log(ip, password);
            const url = `http://${ip}/${password}`;
            if (!ip || !password) {
                return reject('no-info');
            }
            fetch(`${url}/${call}`).then(async response => {
                const json = await response.json();
                if (json.status !== 'ok') {
                    return reject(json.status);
                }
                resolve(json);
            }).catch(e => {
                reject(e);
            });
        });
    }

    async getStatus() {
        const json = await this.call('get-status');
        this.setStatus(json);
        this.callAlListeners();
        return json;
    }

    async setTemperature(temperature) {
        const json = await this.call(`hl/0/settarget/${temperature}`);
        if (json.status !== 'ok') {
            throw 'heatlink settarget failed';
        }
        await this.getStatus();
    }

    setStatus(json) {
        this.heatlink = new Heatlink(json.response.heatlinks[0]);
    }
};
