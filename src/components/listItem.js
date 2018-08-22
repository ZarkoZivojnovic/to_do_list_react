import React from "react";

const ListItem = (props) => {
    this.style = {
        margin: "3px",
        borderBottom: "solid 1px black",
        textAlign: "center",
    };

    this.editString = props.item.key + "_edit";
    this.delString =  props.item.key + "_del";

    return (
        <div style={this.style}>
            <div className="note_item">
                {props.item.note}
            </div>
            <div id="buttons">
                <button onClick={props.deleteNote} id={this.delString} className="deleteBtn">Delete</button>
                <button onClick={props.editNote} id={this.editString} className="editBtn">Edit</button>
            </div>
        </div>
    )
};

export default ListItem;