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
    stateID: number;
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

export const mockLivingExtended = {
    id: 0,
    address: '',
    capacity: 0,
    levels: 0,
    baths: 0,
    layer: 0,
    area: 0,
    stateID: 0,

    residents: [],

    state: {
        id: 0,
        name: '',
        area: 0,
        budget: 0,
    },
    owner: {
        name: '',
        id: 0,
        age: 0,
        phone: 0,
        gender: '',
        birthday: '',
    },
    sale: {
        idSale: 0,
        idLiving: 0,
        price: 0,
        state: 'en venta',
        publication: '01/08/2023',
        onSale: false,
    },
}

export const mockSaleItem = {
    idSale: 0,
    idLiving: 0,
    price: 0,
    state: 'en venta',
    publication: '01/08/2023',
    onSale: false,
}