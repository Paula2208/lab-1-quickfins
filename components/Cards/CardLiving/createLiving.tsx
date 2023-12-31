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
import { SelectItem } from "../../../interfaces/Routing";
import { InputCheckbox, RowCenter } from "./styles";

type CreateLivingProps = {
    hide: () => void,
    reload: () => void
};

export const stratum: SelectItem[] = [{
    label: '1',
    value: 1
},
{
    label: '2',
    value: 2
},
{
    label: '3',
    value: 3
},
{
    label: '4',
    value: 4
},
{
    label: '5',
    value: 5
},
{
    label: '6',
    value: 6
}]

export const statusVenta: SelectItem[] = [{
    label: 'Disponible',
    value: 1
},
{
    label: 'Vendida',
    value: 2
},
{
    label: 'Reservada',
    value: 3
}]

export default function CreateLiving({ reload, hide }: CreateLivingProps) {

    const [loading, setLoading] = useState<boolean>(false);

    const [address, setAddress] = useState<string>('');
    const [layer, setLayer] = useState<number>(0);
    const [capacity, setCapacity] = useState<number>(0);
    const [levels, setLevels] = useState<number>(0);
    const [baths, setBaths] = useState<number>(0);
    const [area, setArea] = useState<number>(0);
    const [state, setState] = useState<number>(0);
    const [states, setStates] = useState<StateItem[]>([]);
    const [owner, setOwner] = useState<number>(0);
    const [people, setPeople] = useState<PersonItem[]>([]);
    const [onSale, setOnSale] = useState<boolean>(false);
    const [price, setPrice] = useState<number>(0);
    const [statusSell, setStatusSell] = useState<number>(0);

    const getStatusVivienda = () => {
        switch (statusSell) {
            case 1:
                return 'disponible';
            case 2:
                return 'vendida';
            case 3:
                return 'reservada';
            default:
                break;
        }
    }

    const handleCreate = () => {
        setLoading(true);

        let idVivienda = '';

        fetch(`${process.env.API_URL || ''}/viviendas`, {
            method: 'POST',
            body: JSON.stringify({
                "direccion": address,
                "capacidad": capacity,
                "niveles": levels,
                "baños": baths,
                "estrato": layer,
                "area": area,
                "municipio_id_municipio": state
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {
                return fetch(`${process.env.API_URL || ''}/viviendas`, {
                    method: 'GET'
                })
            })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {

                if (Array.isArray(json)) {
                    for (let index = 0; index < json.length; index++) {
                        if (json[index].direccion === address) {
                            idVivienda = json[index].id_vivienda;
                            break;
                        }
                    }
                }

                return fetch(`${process.env.API_URL || ''}/posee`, {
                    method: 'POST',
                    body: JSON.stringify({
                        "persona_id_cedula": owner,
                        "vivienda_id_vivienda": idVivienda,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            })
            .then((json: any) => {
                if(onSale){
                    return fetch(`${process.env.API_URL || ''}/viviendaEnVenta`, {
                        method: 'POST',
                        body: JSON.stringify({
                            'vivienda_id_vivienda': idVivienda,
                            'persona_id_cedula': owner,
                            'precio': price,
                            'estado': getStatusVivienda(),
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                }

                return fetch(`${process.env.API_URL || ''}/`, {
                    method: 'GET',
                })
            })
            .then((res: any) => {
                toast.success('Vivienda creada!');
                reload();
                hide();
            })
            .catch((err) => {
                console.log('Delete error:', err);
                toast.error('Error creando vivienda.');
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getStates(setStates);
        getPeople(setPeople);
    }, [])

    return (
        <Modal
            hide={hide}
            type="LIV"
        >
            <InputForm
                placeholder="Dirección de la vivienda"
                onChange={(e) => setAddress(e.currentTarget.value)}
                value={address}
            />

            <ModalHeader>Información General</ModalHeader>
            <GridTwoModal rows={2}>

                <TopicModalTitle>Estrato</TopicModalTitle>
                <Selector
                    options={stratum}
                    setSelected={setLayer}
                    selected={layer}
                    placeholder={" "}
                />
                {/*} <InputForm
                    type="number"
                    onChange={(e) => setLayer(parseInt(e.currentTarget.value))}
                    value={layer}
          />*/}

                <TopicModalTitle>Municipio de Colombia *</TopicModalTitle>
                <Selector
                    options={states.map(s => ({ label: s.name, value: s.id }))}
                    setSelected={setState}
                    selected={state}
                    placeholder={" "}
                />
            </GridTwoModal>

            <ModalHeader>Propietario * </ModalHeader>
            <Selector
                options={people.map(s => ({ label: s.name, value: s.id }))}
                setSelected={setOwner}
                selected={owner}
                placeholder={" "}
            />

            <ModalHeader>Características</ModalHeader>
            <GridTwoModal rows={4}>
                <TopicModalTitle>Área (m²)</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setArea(parseInt(e.currentTarget.value))}
                    value={area}
                />

                <TopicModalTitle>Capacidad de Personas</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setCapacity(parseInt(e.currentTarget.value))}
                    value={capacity}
                />

                <TopicModalTitle>Cantidad de Pisos</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setLevels(parseInt(e.currentTarget.value))}
                    value={levels}
                />

                <TopicModalTitle>Cantidad de Baños</TopicModalTitle>
                <InputForm
                    placeholder=" "
                    type="number"
                    onChange={(e) => setBaths(parseInt(e.currentTarget.value))}
                    value={baths}
                />
            </GridTwoModal>

            <ModalHeader>Información de Venta</ModalHeader>
            <RowCenter>
                <TopicModalTitle>¿Está en venta?</TopicModalTitle>
                <RowCenter>
                    <InputCheckbox type="checkbox" onChange={(e) => setOnSale(!onSale)} />
                    <p>Si</p>
                </RowCenter>
            </RowCenter>

            {(onSale) && (
                <GridTwoModal rows={2}>
                    <TopicModalTitle>Precio (COP)</TopicModalTitle>
                    <InputForm
                        placeholder=" "
                        type="number"
                        onChange={(e) => setPrice(parseInt(e.currentTarget.value))}
                        value={price}
                    />

                    <TopicModalTitle>Estado</TopicModalTitle>
                    <Selector
                        options={statusVenta}
                        setSelected={setStatusSell}
                        selected={statusSell}
                        placeholder={" "}
                    />
                </GridTwoModal>
            )}

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