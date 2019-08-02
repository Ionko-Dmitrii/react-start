import React from 'react';
function Country(props){
    return (
        <table  class = "table">
        <tr><td> Country name: {props.data.name}</td>
        <td>Capital: {props.data.capital} </td>
        <td><img  alt = {props.data.name} src={props.data.flag}></img></td>
         <button onclick = {props.deleteCountrie} className = "deleteBtn">Delete</button></tr>
         </table>
    );
}

export default Country;


