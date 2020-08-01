'use strict';

const Homey = require('homey');

class Homewizard extends Homey.App {

    async onInit() {
        let lastError = 0;
        setInterval(async () => {
            try {
                const homewizardConnection = require('./app/HomewizardConnection.js');
                await homewizardConnection.getStatus();
            } catch (e) {
                if (e === 'failed') {
                    if (lastError !== 1)
                        new Homey.Notification({excerpt: 'Your Homewizard password is incorrect'}).register();
                    lastError = 1;
                    return;
                } else if (e === 'no-info') {
                    if (lastError !== 2)
                        new Homey.Notification({excerpt: 'You haven\'t filled in a password or IP, go to the settings of your Homewizard app in homey to configure this.'}).register();
                    lastError = 2;
                    return;
                } else {
                    if (lastError !== 3)
                        new Homey.Notification({excerpt: 'Your Homewizard ip is incorrect or unavailable'}).register();
                    lastError = 3;
                    return;
                }
            }
            if (lastError !== 0)
                new Homey.Notification({excerpt: 'Homewizard is online again!'}).register();
            lastError = 0;
        }, 10000);
    }
}

module.exports = Homewizard;
