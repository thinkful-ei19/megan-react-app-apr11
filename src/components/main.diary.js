import React from 'react';
import Form from './form';
import List from './list';
import Header from './header';


export default function Diary () {
    return(
        <body>
            <Header />
            <main>
                <Form />
                <List />
            </main>
        </body>
    )
}