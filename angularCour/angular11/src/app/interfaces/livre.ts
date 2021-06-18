import { Auter } from "./auter";
export interface Livre {
    isbn?: string;
    titre?: string;
    nbrPage?: number;
    motsCles?:string[];
    auteurs?:Auter[];

}
