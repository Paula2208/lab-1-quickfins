import DepartmentItem from "../interfaces/Deparment";

export const getDepartments = (
    setStates: (data: DepartmentItem[]) => void
) => {
    fetch(`${process.env.API_URL || ''}/departamentos`, {
        method: 'GET',
    })
        .then((res: any) => {
            return res.json();
        })
        .then((json: any) => {
            if(Array.isArray(json)){
                setStates(json.map((s) => ({
                    id: s.id_departamento,
                    name: s.nombre,
                })));
                return;
            }

            setStates([]);
        })
        .catch((err) => {
            console.log('Get error:', err);
        });
}