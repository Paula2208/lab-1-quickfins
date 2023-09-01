import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputIcon, InputStyled } from "./styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type SearchBarProps = {
    search: string;
    setSearch: (data: string) => void;
    by: string;
}

export default function SearchBar({search, setSearch, by} : SearchBarProps) {

    return (
        <InputIcon>
            <InputStyled 
                type="text" 
                placeholder={`Busca por ${by}`} 
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
            />
            <FontAwesomeIcon 
                icon={faSearch}
                size="lg"
                color="var(--violet)"
            />
        </InputIcon>
    );
}