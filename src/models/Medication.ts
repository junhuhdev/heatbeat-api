export class Medication {
    private _id: string;
    private name: string;
    private dose: string;
    private manufacturer: string;

    constructor(_id: string,
                name: string,
                dose: string,
                manufacturer: string) {
        this._id = _id;
        this.name = name;
        this.dose = dose;
        this.manufacturer = manufacturer;
    }

}
