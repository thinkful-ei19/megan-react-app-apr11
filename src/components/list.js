import React from 'react';
import './list.css';


export default function List (props){
   const pastEntriesToShow = props.allEntries
    .map((diaryEntry, index)=>
            // <li key={index} id={index}>
            //     Title: {diaryEntry.title}  
            //     -  Date: {diaryEntry.date}  
            //     -  Entry: {diaryEntry.entry}
            // </li>
            //Original code, laid out in a line...
        <ul key={index} id={index}>
            <li>
                <strong>Title:</strong> {diaryEntry.title} 
            </li>
            <li>
                <em>Date:</em> {diaryEntry.date}  
            </li> 
            <ul className="inner ul">
                <li>
                    <em>Entry:</em> 
                    <div className="whitespace-entry">{diaryEntry.entry}</div>
                </li>
            </ul>
        </ul>
    )
   
    return(
            //    <ul>
            //        <h3>Previous Entries:</h3>
            //         {pastEntriesToShow}
            //     </ul>
            //original code ^

                <div>
                   <h3>Previous Entries:</h3>
                    {pastEntriesToShow}
                </div>
    )
}
       
            