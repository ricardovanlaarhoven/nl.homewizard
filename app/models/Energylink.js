module.exports = function EnergylinkModel(energylink) {
    let model = {
        energy: null,
        gas: null,
    };
    if (energylink.used && energylink.aggregate) {
        model.energy = {
            usage: energylink.used.po,
            netUsage: energylink.aggregate.po,
        };
        if (energylink.s1) {
            model.energy.s1Usage = energylink.s1.po;
        }
        if (energylink.s2) {
            model.energy.s2Usage = energylink.s2.po;
        }
    }

    if (energylink.gas) {
        model.gas = {
            usage: energylink.gas.lastHour,
        };
    }
    return model;
};
