import LivingItem from "../../../interfaces/Living";
import Modal from "../../Modal";

type LivingCenterProps = {
    hide: () => void,
};


export default function LivingCenter({ hide }: LivingCenterProps) {
    return (
        <Modal hide={hide}>
            Content
        </Modal>
    );
}

const living: LivingItem = {
    id: 1,
    address: 'Carrera 15',
    capacity: 5,
    levels: 3,
    baths: 2,
    layer: 3,
    area: 400.2,
}