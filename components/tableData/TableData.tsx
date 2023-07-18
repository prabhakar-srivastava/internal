"use client"

import { useState } from "react"
import TableMapping from "./TableMapping"

function TableData() {
    const [sortable, setSortable] = useState<boolean>(false)
    return (
        <div>
            <TableMapping />
        </div>
    )
}

export default TableData