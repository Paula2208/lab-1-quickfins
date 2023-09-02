import { useState } from "react";
import Modal from "../../Modal";
import { GridTwoModal, ModalHeader, ModalTitle, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import { toast } from 'react-toastify';
import StateItem, { StateItemExtended, mockStateExtended } from "../../../interfaces/State";
import Table from "../../Table";

type StateCenterProps = {
    hide: () => void,
    stateBasic: StateItem,
};

export default function StateCenter({ hide, stateBasic }: StateCenterProps) {

    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [state, setState] = useState<StateItemExtended>({...mockStateExtended});

    const handleDelete = () => {
        fetch(`${process.env.API_URL || ''}/municipios/${stateBasic.id}`, {
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
        fetch(`${process.env.API_URL || ''}/municipios/${stateBasic.id}`, {
            method: 'PUT',
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
            <ModalTitle>{stateBasic.name}</ModalTitle>

            <ModalHeader>Información General</ModalHeader>
            <GridTwoModal rows={3}>
                <TopicModalTitle>ID</TopicModalTitle>
                <TopicModalItem>{`${stateBasic.id}`}</TopicModalItem>

                <TopicModalTitle>Área</TopicModalTitle>
                <TopicModalItem>{`${(stateBasic.area || '').toLocaleString()} m²`}</TopicModalItem>

                <TopicModalTitle>Presupuesto</TopicModalTitle>
                <TopicModalItem>${`${(stateBasic.budget || '').toLocaleString()}`} COP</TopicModalItem>
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
                    labels: [l.address, `${(l.area || '').toLocaleString()} m²`]
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