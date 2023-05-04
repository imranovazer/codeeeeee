import React from 'react'

function SuplierTable({newData}) {
  return (
    <>
    <div>SuplierTable</div>

    <table border={1}>
        <thead>
            <th>Id</th>
            <th>Company Name</th>
            <th>City</th>
        </thead>
        <tbody>
            {newData.map(
                e=>
                {
                    return <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.companyName}</td>
                        <td>{e.address.city}</td>
                    </tr>
                }
            )}
        </tbody>
    </table>
    </>
  )
}

export default SuplierTable