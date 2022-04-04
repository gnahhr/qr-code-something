import React from 'react'

const AuditItem = (props) => {

  return (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.contact_number}</td>
        <td>{props.address}</td>
        <td>{props.log_location}</td>
        <td>{props.created_at}</td>
    </tr>
  )
}

export default AuditItem