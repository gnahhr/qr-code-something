import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuditItem from './AuditItem.js';
import './AuditPage.css';


const AuditPage = () => {
  const [logs, setLogs] = useState('');
  const [page, setPage] = useState('3');

  useEffect(()=>{
    axios(`https://4000-talyho-hackathonthree-g3f96dd6iu1.ws-us38.gitpod.io/api/logs?page=${page}&limit=10`)
    .then(res => setLogs(res.data.data))
    .catch(err => console.error(err));
  },[])
  


  const hehe = () => {
    console.log();
    
  };
  return (
    <div className="audit-table">
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
            {logs.length > 0 && logs.map((res)=>
                    <AuditItem
                    key={res.id}
                    id={res.id}
                    name={res.name}
                    contact_number={res.contact_number} 
                    address={res.address}
                    log_location={res.log_location}
                    created_at={res.created_at} />
            )}
            </tbody>
        </table>

        
    </div>
  )
}

export default AuditPage