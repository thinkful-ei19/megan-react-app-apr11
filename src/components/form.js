import React from 'react';

export default function Form (props){
    return(
              <form>
                <h2>Diary Entry:</h2>
                    Date:
                    <input type="date" 
                         onSubmit={e=> {
                            e.preventDefault();
                            props.addDateToState(e.target.value)
                        }
                       }
                    />

                    <p>What Happened Today?</p>
                    <textarea rows="20" cols="50" 
                        onSubmit={e=> {
                            e.preventDefault();
                            props.addEntryToState(e.target.value)
                        }
                       }
                    />
                    <p>
                     <button type="submit">
                        Submit Entry
                     </button>
                    </p>
                </form>
    )
}