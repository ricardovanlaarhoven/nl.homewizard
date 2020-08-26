# Homey homewizard app (beta)
![Homey validation](https://github.com/ricardovanlaarhoven/nl.homewizard/workflows/Homey%20validation/badge.svg)

Adds support for some homewizard devices to the homey.
Inspired by the existing homewizard app for the homey I've decided to build a new one from scratch. Which supports the sdk 2.0 and soon the 3.0.

My goal is to atleast support the devices you can't connect directly to homey, the heatlink and the energylink. As far as I know all other devices like sensors and light bulbs can be connected directly to the homey.

## Installation
Unfortunately this app is not accepted to the homey app store because there already is a homewizard app.
If you'd like a lightweight app with only devices that are not supported directly on homey (heatlink and energylink) you can still install this app directly on your homey without the app store.
You can find all info about installing an app via the CLI here: https://community.athom.com/t/how-to-cli-install-method/198

1. Make sure you have npm on your computer: https://www.npmjs.com/get-npm
2. Make sure you have the homey sdk on your computer by going to your CLI and execute `npm install -g homey`
3. Download or clone this repository to your computer
4. go there with your CLI and execute `homey app install`

The app is now installed and you can use it. When there is an update you'll have to download or fetch the new version from github and execute `homey app install` again in that folder.


## getting started
Once you've installed the homewizard app via eather the app store or via the homey sdk you'll have to set some settings.
Go to the homey settings, select homewizard and fill in your ip and password.

> If you have installed your homewizard on a different port then 80, you'll need to fill in your port in the ip field. like this: `192.168.1.2:2020`

## Issues and releases
You can find all info about this app, the option to create an issue and follow the releases on github https://github.com/ricardovanlaarhoven/nl.homewizard
You can also watch or star my project over there to get notifications about updates

## Supported devices
- Heatlink
- Energylink

## Development
Make sure you have installed the homey sdk via npm (https://developer.athom.com/)

- `npm install`
- `homey app run`

