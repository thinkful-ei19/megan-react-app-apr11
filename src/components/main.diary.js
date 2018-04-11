import React from 'react';
import Form from './form';
import List from './list';
import Header from './header';
import Count from './count';
import './main.diary.css';
//Mentor: How to take into account the spacing when they type in textarea?
//Mentor: How would I add delete to delete the previous entries?

export default class Diary extends React.Component {
    constructor(){
        super();
        this.state={
            fullEntry:[]
        }
    }

    addNewEntry = function(newTitle, newDate, newEntry){
        const entry = {title: newTitle, date: newDate, entry: newEntry};
        console.log(...this.state.fullEntry);
        this.setState({fullEntry:[...this.state.fullEntry, entry]})
    }



    render(){
        return(<div>
            <Header />
            <Form addEntry={(title, date, text)=>this.addNewEntry(title, date, text)}/>
            <Count count={this.state.fullEntry.length}/>
            <List allEntries={this.state.fullEntry} state={this.state}/>
        </div>
      )   
    }
}