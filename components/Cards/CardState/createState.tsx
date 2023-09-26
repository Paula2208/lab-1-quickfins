import { useEffect, useState } from "react";
import Modal from "../../Modal";
import { toast } from 'react-toastify';
import { ModalTitle, ModalHeader, GridTwoModal, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import Table from "../../Table";
import { ButtonAct, InputForm } from "../../../styles/styles";
import Selector from "../../Selector";
import { getStates } from "../../../helpers/state";
import StateItem from "../../../interfaces/State";
import living from "../../../pages/living";
import PersonItem from "../../../interfaces/People";
import { getPeople } from "../../../helpers/people";
import LivingItem from "../../../interfaces/Living";
import { getLivings } from "../../../helpers/living";
import { getDepartments } from "../../../helpers/deparment";
import DepartmentItem from "../../../interfaces/Deparment";
import { SelectItem } from "../../../interfaces/Routing";

type CreateStateProps = {
    hide: () => void,
    reload: () => void
};

export default function CreateState({ reload, hide }: CreateStateProps) {

    const [loading, setLoading] = useState<boolean>(false);

    const [address, setAddress] = useState<string>('');
    const [department, setDepartment] = useState<DepartmentItem[]>([]);
    const [departmentSelected, setDepartmentSelected] = useState<DepartmentItem>({...mockDep});
    const [municipality, setMunicipality] = useState<number>(0);
    const [capacity, setCapacity] = useState<number>(0);
    const [levels, setLevels] = useState<number>(0);
    const [owner, setOwner] = useState<number>(0);
    const [people, setPeople] = useState<PersonItem[]>([]);
    const [livings, setLivings] = useState<LivingItem[]>([]);

    const handleCreate = () => {
        setLoading(true);

        fetch(`${process.env.API_URL || ''}/municipios`, {
            method: 'POST',
            body: JSON.stringify({
                "id_municipio": municipality,
                "nombre": address,
                "area": capacity,
                "presupuesto": levels,
                "departamento_id_departamento": departmentSelected.id,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            // .then((res: any) => {
            //     return res.json();
            // })
            // .then((json: any) => {
            //     return fetch(`${process.env.API_URL || ''}/personas`, {
            //         method: 'GET'
            //     })
            // })
            // .then((res: any) => {
            //     return res.json();
            // })
            // .then((json: any) => {
            //     let idPersona = '';

            //     if(Array.isArray(json)){
            //         for (let index = 0; index < json.length; index++) {
            //             if(json[index].nombre === address){
            //                 idPersona = json[index].idPersona;
            //                 break;
            //             }
            //         }
            //     }

            //     return fetch(`${process.env.API_URL || ''}/habita`, {
            //         method: 'POST',
            //         body: JSON.stringify({
            //             "idPersona": idPersona,
            //             "idVivienda": owner,
            //         }),
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //     })
            // })
            .then((res: any) => {
                toast.success('Municipio creada!');
                reload();
                hide();
            })
            .catch((err) => {
                console.log('Delete error:', err);
                toast.error('Error creando Municipio.');
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getPeople(setPeople);
        getLivings(setLivings);
        getDepartments(setDepartment);
    }, [])

    return (
        <Modal
            hide={hide}
            type="STATE"
        >

            <ModalHeader>Departamento *</ModalHeader>
            <Selector
                options={department.map(d => ({label: d.name, value: d.id}))}
                setSelected={(e:number) => setDepartmentSelected(department.find(d=> d.id===e)||{...mockDep})}
                selected={owner}
                placeholder={" "}
            />


            <ModalHeader>Información General</ModalHeader>
            <GridTwoModal rows={2}>


                <TopicModalTitle>Nombre *</TopicModalTitle>
                <InputForm
                    placeholder="Nombre del municipio"
                    onChange={(e) => setAddress(e.currentTarget.value)}
                    value={address}
                />


                <TopicModalTitle>Id Municipio *</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setMunicipality(parseInt(e.currentTarget.value))}
                    value={municipality}
                />

                <TopicModalTitle>Área (m²)</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setCapacity(parseInt(e.currentTarget.value))}
                    value={capacity}
                />

                <TopicModalTitle>Presupuesto (COP)</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setLevels(parseInt(e.currentTarget.value))}
                    value={levels}
                />
            </GridTwoModal>

            <ModalHeader>Gobernante</ModalHeader>
            <Selector
                options={people.map(s => ({ label: s.name, value: s.id }))}
                setSelected={setOwner}
                selected={owner}
                placeholder={" "}
            />

            {/* <ModalHeader>Residentes</ModalHeader>
            <Selector
                options={people.map(s => ({ label: s.name, value: s.id }))}
                setSelected={setOwner}
                selected={owner}
                placeholder={" "}
            /> */}

            <ButtonAct onClick={handleCreate}>
                {!loading ? 'Save' : (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </ButtonAct>

        </Modal>
    );
}

export const mockDep = {
    id: 0,
    name: '',
}