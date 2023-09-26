import Modal from "../../Modal";
import { toast } from 'react-toastify';
import { GridTwoModal, ModalHeader, ModalTitle, TopicModalItem, TopicModalTitle } from "../../Modal/styles";
import { useEffect, useState } from "react";
import PersonItem, { PersonItemExtended, mockPersonExtended } from "../../../interfaces/People";
import Table from "../../Table";
import { getExtendsPerson } from "../../../helpers/people";
import { InputForm, ButtonAct } from "../../../styles/styles";

type PeopleCenterProps = {
    hide: () => void,
    personBasic: PersonItem,
};

export default function PeopleCenter({ hide, personBasic }: PeopleCenterProps) {

    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [person, setPerson] = useState<PersonItemExtended>({ ...mockPersonExtended });

    const [loading, setLoading] = useState<boolean>(false);

    const [address, setAddress] = useState<string>(personBasic.name);
    const [capacity, setCapacity] = useState<number>(personBasic.age);
    const [levels, setLevels] = useState<number>(personBasic.phone);
    const [baths, setBaths] = useState<string>(personBasic.gender);
    const [owner, setOwner] = useState<number>(0);

    const handleDelete = () => {
        fetch(`${process.env.API_URL || ''}/personas/${personBasic.id}`, {
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
        fetch(`${process.env.API_URL || ''}/personas/${personBasic.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "idPersona": personBasic.id,
                "nombre": address,
                "edad": capacity,
                "telefono": levels,
                "sexo": baths,
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
                toast.success('Persona actualizada');
                hide();
            })
            .catch((err) => {
                console.log('Update error:', err);
                toast.error('Error editando persona.');
            });
    }

    useEffect(() => {
        getExtendsPerson(setPerson, personBasic);
    }, [])

    return (
        <Modal
            hide={hide}
            type="PERSON"
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
        >
            {isUpdate ? (
                <>
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
                    <ModalTitle>{personBasic.name}</ModalTitle>

                    <ModalHeader>Información General</ModalHeader>
                    <GridTwoModal rows={5}>
                        <TopicModalTitle>Cédula</TopicModalTitle>
                        <TopicModalItem>{`${personBasic.id}`}</TopicModalItem>

                        <TopicModalTitle>Edad</TopicModalTitle>
                        <TopicModalItem>{`${personBasic.age}`}</TopicModalItem>

                        <TopicModalTitle>Sexo</TopicModalTitle>
                        <TopicModalItem>{personBasic.gender}</TopicModalItem>

                        <TopicModalTitle>Teléfono</TopicModalTitle>
                        <TopicModalItem>{`${personBasic.phone}`}</TopicModalItem>

                        <TopicModalTitle>Fecha de Nacimiento</TopicModalTitle>
                        <TopicModalItem>{`${personBasic.birthday}`}</TopicModalItem>
                    </GridTwoModal>

                    <ModalHeader>Residencia</ModalHeader>
                    <GridTwoModal rows={3}>
                        <TopicModalTitle>Dirección</TopicModalTitle>
                        <TopicModalItem>{person.residence.living.address}</TopicModalItem>

                        <TopicModalTitle>ID Vivienda</TopicModalTitle>
                        <TopicModalItem>{`${person.residence.living.id}`}</TopicModalItem>

                        <TopicModalTitle>Estrato</TopicModalTitle>
                        <TopicModalItem>{`${person.residence.living.layer}`}</TopicModalItem>

                        <TopicModalTitle>Municipio</TopicModalTitle>
                        <TopicModalItem>{person.residence.state.name}</TopicModalItem>

                        <TopicModalTitle>ID Municipio</TopicModalTitle>
                        <TopicModalItem>{`${person.residence.state.id}`}</TopicModalItem>
                    </GridTwoModal>

                    <ModalHeader>Patrimonio</ModalHeader>
                    <Table
                        headers={['Dirección', 'Área']}
                        items={person.heritage.map((l) => ({
                            id: `${l.id}`,
                            labels: [l.address, `${(l.area || '').toLocaleString()} m²`]
                        }))}
                    />

                    <ModalHeader>Dependientes</ModalHeader>
                    <Table
                        headers={['Nombre', 'Teléfono']}
                        items={person.dependents.map((l) => ({
                            id: `${l.id}`,
                            labels: [l.name, `${l.phone}`]
                        }))}
                    />
                </>
            )}


        </Modal>
    );
}