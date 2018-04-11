import React from 'react';
import Form from './form';
import List from './list';
import Header from './header';


export default class Diary extends React.Component {
    constructor(){
        super();
        this.state={
            fullEntry:[]
        }
    }

    addNewEntry = function(newDate, newEntry){
        const entry = {date: newDate, entry: newEntry};
        console.log(...this.state.fullEntry);
        this.setState({fullEntry:[...this.state.fullEntry, entry]})
    }



    render(){
        return(<div>
            <Header />
            <Form addEntry={(date, text)=>{console.log('work'); return this.addNewEntry(date, text)}}/>
            <List allEntries={this.state.fullEntry} state={this.state}/>
        </div>
      )   
    }
}