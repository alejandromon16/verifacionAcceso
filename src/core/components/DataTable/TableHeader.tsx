import React from "react"
import { useFilters, useSortBy, ColumnInstance } from "react-table"
import { FiArrowUp, FiArrowDown } from "react-icons/fi"

import NumberRangeFilter from "./NumberRangeFilter"
import SelectFilter from "./SelectFilter"
import { FilterProps } from "./types"
import styles from "./DataTable.module.css"

type Props = {
  headerGroups: any[],
}

const TableHeader = ({ headerGroups }: Props) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: ColumnInstance<any>) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}
              <span>
                {column.isSorted
                  ? column.isSortedDesc
                    ? <FiArrowDown className={styles.arrowIcon} />
                    : <FiArrowUp className={styles.arrowIcon} />
                  : <FiArrowDown className={styles.arrowIcon} />}
              </span>
              {column.canFilter && <div>{column.render("Filter")}</div>}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}

export default TableHeader
