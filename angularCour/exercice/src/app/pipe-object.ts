export class PipeObject {
    constructor(private _num: number, private _firstName: string, private _lastName: string) { }
    public get num(): number {
        return this._num;
    }
    public set num(value: number) {
        this._num = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    
}
