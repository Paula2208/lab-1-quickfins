import { useState } from "react";
import Modal from "../../Modal";
import { toast } from 'react-toastify';
import { ModalTitle, ModalHeader, GridTwoModal, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import LivingItem, { LivingItemExtended, mockLivingExtended } from "../../../interfaces/Living";
import Table from "../../Table";

type LivingCenterProps = {
    hide: () => void,
    livingBasic: LivingItem,
};

export default function LivingCenter({ hide, livingBasic }: LivingCenterProps) {

    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [living, setLiving] = useState<LivingItemExtended>({...mockLivingExtended});

    const handleDelete = () => {
        fetch(`${process.env.API_URL || ''}/viviendas/${livingBasic.id || ''}`, {
            method: 'DELETE',
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {
                console.log('Delete complete:', json);
                toast.success('Vivienda eliminada');
                hide();
            })
            .catch((err) => {
                console.log('Delete error:', err);
                toast.error('Error eliminando vivienda.');
            });
    }

    const handleUpdate = () => {
        setIsUpdate(!isUpdate);
    }

    const saveUpdate = () => {
        fetch(`${process.env.API_URL || ''}/viviendas/${livingBasic.id}`, {
            method: 'PUT',
            body: JSON.stringify({}),
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {
                console.log('Update complete:', json);
                toast.success('Vivienda actualizada');
                hide();
            })
            .catch((err) => {
                console.log('Update error:', err);
                toast.error('Error editando vivienda.');
            });
    }

    return (
        <Modal
            hide={hide}
            type="LIV"
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
        >
            <ModalTitle>{livingBasic.address}</ModalTitle>

            <ModalHeader>Información General</ModalHeader>
            <GridTwoModal rows={4}>
                <TopicModalTitle>ID</TopicModalTitle>
                <TopicModalItem>{`${livingBasic.id}`}</TopicModalItem>

                <TopicModalTitle>Estrato</TopicModalTitle>
                <TopicModalItem>{`${livingBasic.layer}`}</TopicModalItem>

                <TopicModalTitle>Municipio</TopicModalTitle>
                <TopicModalItem>{`${living.state.name}`}</TopicModalItem>

                <TopicModalTitle>ID Municipio</TopicModalTitle>
                <TopicModalItem>{`${livingBasic.stateID}`}</TopicModalItem>
            </GridTwoModal>

            <ModalHeader>Propietario</ModalHeader>
            <GridTwoModal rows={2}>
                <TopicModalTitle>Nombre</TopicModalTitle>
                <TopicModalItem>{`${living.owner.name}`}</TopicModalItem>

                <TopicModalTitle>ID Propietario</TopicModalTitle>
                <TopicModalItem>{`${living.owner.id}`}</TopicModalItem>

                <TopicModalTitle>ID Municipio</TopicModalTitle>
                <TopicModalItem>{`${living.state.id}`}</TopicModalItem>
            </GridTwoModal>

            <ModalHeader>Características</ModalHeader>
            <GridTwoModal rows={4}>
                <TopicModalTitle>Área</TopicModalTitle>
                <TopicModalItem>{`${(livingBasic.area || '').toLocaleString()} m²`}</TopicModalItem>

                <TopicModalTitle>Capacidad</TopicModalTitle>
                <TopicModalItem>{`${livingBasic.capacity}`}</TopicModalItem>

                <TopicModalTitle>Niveles</TopicModalTitle>
                <TopicModalItem>{`${livingBasic.levels}`}</TopicModalItem>

                <TopicModalTitle>Baños</TopicModalTitle>
                <TopicModalItem>{`${livingBasic.baths}`}</TopicModalItem>
            </GridTwoModal>

            {/*(living.sale.onSale) && (
                <ModalHeader>Información de Venta</ModalHeader>
            )}

            {(living.sale.onSale) && (
                <GridTwoModal rows={4}>
                    <TopicModalTitle>ID Venta</TopicModalTitle>
                    <TopicModalItem>{`${living.sale.idSale}`}</TopicModalItem>

                    <TopicModalTitle>Precio</TopicModalTitle>
                    <TopicModalItem>{`${living.sale.price}`}</TopicModalItem>

                    <TopicModalTitle>Estado</TopicModalTitle>
                    <TopicModalItem>{`${living.sale.state}`}</TopicModalItem>

                    <TopicModalTitle>Fecha de Publicación</TopicModalTitle>
                    <TopicModalItem>{`${living.sale.publication}`}</TopicModalItem>
                </GridTwoModal>
            )*/}

            <ModalHeader>Residentes</ModalHeader>
            <Table 
                headers={['Nombre', 'Teléfono']} 
                items={living.residents.map((l) => ({
                    id: `${l.id}`,
                    labels: [l.name, `${l.phone}`]
                }))}
            />

        </Modal>
    );
}