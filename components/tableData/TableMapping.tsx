import { title } from "@uitis/data/header"
import { tableData } from "@uitis/data/data"
function TableMapping() {
    return (
        <div>
            <table>
                <tr>
                    {title && title?.map(title => <th>{title} <span title={`click once to sort ${title} ascendingly and twice for decendingly`}>i</span></th>)}
                </tr>

                {tableData && tableData?.map(data => {
                    return <tr>
                        <td>{data?.timestamp}</td>
                        <td>{data?.purchase_Id}</td>
                        <td>{data?.mail}</td>
                        <td>{data?.name}</td>
                        <td>{data?.source}</td>
                        <td>{data?.status}</td>
                        <td>{data?.select}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default TableMapping