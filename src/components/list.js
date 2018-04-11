import React from 'react';

export default function List (props){
    return(
               <ul>
                   <h3>Previous Entries:</h3>
                    <li>
                        Date: {props.date}  -  Entry: {props.entry}
                    </li>
                </ul>
    )
}