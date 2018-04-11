import React from 'react';

export default function List (props){
    return(
               <ul>
                    <li>
                        Date: {props.date}  -  Entry: {props.entry}
                    </li>
                </ul>
    )
}