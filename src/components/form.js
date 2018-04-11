import React from 'react';

export default function Form (){
    return(
              <form>
                <h2>Diary Entry:</h2>
                    Date:
                    <input type="date" />

                    <p>What Happened Today?</p>
                    <textarea rows="20" cols="50" />
                    <p><button type="submit">Submit Entry</button></p>
                </form>
    )
}