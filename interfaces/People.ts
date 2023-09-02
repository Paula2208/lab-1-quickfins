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

export const mockPersonExtended = {
    name: '',
    id: 0,
    age: 0,
    phone: 0,
    gender: '',
    birthday: '',
    isGovernment: false,
    residence: {
        living: {
            id: 0,
            address: '',
            capacity: 0,
            levels: 0,
            baths: 0,
            layer: 0,
            area: 0,
            stateID: 0,
        },
        state: {
            id: 0,
            name: '',
            area: 0,
            budget: 0,
        }
    },
    heritage: [],
    dependents: [],
}