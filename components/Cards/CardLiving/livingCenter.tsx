import { useState } from "react";
import Modal from "../../Modal";
import { toast } from 'react-toastify';
import { ModalTitle, ModalHeader } from "../../Modal/styles";
import { LivingItemExtended } from "../../../interfaces/Living";

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

            <ModalHeader>Características</ModalHeader>

            <ModalHeader>Habitantes</ModalHeader>

            <ModalHeader>Datos de Venta</ModalHeader>
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

    state: {
        id: 1,
        name: 'Cúcuta',
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
    },
}