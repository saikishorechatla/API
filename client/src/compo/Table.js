import React, { useState } from 'react'
import {CSVLink} from 'react-csv'
import {DataTable} from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css";
export default function Table(props) {
  const [filters,setFilter]=useState({
    global:{value:null,matchMode:FilterMatchMode.CONTAINS},
  })
  return(

   <React.Fragment>
    <CSVLink data={props.data} className="btn btn-primary">Export Data</CSVLink>
     <div className='data_container'>
<InputText onInput={(e)=>{
   setFilter({
      global:{value :e.target.value ,matchMode: FilterMatchMode.CONTAINS}
   })
}
}/>
<br/>
 <center>
 <DataTable value={props.data}   className='data_table' filters={filters}  paginator rows={100} rowsPerPageOptions={[200,300]} totalRecords={props.data}>
  <Column field="s_no" header="S_No" sortable > </Column>
  <Column field="Name_of_Faculty" header="Name" sortable> </Column>
  <Column field="campus" header="Campus" sortable> </Column>
  <Column field="certification_code" header="Code" > </Column>
  <Column field="certifying_agency" header="Angency"> </Column>
  <Column field="department" header="Department" sortable> </Column>
  <Column field="faculty_emp_iD" header="ID" sortable> </Column>
  <Column field="gender" header="Gender"sortable> </Column>
  <Column field="provide_link" header="provide_Link"> </Column>
  <Column field="remarks" header="Remarks"> </Column>
  <Column field="title_of_certification" header="Title"> </Column>
</DataTable>
</center>
    </div>

   </React.Fragment>
  )
}
