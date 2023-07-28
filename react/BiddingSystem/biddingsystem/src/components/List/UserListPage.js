import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { data } from './Datatest';


const UserListPage = ({ query}) => {



  //Basic searchbar
  const filterdata = data.filter((item) => { 
        if(query === ' ')
        {
          return item
        }else{
          return  item.text.toLowerCase().includes(query)
        }
      } )
      

  return (
    <div>
          <ul>
             {
              filterdata.map((item) => {
                 return (
                  <div>
                  <li key={item.id}>{item.text}</li>
                  </div>
                  )
              })
             }
             </ul>

    </div>
  )
}

export default UserListPage