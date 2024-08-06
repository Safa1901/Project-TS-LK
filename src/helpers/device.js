import bowser from 'bowser';

export function getTypeDevice() {
    let device = `${bowser.name} ${bowser.version} OS ${bowser.osname}`;

    if (!~device.toLowerCase().indexOf('browser')) {
        device = `browser ${device}`;
    }

    return device;
}