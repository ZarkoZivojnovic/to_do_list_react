import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from "../src/components/header";
import List from "../src/components/list";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listObj: JSON.parse(localStorage.getItem("list")) !== null ? JSON.parse(localStorage.getItem("list")) : [],
        };
    }

    addNewNote = (note) => {
        let submitBtn=document.querySelector("input[type='submit']");
        let arr = localStorage.getItem("list") !== null ? JSON.parse(localStorage.getItem("list")) : [],
            newNote = {
                key:new Date().getTime(),
                note:note
            };
        if (submitBtn.name !== undefined && submitBtn.name !== ""){
            let id = submitBtn.name,
                index = this.searchForIndex(this.state.listObj, id);
            arr.splice(index, 1);
            submitBtn.value = "Add";
            submitBtn.name = "";
        }
        arr.push(newNote);
        localStorage.setItem("list", JSON.stringify(arr));
        this.setState({listObj:arr})
    };

    deleteNote = (event) => {
        event.stopPropagation();
        let id= event.target.id.split("_")[0],
            obj = localStorage.getItem("list") !== null ? JSON.parse(localStorage.getItem("list")) : [],
            index = this.searchForIndex(obj, id);
        obj.splice(index,1);
        this.setState({listObj:obj});
        localStorage.setItem("list", JSON.stringify(obj));
    };

    editNote = (event) => {
        event.stopPropagation();
        let id= event.target.id.split("_")[0],
            obj = localStorage.getItem("list") !== null ? JSON.parse(localStorage.getItem("list")) : [],
            index = this.searchForIndex(obj, id);

        document.querySelector("input[name='note']").value = obj[index].note;
        document.querySelector("input[type='submit']").value = "Update";
        document.querySelector("input[type='submit']").name = id;
    };

    searchForIndex = (obj, id) => {
        let index;
        for (let i in obj){
            if (obj[i].key === parseInt(id)){
                index = i;
            }
        }
        return index;
    };

    render() {
        return (
            <div>
                <Header saveNote={note => this.addNewNote(note)}/>
                <List list={this.state.listObj} deleteNote={this.deleteNote.bind(this)} editNote={this.editNote.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));