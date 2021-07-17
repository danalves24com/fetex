import { Component } from "react";
import Colors from "./Colors";

class Entry extends Component {
    render() {
        return (
            <input id={this.props.id} class="py-2 px-4 rounded border" style={{ borderColor: Colors.primary }} placeholder={this.props.placeholder}></input>
            );
    }
}

class DropDown extends Component {
    constructor(pass) {
        super(pass);
        console.log(this.props.Items);
    }
    render() {
        return (
            <select id={this.props.id} class="rounded m-2 p-2 ring ring-green-400 focus:ring-green-600 focus:ring-4" style={{ opacity: 1 }}>
                <option value="">--select--</option>
                {(this.props.Items).map((i) => { return <option value={i}>{i}</option> })}
            </select>
            )
    }
}

export {
    Entry,
    DropDown
}