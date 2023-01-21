import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import { AppContext } from '../App'; 


function Table(props) {
    const {dark} = useContext(AppContext);

    return (  
      <div className="overflow-x-auto my-4 shadow-lg">
        <table className={`table text-black w-full text-sm`}>
        <thead className='bg-inherit'>
          <tr className={` ${dark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <th className='w-1 md:w-auto bg-inherit'>Name</th>
            <th className='bg-inherit'>Price</th>
            <th className='bg-inherit'>24h %</th>
            <th className='bg-inherit'>Market Cap</th>
            <th className='bg-inherit'>24h Volume</th>
            <th className='bg-inherit'>Circulating supply</th>
          </tr>
        </thead>
        <tbody>
          
          {props.rows}
          </tbody>
        </table>
      </div>
    );
}

export default Table;
