import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Cricketers from './Cricketers';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>BOOK DETAILS</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>YOUR NAME</th>
            <th>BOOK NAME</th>
            <th>BOOK CODE</th>
          </tr>

        </thead>
        <tbody>
          {
            Cricketers.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}

