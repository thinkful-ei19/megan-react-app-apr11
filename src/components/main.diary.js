import React from 'react';
import Form from './form';
import List from './list';
import Header from './header';


export default class Diary extends React.Component() {
    constructor(){
        super();
        this.state={
            date:'',
            entry:''
        }
    }



    render(){
        <div>
            <Header />
            <Form />
            <List date="4/8/18" entry="Great day today!"/>
        </div>
            
    }
}