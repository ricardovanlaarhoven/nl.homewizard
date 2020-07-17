'use strict';

const Homey = require('homey');
const homewizardConnection = require('./app/HomewizardConnection.js');

class Homewizard extends Homey.App {

    async onInit() {
        setInterval(async () => {
            await homewizardConnection.getStatus();
        }, 10000);
    }
}

module.exports = Homewizard;
