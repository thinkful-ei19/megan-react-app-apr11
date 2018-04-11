import React from 'react';
import Form from './form';
import List from './list';
import Header from './header';


export default class Diary extends React.Component {
    constructor(){
        super();
        this.state={
            fullEntry:[
                {date:'4/8/10', entry:'hi'},
                {date:'4/9/10', entry:'hello'}
            ]
        }
    }

    // addDateToState = function(newDate){
    //     this.setState({...this.state.fullEntry.date, newDate})
    // }

    // addEntryToState = function(newEntry){
    //     this.setState({...this.state.fullEntry.entry, newEntry})
    // }

    addNewEntry = function(newEntry, newDate){
        const entry = {date: newDate, entry: newEntry};
        return this.setState({...this.state.fullEntry, entry})
    }



    render(){
        return(<div>
            <Header />
            <Form />
            <List allEntries={this.state.fullEntry}/>
        </div>
      )   
    }
}