import LivingItem from "./Living";
import StateItem from "./State";

export default interface PersonItem {
    name: string;
    id: number;
    age: number;
    phone: number;
    gender: string;
    birthday: string;
}

export interface PersonItemExtended extends PersonItem {
    isGovernment: boolean;
    residence: ResidenceItem;
    heritage: LivingItem[];
    dependents: PersonItem[];
}

export interface ResidenceItem {
    living: LivingItem;
    state: StateItem;
}