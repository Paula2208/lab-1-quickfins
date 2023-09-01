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