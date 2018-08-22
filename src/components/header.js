import React, {Component} from "react";

class Header extends Component{
    constructor(props){
        super(props);

        this.style = {
            background: "silver"
        };

        this.state = {
            newNote: ""
        }
    }

    getNote(event){
        event.preventDefault();
        const newNote = document.querySelector("input[name='note']").value;
        this.setState({newNote});
        this.props.saveNote(newNote);
        event.target.reset();
    }

    formReset(event){
        document.querySelector("input[type='submit']").value = "Add";
        document.querySelector("input[type='submit']").name = "";
    }

    render(){
        return (
            <header style={this.style}>
                <h1>ToDoList</h1>
                <form action="?" method="post" onSubmit={this.getNote.bind(this)} onReset={this.formReset}>
                    <input type="text" name="note" placeholder="type a note"/>
                    <br/>
                    <input type="submit" value="Add" id="submitBtn"/>
                    <input type="reset" value="Reset" id="submitBtn"/>
                </form>
            </header>
        )
    }
}

export default Header;