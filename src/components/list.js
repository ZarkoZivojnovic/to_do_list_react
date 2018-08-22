import React from "react";
import ListItem from "./listItem"

const List = (props) => {
    this.style = {
        padding: "10px",
        display:"flex",
        flexDirection: "column-reverse"
    };

    let notes = props.list.map(item => {
        console.log(item);
        return (
            <ListItem key={item.key} item={item} list={props.list} deleteNote={props.deleteNote} editNote={props.editNote}/>
        )
    });

    return (
        <div style={this.style}>
            {notes}
        </div>
    )
};

export default List;