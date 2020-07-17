module.exports = function HeatlinkModel(heatlink) {
    return {
        isPumping: heatlink.pump === 'on',
        isHeating: heatlink.heating === 'on',
        waterTemperature: heatlink.wte,
        waterPresure: heatlink.wp,
        roomTemperature: heatlink.rte,
        heatingTemperature: heatlink.tte, //it's the fallback after an timer but also the temperature when you turn off the heatlink
        fallbackHeatingTemperature: heatlink.rsp,
        diagnosticCode: heatlink.odc,
        faultCode: heatlink.ofc,
        minutesRemaining: heatlink.ttm,
    };
};
