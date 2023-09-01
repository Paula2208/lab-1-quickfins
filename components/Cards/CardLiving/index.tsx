import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DivideLine, ShowMore } from "../../../pages/styles";
import { useState } from "react";
import { TitleCardWrapper, TitleCardContent } from "../CardPeople/styles";
import LivingItem from "../../../interfaces/Living";
import LivingCenter from "./livingCenter";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function CardLiving() {

    const [showComplete, setShowComplete] = useState<boolean>(false);

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <TitleCardWrapper>
                        <FontAwesomeIcon
                            icon={faHome}
                            color="white"
                            size="2xl"
                        />
                        <TitleCardContent>
                            <div className="card-title">{living.address}</div>
                            <div className="card-subtitle mb-2 text-body-secondary">{`${living.id}`}</div>
                        </TitleCardContent>
                    </TitleCardWrapper>

                    <DivideLine />

                    <div className="card-text">Área: {`${living.area}`}m²</div>
                    <div className="card-text">Estrato: {`${living.layer}`}</div>
                    <ShowMore onClick={() => setShowComplete(true)}>Mostrar Más</ShowMore>
                </div>
            </div>
            {showComplete && <LivingCenter hide={() => setShowComplete(false)}/>}
        </>
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