import Modal from "../../Modal";
import { toast } from 'react-toastify';
import { GridTwoModal, ModalHeader, ModalTitle, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import { useState } from "react";
import { PersonItemExtended } from "../../../interfaces/People";

type PeopleCenterProps = {
    hide: () => void,
};

export default function PeopleCenter({ hide }: PeopleCenterProps) {

    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    const handleDelete = () => {
        fetch(`${process.env.API_URL || ''}/personas/${person.id}`, {
            method: 'DELETE',
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {
                console.log('Delete complete:', json);
                toast.success('Persona eliminada');
                hide();
            })
            .catch((err) => {
                console.log('Delete error:', err);
                toast.error('Error eliminando persona.');
            });
    }

    const handleUpdate = () => {
        setIsUpdate(!isUpdate);
    }

    const saveUpdate = () => {
        fetch(`${process.env.API_URL || ''}/personas/${person.id}`, {
            method: 'POST',
            body: JSON.stringify({}),
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {
                console.log('Update complete:', json);
                toast.success('Persona actualizada');
                hide();
            })
            .catch((err) => {
                console.log('Update error:', err);
                toast.error('Error editando persona.');
            });
    }

    return (
        <Modal
            hide={hide}
            type="PERSON"
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
        >
            <ModalTitle>{person.name}</ModalTitle>

            <ModalHeader>Información General</ModalHeader>
            <GridTwoModal rows={5}>
                <TopicModalTitle>ID</TopicModalTitle>
                <TopicModalItem>{`${person.id}`}</TopicModalItem>

                <TopicModalTitle>Área</TopicModalTitle>
                <TopicModalItem>{`${person.age}`}</TopicModalItem>

                <TopicModalTitle>Presupuesto</TopicModalTitle>
                <TopicModalItem>${`${person.birthday}`} COP</TopicModalItem>
            </GridTwoModal>

            <ModalHeader>Residencia</ModalHeader>

            <ModalHeader>Patrimonio</ModalHeader>

            <ModalHeader>Dependientes</ModalHeader>
        </Modal>
    );
}

const person: PersonItemExtended = {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',

    isGovernment: true,
    residence: {
        state: {
            id: 1,
            name: 'Cúcuta',
            area: 109820394.93,
            budget: 1,
        },
        living: {
            id: 1,
            address: 'Carrera 15',
            capacity: 5,
            levels: 3,
            baths: 2,
            layer: 3,
            area: 400.2,
        },
    },
    heritage: [{
        id: 1,
        address: 'Carrera 15',
        capacity: 5,
        levels: 3,
        baths: 2,
        layer: 3,
        area: 400.2,
    }],
    dependents: [{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    }],
}