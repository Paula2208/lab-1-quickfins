import StateItem from "../../../interfaces/State";
import Modal from "../../Modal";

type StateCenterProps = {
    hide: () => void,
};


export default function StateCenter({ hide }: StateCenterProps) {
    return (
        <Modal hide={hide}>
            Content
        </Modal>
    );
}

const state: StateItem = {
    id: 1,
    name: 'Cúcuta',
    area: 109820394.93,
    budget: 1,
}