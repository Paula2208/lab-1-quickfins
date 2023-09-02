import { CardModal, ContentModal, DivModal, ModalBase, NameModal, RowModal } from "./styles";
import { faHome, faLocationDot, faPen, faTimes, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { IconClicker } from "../../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ModalProps = {
    children: React.ReactNode,
    hide: () => void,
    handleDelete: () => void,
    handleUpdate: () => void,
    type?: 'STATE' | 'PERSON' | 'LIV',
};

export default function Modal({
    children,
    hide,
    handleDelete,
    handleUpdate,
    type
}: ModalProps) {
    return (
        <ModalBase>
            <CardModal>
                <RowModal>

                    {type && (
                        <NameModal>
                            <FontAwesomeIcon
                                icon={type === 'STATE' ? faLocationDot : (type === 'PERSON' ? faUser : faHome)}
                                size="sm"
                                color="var(--violet)"
                                onClick={hide}
                            />
                            {type === 'STATE' ? 'Municipio' : (type === 'PERSON' ? 'Persona' : 'Vivienda')}
                        </NameModal>
                    )}

                    <DivModal>

                        <IconClicker
                            icon={faTrash}
                            size="lg"
                            color="red"
                            onClick={handleDelete}
                        />

                        <IconClicker
                            icon={faPen}
                            size="lg"
                            color="#9900cc"
                            onClick={handleUpdate}
                        />


                        <IconClicker
                            icon={faTimes}
                            size="xl"
                            color="var(--violet)"
                            onClick={hide}
                        />
                    </DivModal>
                </RowModal>

                <ContentModal>
                    {children}
                </ContentModal>
            </CardModal>
        </ModalBase>
    );
}