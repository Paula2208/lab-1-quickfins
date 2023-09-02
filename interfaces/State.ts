import LivingItem from "./Living";
import PersonItem from "./People";

export default interface StateItem {
    id: number;
    name: string;
    area: number;
    budget: number;
}

export interface StateItemExtended extends StateItem{
    government: PersonItem;
    livings: LivingItem[];
    people: PersonItem[];
}

export const mockState = {
    id: 0,
    name: '',
    area: 0,
    budget: 0,
}