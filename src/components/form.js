import React from 'react';

export default function Form (props){
    return(
              <form
                onSubmit={e=> {
                    e.preventDefault();
                    let titleInput = e.target.title.value;
                    let dateInput = e.target.date.value;
                    let textInput = e.target.entry.value;
                    props.addEntry(titleInput, dateInput, textInput)
                    e.target.date.value= '';
                    e.target.entry.value= '';
                    e.target.title.value= '';

                }}
              >
                <h2>Diary Entry:</h2>
                    Title:
                    <input type="text" name="title" />
                    
                    <p>
                        Date:
                        <input type="date" name="date" />
                    </p>

                    <p>
                        What Happened Today? 
                        <br />
                        <textarea rows="20" cols="50" name="entry" />
                    </p>
                    <p>
                     <button type="submit">
                        Submit Entry
                     </button>
                    </p>
                </form>
    )
}