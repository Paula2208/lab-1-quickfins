import LivingItem from "../interfaces/Living";

export const getLivings = (
    setLivings: (data: LivingItem[]) => void
) => {
    fetch(`${process.env.API_URL || ''}/viviendas`, {
        method: 'GET',
    })
        .then((res: any) => {
            return res.json();
        })
        .then((json: any) => {
            if(Array.isArray(json)){
                setLivings(json.map((s) => ({
                    id: s.id_vivienda,
                    address: s.direccion,
                    capacity: s.capacidad,
                    levels: s.niveles,
                    baths: s.baños,
                    layer: s.estrato,
                    area: s.area,
                    stateID: s.municipio_id_municipio
                })));
                return;
            }

            setLivings([]);
        })
        .catch((err) => {
            console.log('Get error:', err);
        });
}