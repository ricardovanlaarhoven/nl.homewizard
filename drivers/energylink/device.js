const Homey = require('homey');
const homewizardConnection = require('./../../app/HomewizardConnection.js');

module.exports = class Energylink extends Homey.Device {
    onInit() {
        homewizardConnection.registerListener(() => {

        });
    }

};
