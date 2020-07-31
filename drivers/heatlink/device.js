const Homey = require('homey');
const {FlowCardTriggerDevice} = require('homey');
const homewizardConnection = require('./../../app/HomewizardConnection.js');

module.exports = class Heatlink extends Homey.Device {
    onInit() {
        this.registerCapabilityListener('target_temperature', this.onCapabilityTargetTemperature.bind(this));
        homewizardConnection.registerListener(() => {
            if (this.getCapabilityValue('measure_temperature') !== homewizardConnection.heatlink.roomTemperature) {
                this.setCapabilityValue('measure_temperature', homewizardConnection.heatlink.roomTemperature);
            }
            if (this.getCapabilityValue('target_temperature') !== homewizardConnection.heatlink.heatingTemperature) {
                this.setCapabilityValue('target_temperature', homewizardConnection.heatlink.heatingTemperature);
            }
            if (this.getCapabilityValue('measure_water_temperature') !== homewizardConnection.heatlink.waterTemperature) {
                this.setCapabilityValue('measure_water_temperature', homewizardConnection.heatlink.waterTemperature);
            }
            if (this.getCapabilityValue('measure_water_pressure') !== homewizardConnection.heatlink.waterPressure) {
                this.setCapabilityValue('measure_water_pressure', homewizardConnection.heatlink.waterPressure);
            }
        });
    }

    async onCapabilityTargetTemperature(value) {
        await homewizardConnection.setTemperature(value);
        this.setCapabilityValue('target_temperature', homewizardConnection.heatlink.heatingTemperature);
    }

};
