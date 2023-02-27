import React from "react"
import { Row, Cell } from "react-table"


type Props = {
  getTableBodyProps: any,
  rows: Row[],
  prepareRow: (row: Row) => void,
}

const TableBody = ({ getTableBodyProps, rows, prepareRow }: Props) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr key={i}{...row.getRowProps()}>
            {row.cells.map((cell: Cell,i:number) => (
              <td key={i} {...cell.getCellProps()}>
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
