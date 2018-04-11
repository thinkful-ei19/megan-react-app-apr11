import React from 'react';

export default function List (props){
   const pastEntriesToShow = props.allEntries
    .map((diaryEntry, index)=>
            <li key={index} id={index}>
                Date: {diaryEntry.date}  -  Entry: {diaryEntry.entry}
            </li>
    )
   
    return(
               <ul>
                   <h3>Previous Entries:</h3>
                    {pastEntriesToShow}
                </ul>
    )
}