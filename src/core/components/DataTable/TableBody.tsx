import React from "react"
import { Row, Cell } from "react-table"

import { GetTableBodyProps } from "./types"

type Props = {
  getTableBodyProps: GetTableBodyProps,
  rows: Row[],
  prepareRow: (row: Row) => void,
}

const TableBody = ({ getTableBodyProps, rows, prepareRow }: Props) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell: Cell) => (
              <td {...cell.getCellProps()}>
                {cell.render("Cell")}
              </td>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
