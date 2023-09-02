import PersonItem from "../interfaces/People";

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
                    id: s.idPersona,
                    age: s.edad,
                    phone: s.telefono,
                    gender: s.sexo,
                    birthday: s.fechaDeNacimiento
                })));
                return;
            }

            setPeople([]);
        })
        .catch((err) => {
            console.log('Get error:', err);
        });
}