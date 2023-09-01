import PersonItem from "../../../interfaces/People";
import Modal from "../../Modal";

type PeopleCenterProps = {
    hide: () => void,
};


export default function PeopleCenter({ hide }: PeopleCenterProps) {
    return (
        <Modal hide={hide}>
            Content
        </Modal>
    );
}

const person: PersonItem = {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
}