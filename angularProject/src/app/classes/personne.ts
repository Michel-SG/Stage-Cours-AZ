export class Personne{
   
    constructor(private _num: number, 
        private _nom: string, 
        private _prenom: string){}

        
        public get num(): number {
            return this._num;
        }
        public set num(value: number) {
            this._num = value;
        }

        public get nom(): string {
            return this._nom;
        }
        public set nom(value: string) {
            this._nom = value;
        }

        public get prenom(): string {
            return this._prenom;
        }
        public set prenom(value: string) {
            this._prenom = value;
        }
}