const Homey = require('homey');
const {FlowCardTriggerDevice} = require('homey');
const homewizardConnection = require('./../../app/HomewizardConnection.js');

module.exports = class Heatlink extends Homey.Device {
    onInit() {
        this.registerCapabilityListener('target_temperature', this.onCapabilityTargetTemperature.bind(this));
        homewizardConnection.registerListener(() => {
            if (this.getCapabilityValue('measure_temperature') !== homewizardConnection.heatlink.roomTemperature) {
                this.setCapabilityValue('measure_temperature', homewizardConnection.heatlink.roomTemperature).catch((e) => {console.log('error1', e)});
            }
            if (this.getCapabilityValue('target_temperature') !== homewizardConnection.heatlink.heatingTemperature) {
                this.setCapabilityValue('target_temperature', homewizardConnection.heatlink.heatingTemperature).catch((e) => {console.log('error2', e)});
            }
            if (this.getCapabilityValue('measure_water_temperature') !== homewizardConnection.heatlink.waterTemperature) {
                this.setCapabilityValue('measure_water_temperature', homewizardConnection.heatlink.waterTemperature).catch((e) => {console.log('error3', e)});
            }
            if (this.getCapabilityValue('measure_water_pressure') !== homewizardConnection.heatlink.waterPressure) {
                this.setCapabilityValue('measure_water_pressure', homewizardConnection.heatlink.waterPressure).catch((e) => {console.log('error4', e)});
            }
        });
    }

    async onCapabilityTargetTemperature(value) {
        await homewizardConnection.setTemperature(value);
        this.setCapabilityValue('target_temperature', homewizardConnection.heatlink.heatingTemperature);
    }

};
