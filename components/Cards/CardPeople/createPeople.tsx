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

type CreatePeopleProps = {
    hide: () => void,
    reload: () => void
};

export default function CreatePeople({ reload, hide }: CreatePeopleProps) {

    const [loading, setLoading] = useState<boolean>(false);

    const [address, setAddress] = useState<string>('');
    const [capacity, setCapacity] = useState<number>(0);
    const [levels, setLevels] = useState<number>(0);
    const [baths, setBaths] = useState<string>('');
    const [owner, setOwner] = useState<number>(0);
    const [people, setPeople] = useState<PersonItem[]>([]);
    const [livings, setLivings] = useState<LivingItem[]>([]);

    const handleCreate = () => {
        setLoading(true);

        fetch(`${process.env.API_URL || ''}/personas`, {
            method: 'POST',
            body: JSON.stringify({
                "nombre": address,
                "edad": capacity,
                "telefono": levels,
                "sexo": baths,
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
                toast.success('Persona creada!');
                reload();
                hide();
            })
            .catch((err) => {
                console.log('Delete error:', err);
                toast.error('Error creando persona.');
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getPeople(setPeople);
        getLivings(setLivings);
    }, [])

    return (
        <Modal
            hide={hide}
            type="PERSON"
        >
            <InputForm
                placeholder="Nombre de la Persona"
                onChange={(e) => setAddress(e.currentTarget.value)}
                value={address}
            />

            <ModalHeader>Información General</ModalHeader>
            <GridTwoModal rows={2}>

                <TopicModalTitle>Edad</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setCapacity(parseInt(e.currentTarget.value))}
                    value={capacity}
                />

                <TopicModalTitle>Teléfono</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setLevels(parseInt(e.currentTarget.value))}
                    value={levels}
                />

                <TopicModalTitle>Sexo</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="text"
                    onChange={(e) => setBaths(e.currentTarget.value)}
                    value={baths}
                />
            </GridTwoModal>

            <ModalHeader>Residencia</ModalHeader>
            <Selector
                options={livings.map(s => ({ label: s.address, value: s.id }))}
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