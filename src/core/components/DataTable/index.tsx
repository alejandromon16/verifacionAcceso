import React from "react"
import { useTable } from "react-table"
import styles from "../../styles/DataTable.module.css"


const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <div className={styles.tableContainer}>
        <table className={styles.table} {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                <th className={styles.th} {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell) => (
                    <td className={styles.td} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>
  )
}

export default Table
