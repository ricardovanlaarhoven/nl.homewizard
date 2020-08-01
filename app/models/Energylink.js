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

/*
[
    {
        "id": 0,
        "tariff": 1,
        "s1": null,
        "s2": null,
        "aggregate": {
            "po": 1382,
            "dayTotal": 2.22,
            "po+": 1454,
            "po+t": "10:05",
            "po-": 90,
            "po-t": "06:01"
        },
        "used": {
            "po": 1382,
            "dayTotal": 2.23,
            "po+": 1454,
            "po+t": "10:05",
            "po-": 90,
            "po-t": "06:01"
        },
        "gas": {
            "lastHour": 0.00,
            "dayTotal": 0.34
        },
        "kwhindex": 0.00
    }
]

 */
