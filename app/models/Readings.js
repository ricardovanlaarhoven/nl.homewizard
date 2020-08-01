module.exports = function MeterReadingsModel(readings) {
    return {
        energy: {
            lowConsumed: readings.find((reading) => reading.tariff === 1).consumed,
            lowProduced: readings.find((reading) => reading.tariff === 1).produced,
            highConsumed: readings.find((reading) => reading.tariff === 2).consumed,
            highProduced: readings.find((reading) => reading.tariff === 2).produced,
        },
        gas: {
           consumed: readings.find((reading) => reading.type === 'gas').consumed,
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
