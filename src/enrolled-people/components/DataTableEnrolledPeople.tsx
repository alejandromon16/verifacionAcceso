import { EnrolledPerson } from "@prisma/client"
import React from "react"
import DataTable from "src/core/components/DataTable"


interface Props {
    users: EnrolledPerson[]
}

const EnrolledPeopleTable = ({ users }:Props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Carnet",
        accessor: "carnet",
      }
    ],
    []
  )

  const data = React.useMemo(() => users, [users])

  return (
    <div style={{display:"flex", justifyContent:"center" }}>
        <DataTable columns={columns} data={data} />
    </div>
  )
}

export default EnrolledPeopleTable;
