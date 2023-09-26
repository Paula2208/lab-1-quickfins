import StateItem from "../interfaces/State";

export const getStates = (
    setStates: (data: StateItem[]) => void
) => {
    fetch(`${process.env.API_URL || ''}/municipios`, {
        method: 'GET',
    })
        .then((res: any) => {
            return res.json();
        })
        .then((json: any) => {
            if(Array.isArray(json)){
                setStates(json.map((s) => ({
                    id: s.id_municipio,
                    name: s.nombre,
                    area: s.area,
                    budget: s.presupuesto,
                })));
                return;
            }

            setStates([]);
        })
        .catch((err) => {
            console.log('Get error:', err);
        });
}