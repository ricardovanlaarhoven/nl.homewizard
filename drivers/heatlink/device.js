const Homey = require('homey');
const homewizardConnection = require('./../../app/HomewizardConnection.js');

module.exports = class Heatlink extends Homey.Device {
    onInit() {
        this.registerCapabilityListener('target_temperature', this.onCapabilityTargetTemperature.bind(this));
        homewizardConnection.registerListener(() => {
            console.log('update avaiable')
            if (this.getCapabilityValue('measure_temperature') !== homewizardConnection.heatlink.roomTemperature) {
                console.log('updated measure_temperature to', homewizardConnection.heatlink.roomTemperature);
;                this.setCapabilityValue('measure_temperature', homewizardConnection.heatlink.roomTemperature)
            }

            if (this.getCapabilityValue('target_temperature') !== homewizardConnection.heatlink.heatingTemperature) {
                console.log('updated target_temperature to', homewizardConnection.heatlink.heatingTemperature);
                this.setCapabilityValue('target_temperature', homewizardConnection.heatlink.heatingTemperature)
            }
        });
    }

    async onCapabilityTargetTemperature(value) {
        await homewizardConnection.setTemperature(value);
        this.setCapabilityValue('target_temperature', homewizardConnection.heatlink.heatingTemperature);
    }

};
