import { useState } from "react";
import Modal from "../../Modal";
import { toast } from 'react-toastify';
import { ModalTitle, ModalHeader, GridTwoModal, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import { LivingItemExtended } from "../../../interfaces/Living";
import Table from "../../Table";

type LivingCenterProps = {
    hide: () => void,
};


export default function LivingCenter({ hide }: LivingCenterProps) {

    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    const handleDelete = () => {
        fetch(`${process.env.API_URL || ''}/viviendas/${living.id}`, {
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
        fetch(`${process.env.API_URL || ''}/viviendas/${living.id}`, {
            method: 'POST',
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
            <ModalTitle>{living.address}</ModalTitle>

            <ModalHeader>Información General</ModalHeader>
            <GridTwoModal rows={4}>
                <TopicModalTitle>ID</TopicModalTitle>
                <TopicModalItem>{`${living.id}`}</TopicModalItem>

                <TopicModalTitle>Estrato</TopicModalTitle>
                <TopicModalItem>{`${living.layer}`}</TopicModalItem>

                <TopicModalTitle>Municipio</TopicModalTitle>
                <TopicModalItem>{`${living.state.name}`}</TopicModalItem>

                <TopicModalTitle>ID Municipio</TopicModalTitle>
                <TopicModalItem>{`${living.state.id}`}</TopicModalItem>
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
                <TopicModalItem>{`${living.area}`}</TopicModalItem>

                <TopicModalTitle>Capacidad</TopicModalTitle>
                <TopicModalItem>{`${living.capacity}`}</TopicModalItem>

                <TopicModalTitle>Niveles</TopicModalTitle>
                <TopicModalItem>{`${living.levels}`}</TopicModalItem>

                <TopicModalTitle>Baños</TopicModalTitle>
                <TopicModalItem>{`${living.baths}`}</TopicModalItem>
            </GridTwoModal>

            {(living.sale.onSale) && (
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
            )}

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

const living: LivingItemExtended = {
    id: 1,
    address: 'Carrera 15',
    capacity: 5,
    levels: 3,
    baths: 2,
    layer: 3,
    area: 400.2,

    residents: [{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },{
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },],

    state: {
        id: 1,
        name: 'Cucuta',
        area: 109820394.93,
        budget: 1,
    },
    owner: {
        name: 'Paula Guzmán',
        id: 1,
        age: 21,
        phone: 300000000,
        gender: 'Mujer',
        birthday: '22/08/2002',
    },
    sale: {
        idSale: 1,
        idLiving: 1,
        price: 10000000000,
        state: 'en venta',
        publication: '01/08/2023',
        onSale: true,
    },
}