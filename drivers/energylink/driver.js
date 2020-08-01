const Homey = require('homey');

module.exports = class HeatlinkDriver extends Homey.Driver {

    // This method is called when a user is adding a device
    // and the 'list_devices' view is called
    onPairListDevices( data, callback ) {
        callback( null, [
            {
                name: 'Energylink',
                data: {

                }
            }
        ]);
    }

}
