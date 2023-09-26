import PersonItem, { PersonItemExtended } from "../interfaces/People";
import { formatBirthday } from "./birthday";

export const getPeople = (
    setPeople: (data: PersonItem[]) => void
    ) => {
    fetch(`${process.env.API_URL || ''}/personas`, {
        method: 'GET',
    })
        .then((res: any) => {
            return res.json();
        })
        .then((json: any) => {
            if(Array.isArray(json)){
                setPeople(json.map((s) => ({
                    name: s.nombre,
                    id: s.id_cedula,
                    age: s.edad,
                    phone: s.telefono,
                    gender: s.sexo,
                    birthday: formatBirthday(s.fecha_de_nacimiento)
                })));
                return;
            }

            setPeople([]);
        })
        .catch((err) => {
            console.log('Get error:', err);
        });
}

export const getExtendsPerson = (
    setPerson: (data: PersonItemExtended) => void,
    person: PersonItem,
) => {
    const result: PersonItemExtended = {
        ...person,
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

    Promise.all([
        fetch(`${process.env.API_URL || ''}/dependiente`, {
            method: 'GET',
        }),
        fetch(`${process.env.API_URL || ''}/viviendas`, {
            method: 'GET',
        }),
        fetch(`${process.env.API_URL || ''}/posee`, {
            method: 'GET',
        })
    ])
        .then(([dep, viv, po]) => Promise.all([
            dep.json(),
            viv.json(),
            po.json(),
        ]))
        .then(([dependiente, vivienda, posee]) => {
            if(Array.isArray(dependiente)){
                
            }
            if(Array.isArray(vivienda)){
                
            }
            if(Array.isArray(posee)){
                
            }
        })
        .catch(console.error)
}