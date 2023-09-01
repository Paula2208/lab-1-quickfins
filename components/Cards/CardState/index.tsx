import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DivideLine, ShowMore } from "../../../pages/styles";
import StateCenter from "./stateCenter";
import { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import StateItem from "../../../interfaces/State";
import { TitleCardWrapper, TitleCardContent } from "../CardPeople/styles";


export default function CardState() {

    const [showComplete, setShowComplete] = useState<boolean>(false);

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <TitleCardWrapper>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            color="white"
                            size="2xl"
                        />
                        <TitleCardContent>
                            <div className="card-title">{state.name}</div>
                            <div className="card-subtitle mb-2 text-body-secondary">{`${state.id}`}</div>
                        </TitleCardContent>
                    </TitleCardWrapper>

                    <DivideLine />

                    <div className="card-text">Área: {`${state.area}`} m²</div>
                    <div className="card-text">Presupuesto: ${`${state.budget}`} COP</div>
                    <ShowMore onClick={() => setShowComplete(true)}>Mostrar Más</ShowMore>
                </div>
            </div>
            {showComplete && <StateCenter hide={() => setShowComplete(false)}/>}
        </>
    );
}

const state: StateItem = {
    id: 1,
    name: 'Cúcuta',
    area: 109820394.93,
    budget: 1223438543,
}