const fetch = require('node-fetch');
const Heatlink = require('./models/Heatlink.js');
module.exports = class HomewizardConnector {
    constructor(ip, password) {
        this.ip = ip;
        this.password = password;
        this.listeners = [];
    }

    registerListener(callback) {
        this.listeners.push(callback);
    }

    callAlListeners() {
        this.listeners.forEach((callback) => callback());
    }

    async getStatus() {
        const response = await fetch(`http://${this.ip}/${this.password}/get-status`);
        const json = await response.json();
        this.setStatus(json);
        this.callAlListeners();
    }

    async setTemperature(temperature) {
        const response = await fetch(`http://${this.ip}/${this.password}/hl/0/settarget/${temperature}`);
        const json = await response.json();
        if (json.status !== 'ok') {
            throw 'heatlink settarget failed';
        }
        await this.getStatus();
    }

    setStatus(json) {
        this.heatlink = new Heatlink(json.response.heatlinks[0]);
    }
};
