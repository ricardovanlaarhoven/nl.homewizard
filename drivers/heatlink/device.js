const Homey = require('homey');
const homewizardConnection = require('./../../app/HomewizardConnection.js');

module.exports = class Heatlink extends Homey.Device {
    onInit() {
        this.registerCapabilityListener('target_temperature', this.onCapabilityTargetTemperature.bind(this));
        homewizardConnection.registerListener(() => {
            console.log('data available', this.getCapabilityValue('measure_temperature'), homewizardConnection.heatlink.roomTemperature);
            this.setCapabilityValue('target_temperature', homewizardConnection.heatlink.heatingTemperature).catch( (e) => console.log('a',e) );
            this.setCapabilityValue('measure_temperature', homewizardConnection.heatlink.roomTemperature).catch( (e) => console.log('e',e) );
        });
    }

    async onCapabilityTargetTemperature(value, opts) {
        await homewizardConnection.setTemperature(value);
        this.setCapabilityValue('target_temperature', homewizardConnection.heatlink.heatingTemperature);
    }

};
