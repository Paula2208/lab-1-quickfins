import { useState } from "react";
import Modal from "../../Modal";
import { GridTwoModal, ModalHeader, ModalTitle, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import { toast } from 'react-toastify';
import StateItem, { StateItemExtended, mockStateExtended } from "../../../interfaces/State";
import Table from "../../Table";
import people from "../../../pages/people";
import { InputForm, ButtonAct } from "../../../styles/styles";
import Selector from "../../Selector";
import PersonItem from "../../../interfaces/People";

type StateCenterProps = {
    hide: () => void,
    stateBasic: StateItem,
};

export default function StateCenter({ hide, stateBasic }: StateCenterProps) {

    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [state, setState] = useState<StateItemExtended>({ ...mockStateExtended });
    const [loading, setLoading] = useState<boolean>(false);

    const [address, setAddress] = useState<string>(stateBasic.name);
    const [capacity, setCapacity] = useState<number>(stateBasic.area);
    const [levels, setLevels] = useState<number>(stateBasic.budget);
    const [people, setPeople] = useState<PersonItem[]>([]);
    const [owner, setOwner] = useState<number>(0);

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
            body: JSON.stringify({
                "nombre": address,
                "area": capacity,
                "presupuesto": levels,
                "idMunicipio": stateBasic.id,
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
            {isUpdate ? (
                <>
                    <ModalHeader>Departamento *</ModalHeader>
                    {/*<Selector
                options={department.map()}
                setSelected={setDepartment}
                selected={owner}
                placeholder={" "}
    /> */}

                    <ModalHeader>Información General</ModalHeader>
                    <GridTwoModal rows={2}>


                        <TopicModalTitle>Nombre</TopicModalTitle>
                        <InputForm
                            placeholder="Nombre del municipio"
                            onChange={(e) => setAddress(e.currentTarget.value)}
                            value={address}
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
                    <ModalTitle>{stateBasic.name}</ModalTitle>

                    <ModalHeader>Información General</ModalHeader>
                    <GridTwoModal rows={3}>
                        <TopicModalTitle>ID</TopicModalTitle>
                        <TopicModalItem>{`${stateBasic.id}`}</TopicModalItem>

                        <TopicModalTitle>Área (m²)</TopicModalTitle>
                        <TopicModalItem>{`${(stateBasic.area || '').toLocaleString()} m²`}</TopicModalItem>

                        <TopicModalTitle>Presupuesto (COP)</TopicModalTitle>
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
                </>
            )}
        </Modal>
    );
}