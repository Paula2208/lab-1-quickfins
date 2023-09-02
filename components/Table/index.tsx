import { TableItem } from "../../interfaces/Routing";
import { DivideLineDark } from "../../styles/styles";
import { TableWrapper } from "./styles";

type TableProps = {
    headers: string[];
    items: TableItem[];
}

export default function Table({ headers, items }: TableProps) {
    return (
        <TableWrapper>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        {headers.map((h) => (
                            <th scope="col" key={h}>{h}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {items.map((h) => (
                        <tr key={h.id}>
                            <th scope="row">{h.id}</th>
                            {h.labels.map((l) => (
                                <td key={l}>{l}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableWrapper>
    );
}