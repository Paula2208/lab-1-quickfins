import { CardModal, ContentModal, ModalBase } from "./styles";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { IconClicker } from "../../pages/styles";

type ModalProps = {
    children: React.ReactNode,
    hide: () => void,
};

export default function Modal({ children, hide }: ModalProps) {
    return (
        <ModalBase>
            <CardModal>
                <IconClicker
                    icon={faTimes}
                    size="xl"
                    color="var(--violet)"
                    onClick={hide}
                />
                <ContentModal>
                    {children}
                </ContentModal>
            </CardModal>
        </ModalBase>
    );
}