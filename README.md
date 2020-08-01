# Homey homewizard app (beta)
![Homey validation](https://github.com/ricardovanlaarhoven/nl.homewizard/workflows/Homey%20validation/badge.svg)

Adds support for some homewizard devices to the homey.
Inspired by the existing homewizard app for the homey I've decided to build a new one from scratch. Which supports the sdk 2.0 and soon the 3.0.

My goal is to atleast support the devices you can't connect directly to homey, the heatlink and the energylink. As far as I know all other devices like sensors and light bulbs can be connected directly to the homey.

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

