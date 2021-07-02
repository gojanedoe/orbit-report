export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(): boolean {
        //shouldShowWarning returns true if the satellite type is 'Space Debris', and it returns false otherwise. Note that this check should be case-insensitive.
        if (this.type.toLowerCase() === 'space debris') {
            return true;
        } else {
            return false;
        }
    }
}