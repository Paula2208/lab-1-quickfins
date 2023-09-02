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
            console.log('viviendas pau', json)
            if(Array.isArray(json)){
                // setLivings(json.map((s) => ({
                //     id: number;
                //     address: string;
                //     capacity: number;
                //     levels: number;
                //     baths: number;
                //     layer: number;
                //     area: number;
                // })));
                return;
            }

            setLivings([]);
        })
        .catch((err) => {
            console.log('Get error:', err);
        });
}