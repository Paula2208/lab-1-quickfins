import PersonItem from "./People";
import StateItem from "./State";

export default interface LivingItem {
    id: number;
    address: string;
    capacity: number;
    levels: number;
    baths: number;
    layer: number;
    area: number;
}

export interface LivingItemExtended extends LivingItem {
    state: StateItem;
    owner: PersonItem;
    sale: SaleItem;
    residents: PersonItem[];
}

export interface SaleItem {
    idSale: number;
    idLiving: number;
    price: number;
    state: string;
    publication: string;
    onSale: boolean;
}