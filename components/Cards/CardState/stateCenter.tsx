import { useState } from "react";
import Modal from "../../Modal";
import { GridTwoModal, ModalHeader, ModalTitle, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import { toast } from 'react-toastify';
import { StateItemExtended } from "../../../interfaces/State";
import Table from "../../Table";

type StateCenterProps = {
    hide: () => void,
};


export default function StateCenter({ hide }: StateCenterProps) {

    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    const handleDelete = () => {
        fetch(`${process.env.API_URL || ''}/municipios/${state.id}`, {
            method: 'DELETE',
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {
                console.log('Delete complete:', json);
                toast.success('Municipio eliminado');
                hide();
            })
            .catch((err) => {
                console.log('Delete error:', err);
                toast.error('Error eliminando municipio.');
            });
    }

    const handleUpdate = () => {
        setIsUpdate(!isUpdate);
    }

    const saveUpdate = () => {
        fetch(`${process.env.API_URL || ''}/municipios/${state.id}`, {
            method: 'POST',
            body: JSON.stringify({}),
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {
                console.log('Update complete:', json);
                toast.success('Municipio actualizado');
                hide();
            })
            .catch((err) => {
                console.log('Update error:', err);
                toast.error('Error editando municipio.');
            });
    }

    return (
        <Modal
            hide={hide}
            type="STATE"
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
        >
            <ModalTitle>{state.name}</ModalTitle>

            <ModalHeader>Información General</ModalHeader>
            <GridTwoModal rows={3}>
                <TopicModalTitle>ID</TopicModalTitle>
                <TopicModalItem>{`${state.id}`}</TopicModalItem>

                <TopicModalTitle>Área</TopicModalTitle>
                <TopicModalItem>{`${state.area}`}</TopicModalItem>

                <TopicModalTitle>Presupuesto</TopicModalTitle>
                <TopicModalItem>${`${state.budget}`} COP</TopicModalItem>
            </GridTwoModal>

            <ModalHeader>Gobernante</ModalHeader>
            <GridTwoModal rows={3}>
                <TopicModalTitle>ID</TopicModalTitle>
                <TopicModalItem>{`${state.government.id}`}</TopicModalItem>

                <TopicModalTitle>Nombre</TopicModalTitle>
                <TopicModalItem>{state.government.name}</TopicModalItem>

                <TopicModalTitle>Teléfono</TopicModalTitle>
                <TopicModalItem>{`${state.government.phone}`}</TopicModalItem>
            </GridTwoModal>

            <ModalHeader>Viviendas</ModalHeader>
            <Table 
                headers={['Dirección', 'Área']} 
                items={state.livings.map((l) => ({
                    id: `${l.id}`,
                    labels: [l.address, `${l.area}`]
                }))}
            />

            <ModalHeader>Habitantes</ModalHeader>
            <Table 
                headers={['Nombre', 'Teléfono']} 
                items={state.people.map((l) => ({
                    id: `${l.id}`,
                    labels: [l.name, `${l.phone}`]
                }))}
            />

        </Modal>
    );
}

const state: StateItemExtended = {
    id: 1,
    name: 'Cúcuta',
    area: 109820394.93,
    budget: 1,

    government: {
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },

    livings: [{
        id: 1,
        address: 'Carrera 15',
        capacity: 5,
        levels: 3,
        baths: 2,
        layer: 3,
        area: 400.2,
    },
    {
        id: 1,
        address: 'Carrera 15',
        capacity: 5,
        levels: 3,
        baths: 2,
        layer: 3,
        area: 400.2,
    },
    {
        id: 1,
        address: 'Carrera 15',
        capacity: 5,
        levels: 3,
        baths: 2,
        layer: 3,
        area: 400.2,
    }],

    people: [{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },
    {
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },
    {
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    }]
}