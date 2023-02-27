import React, { useState } from "react"
import { FilterProps } from "./types"

import styles from "./DataTable.module.css"

const NumberRangeFilter = ({ column }: FilterProps) => {
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")

  const onChangeMin = (e) => {
    const value = e.target.value
    setMin(value)
    column.setFilter((prevFilter) => ({
      ...prevFilter,
      value: {
        ...prevFilter?.value,
        min: value !== "" ? parseFloat(value) : undefined,
      },
    }))
  }

  const onChangeMax = (e) => {
    const value = e.target.value
    setMax(value)
    column.setFilter((prevFilter) => ({
      ...prevFilter,
      value: {
        ...prevFilter?.value,
        max: value !== "" ? parseFloat(value) : undefined,
      },
    }))
  }

  const clearFilter = () => {
    setMin("")
    setMax("")
    column.setFilter(undefined)
  }

  return (
    <div className={styles.numberRangeFilter}>
      <input
        type="number"
        placeholder={`Min (${column.Header})`}
        value={min}
        onChange={onChangeMin}
      />
      <input
        type="number"
        placeholder={`Max (${column.Header})`}
        value={max}
        onChange={onChangeMax}
      />
      <button onClick={clearFilter}>Clear</button>
    </div>
  )
}

export default NumberRangeFilter
