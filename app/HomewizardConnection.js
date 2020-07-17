const { ManagerSettings } = require('homey');
const HomewizardConnector = require('./HomewizardConnector.js');

module.exports = new HomewizardConnector(ManagerSettings.get('ip'), ManagerSettings.get('password'));
