import { useEffect, useState } from "react";
import Modal from "../../Modal";
import { toast } from 'react-toastify';
import { ModalTitle, ModalHeader, GridTwoModal, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import LivingItem, { LivingItemExtended, SaleItem, mockLivingExtended, mockSaleItem } from "../../../interfaces/Living";
import Table from "../../Table";
import { layer } from "@fortawesome/fontawesome-svg-core";
import states from "../../../pages/states";
import { InputForm, ButtonAct } from "../../../styles/styles";
import Selector from "../../Selector";
import StateItem from "../../../interfaces/State";
import { getStates } from "../../../helpers/state";
import { stratum } from "./createLiving";
import PersonItem from "../../../interfaces/People";
import { getPeople } from "../../../helpers/people";

type LivingCenterProps = {
    hide: () => void,
    livingBasic: LivingItem,
};

export default function LivingCenter({ hide, livingBasic }: LivingCenterProps) {

    const [loading, setLoading] = useState<boolean>(false);

    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [living, setLiving] = useState<LivingItemExtended>({ ...mockLivingExtended });
    const [saleLiving, setSaleLiving] = useState<SaleItem>({ ...mockSaleItem });
    const [address, setAddress] = useState<string>(livingBasic.address);
    const [layer, setLayer] = useState<number>(livingBasic.layer);
    const [capacity, setCapacity] = useState<number>(livingBasic.capacity);
    const [levels, setLevels] = useState<number>(livingBasic.levels);
    const [baths, setBaths] = useState<number>(livingBasic.baths);
    const [area, setArea] = useState<number>(livingBasic.area);
    const [state, setState] = useState<number>(livingBasic.stateID);
    const [states, setStates] = useState<StateItem[]>([]);
    const [owner, setOwner] = useState<number>(0);
    const [people, setPeople] = useState<PersonItem[]>([]);
    const [onSale, setOnSale] = useState<boolean>(false);

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

    const handleGetDetails = () => {
        fetch(`${process.env.API_URL || ''}/viviendas/${livingBasic.id || ''}`, {
            method: 'GET',
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {

                const result = json[0];
                setLiving({
                    ...livingBasic,
                    state: {
                        id: result.id_municipio || '',
                        name: result.municipio || '',
                        area: 0,
                        budget: 0,
                    },
                    owner: {
                        name: result.nombre_propietario || '',
                        id: result.id_propietario || '',
                        age: 18,
                        phone: 0,
                        gender: '',
                        birthday: '',
                    },
                    sale: {
                        idSale: 0,
                        idLiving: result.id_vivienda || '',
                        price: 0,
                        state: result.id_municipio || '',
                        publication: '',
                        onSale: false,
                    },
                    residents: [],
                })
            })
            .catch((err) => {
                console.log('Get error:', err);
                toast.error('Error leyendo vivienda.');
            });
    }

    const handleGetEnVenta = () => {
        fetch(`${process.env.API_URL || ''}/viviendaEnVenta`, {
            method: 'GET',
        })
            .then((res: any) => {
                return res.json();
            })
            .then((json: any) => {
                const result = json;
                let idVenta: any;

                if (Array.isArray(result) && result.length > 0) {
                    idVenta = result.find((v) => v.vivienda_id_vivienda === livingBasic.id);
                }

                if (idVenta) {
                    setSaleLiving({
                        idSale: idVenta.id_venta,
                        idLiving: idVenta.vivienda_id_vivienda,
                        price: idVenta.precio,
                        state: idVenta.estado,
                        publication: idVenta.fechaPublicacion,
                        onSale: true,
                    });
                }
            })
            .catch((err) => {
                console.log('Get error:', err);
                toast.error('Error leyendo vivienda.');
            });
    }

    const handleUpdate = () => {
        setIsUpdate(!isUpdate);
    }

    const saveUpdate = () => {
        fetch(`${process.env.API_URL || ''}/viviendas/${livingBasic.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "direccion": address,
                "capacidad": capacity,
                "niveles": levels,
                "baños": baths,
                "estrato": layer,
                "area": area,
                "municipio_id_municipio": state,
                "vivienda_id_vivienda": livingBasic.id,
            }),
            headers: {
                "Content-Type": "application/json",
            },
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

    useEffect(() => {
        getStates(setStates);
        getPeople(setPeople);
        handleGetDetails();
        handleGetEnVenta();
    }, [])


    return (
        <Modal
            hide={hide}
            type="LIV"
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
        >
            {isUpdate ? (
                <>
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

                        <TopicModalTitle>Municipio de Colombia *</TopicModalTitle>
                        <Selector
                            options={states.map(s => ({ label: s.name, value: s.id }))}
                            setSelected={setState}
                            selected={state}
                            placeholder={" "}
                        />
                    </GridTwoModal>


                    {/* <ModalHeader>Propietario *</ModalHeader>
                    <Selector
                        options={people.map(s => ({ label: s.name, value: s.id }))}
                        setSelected={setOwner}
                        selected={owner}
                        placeholder={" "}
                    /> */}

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

                    <ButtonAct onClick={saveUpdate}>
                        {!loading ? 'Save' : (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                    </ButtonAct>
                </>
            ) : (
                <>
                    <ModalTitle>{livingBasic.address}</ModalTitle>

                    <ModalHeader>Información General</ModalHeader>
                    <GridTwoModal rows={4}>
                        <TopicModalTitle>ID</TopicModalTitle>
                        <TopicModalItem>{`${livingBasic.id}`}</TopicModalItem>

                        <TopicModalTitle>Estrato</TopicModalTitle>
                        <TopicModalItem>{`${livingBasic.layer}`}</TopicModalItem>

                        <TopicModalTitle>Municipio de Colombia</TopicModalTitle>
                        <TopicModalItem>{`${living.state.name}`}</TopicModalItem>

                        <TopicModalTitle>ID Municipio</TopicModalTitle>
                        <TopicModalItem>{`${livingBasic.stateID}`}</TopicModalItem>
                    </GridTwoModal>

                    <ModalHeader>Propietario</ModalHeader>
                    <GridTwoModal rows={2}>
                        <TopicModalTitle>ID Propietario</TopicModalTitle>
                        <TopicModalItem>{`${living.owner.id}`}</TopicModalItem>

                        <TopicModalTitle>Nombre</TopicModalTitle>
                        <TopicModalItem>{`${living.owner.name}`}</TopicModalItem>
                    </GridTwoModal>

                    <ModalHeader>Características</ModalHeader>
                    <GridTwoModal rows={4}>
                        <TopicModalTitle>Área (m²)</TopicModalTitle>
                        <TopicModalItem>{`${(livingBasic.area || '').toLocaleString()}`}</TopicModalItem>

                        <TopicModalTitle>Capacidad de Personas</TopicModalTitle>
                        <TopicModalItem>{`${livingBasic.capacity}`}</TopicModalItem>

                        <TopicModalTitle>Cantidad de Pisos</TopicModalTitle>
                        <TopicModalItem>{`${livingBasic.levels}`}</TopicModalItem>

                        <TopicModalTitle>Cantidad de Baños</TopicModalTitle>
                        <TopicModalItem>{`${livingBasic.baths}`}</TopicModalItem>
                    </GridTwoModal>

                    {(saleLiving.onSale) && (
                        <ModalHeader>Información de Venta</ModalHeader>
                    )}

                    {(saleLiving.onSale) && (
                        <GridTwoModal rows={4}>
                            <TopicModalTitle>ID Venta</TopicModalTitle>
                            <TopicModalItem>{`${saleLiving.idSale}`}</TopicModalItem>

                            <TopicModalTitle>Precio</TopicModalTitle>
                            <TopicModalItem>{`${(saleLiving.price || 0).toLocaleString()} COP`}</TopicModalItem>

                            <TopicModalTitle>Estado</TopicModalTitle>
                            <TopicModalItem>{`${saleLiving.state}`}</TopicModalItem>

                            {/* <TopicModalTitle>Fecha de Publicación</TopicModalTitle>
                            <TopicModalItem>{`${saleLiving.publication}`}</TopicModalItem> */}
                        </GridTwoModal>
                    )}

                    {/* <ModalHeader>Residentes</ModalHeader>
                    <Table
                        headers={['Nombre', 'Teléfono']}
                        items={living.residents.map((l) => ({
                            id: `${l.id}`,
                            labels: [l.name, `${l.phone}`]
                        }))}
                    /> */}
                </>)}

        </Modal>
    );
}