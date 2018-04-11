import React from 'react';

export default function Form (props){
    return(
              <form
                onSubmit={e=> {
                    e.preventDefault();
                    let dateInput = e.target.date.value;
                    let textInput = e.target.entry.value;
                    props.addEntry(dateInput, textInput)
                }}
              >
                <h2>Diary Entry:</h2>
                    Date:
                    <input type="date" name="date" />

                    <p>What Happened Today?</p>
                    <textarea rows="20" cols="50" name="entry" />
                    <p>
                     <button type="submit">
                        Submit Entry
                     </button>
                    </p>
                </form>
    )
}