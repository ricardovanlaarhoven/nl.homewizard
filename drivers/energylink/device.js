const Homey = require('homey');
const homewizardConnection = require('./../../app/HomewizardConnection.js');

module.exports = class Energylink extends Homey.Device {
    onInit() {
        /*
        We need to add capabilities that were not defined from the beginning
         */
        this.addCapability('measure_power');

        homewizardConnection.registerListener(() => {
            if (!homewizardConnection.energylink.energy)
                return;

            if (this.getCapabilityValue('measure_power') !== homewizardConnection.energylink.energy.usage) {
                this.setCapabilityValue('measure_power', homewizardConnection.energylink.energy.usage);
            }
            if (this.getCapabilityValue('measure_power.usage') !== homewizardConnection.energylink.energy.usage) {
                this.setCapabilityValue('measure_power.usage', homewizardConnection.energylink.energy.usage);
            }
            if (this.getCapabilityValue('measure_power.netUsage') !== homewizardConnection.energylink.energy.netUsage) {
                this.setCapabilityValue('measure_power.netUsage', homewizardConnection.energylink.energy.netUsage);
            }
            if (homewizardConnection.energylink.energy.s1Usage &&
                this.getCapabilityValue('measure_power.s1Usage') !== homewizardConnection.energylink.energy.s1Usage) {
                this.setCapabilityValue('measure_power.s1Usage', homewizardConnection.energylink.energy.s1Usage);
            }
            if (homewizardConnection.energylink.energy.s2Usage &&
                this.getCapabilityValue('measure_power.s2Usage') !== homewizardConnection.energylink.energy.s2Usage) {
                this.setCapabilityValue('measure_power.s2Usage', homewizardConnection.energylink.energy.s2Usage);
            }
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
        }, 5 * 1000);
    }

};
