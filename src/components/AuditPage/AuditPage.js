import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuditItem from './AuditItem.js';


const AuditPage = () => {
  const [logs, setLogs] = useState('');
  const [page, setPage] = useState('1');

  useEffect(()=>{
    axios(`http://localhost:4000/api/logs?page=${page}&limit=10`)
    .then(res => setLogs(res.data.data))
    .catch(err => console.error(err));
  },[])
  


  const hehe = () => {
    console.log();
    
  };
  return (
    <div>
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Log Location</th>
                <th>Created At</th>
            </thead>
            <tbody>
            {logs.length > 0 && logs.map(()=>{
                {logs.map((res)=>{
                    <AuditItem
                    key={res.id}
                    name={res.name}
                    contact_number={res.contact_number} 
                    address={res.address}
                    log_location={res.log_location}
                    created_at={res.created_at} />
                })}
            })}
            </tbody>
        </table>

        
    </div>
  )
}

export default AuditPage