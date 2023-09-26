import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonItem from "../../../interfaces/People";
import { TitleCardWrapper, TitleCardContent } from "./styles";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { DivideLine, ShowMore } from "../../../styles/styles";
import PeopleCenter from "./peopleCenter";
import { useState } from "react";
import { calcularEdad } from "../../../helpers/birthday";

export default function CardPeople({ person }: { person: PersonItem }) {

    const [showComplete, setShowComplete] = useState<boolean>(false);

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <TitleCardWrapper>
                        <FontAwesomeIcon
                            icon={faUser}
                            color="white"
                            size="2xl"
                        />
                        <TitleCardContent>
                            <div className="card-title">{person.name}</div>
                            <div className="card-subtitle mb-2 text-body-secondary">{`C.C.: ${person.id}`}</div>
                        </TitleCardContent>
                    </TitleCardWrapper>

                    <DivideLine />

                    <div className="card-text">Edad: {`${calcularEdad(person.birthday)}`}</div>
                    <div className="card-text">Teléfono: {`${person.phone}`}</div>
                    <ShowMore onClick={() => setShowComplete(true)}>Mostrar Más</ShowMore>
                </div>
            </div>
            {showComplete && <PeopleCenter hide={() => setShowComplete(false)}  personBasic={person}/>}
        </>
    );
}