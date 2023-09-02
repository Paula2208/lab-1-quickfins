import { SelectItem } from "../../interfaces/Routing";

type SelectorProps = {
    options: SelectItem[];
    setSelected: (data: number) => void;
    selected: number;
    placeholder: string
}

export default function Selector({ options, setSelected, selected, placeholder }: SelectorProps) {

    return (
        <select
            className="form-select" 
            aria-label="Default select example"
            onChange={(e) => setSelected(parseInt(e.target.value))}
        >
            <option selected>{placeholder}</option>
            {options.map((o) => (
                <option value={o.value} key={o.value}>{o.label}</option>
            ))}
        </select>
    );
}