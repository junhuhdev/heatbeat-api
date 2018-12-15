export class User {
    private _id: string;
    private email: string;
    private name: string;
    private first_name: string;
    private last_name: string;
    private age: number;
    private country: string;
    private city: string;
    private address: string;
    private dob: string;
    private gender: string;
    private created: Date;
    private updated: Date;

    constructor(_id: string,
                email: string,
                name: string,
                first_name: string,
                last_name: string,
                age: number,
                country: string,
                city: string,
                address: string,
                dob: string,
                gender: string,
                created: Date,
                updated: Date) {
        this._id = _id;
        this.email = email;
        this.name = name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.country = country;
        this.city = city;
        this.address = address;
        this.dob = dob;
        this.gender = gender;
        this.created = created;
        this.updated = updated;
    }
}
