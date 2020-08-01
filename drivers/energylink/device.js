const Homey = require('homey');
const homewizardConnection = require('./../../app/HomewizardConnection.js');

module.exports = class Energylink extends Homey.Device {
    onInit() {
        homewizardConnection.registerListener(() => {
            //@TODO certain readings
        });
        setInterval(async () => {
            const meterReadings = await homewizardConnection.getMeterReadings();
            const totalEnergyConsumed = meterReadings.energy.lowConsumed + meterReadings.energy.highConsumed;
            if (this.getCapabilityValue('meter_power') !== totalEnergyConsumed) {
                this.setCapabilityValue('meter_power', totalEnergyConsumed);
            }
            if (this.getCapabilityValue('meter_gas') !== meterReadings.gas.consumed) {
                this.setCapabilityValue('meter_gas', meterReadings.gas.consumed);
            }
        }, 5*1000);
    }

};
