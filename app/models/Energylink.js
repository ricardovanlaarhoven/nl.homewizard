module.exports = function HeatlinkModel(energylink) {
    let model = {
        energy: null,
        gas: null,
    };
    if (energylink.used && energylink.aggregate) {
        model.energy = {
            usage: energylink.gas.lastHour,
        }
    }
    if (energylink.gas) {
        model.gas = {
            usage: energylink.gas.lastHour,
        }
    }
};
