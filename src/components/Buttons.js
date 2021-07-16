import { Component } from "react";
import Colors from './Colors'
 
class Button1 extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} class="rounded m-2 px-7 py-2 text-xl text-white border" style={{ backgroundColor: Colors.primary, borderColor: Colors.secondary }}>{this.props.Text}</button>
        );
    }
}
class AddButton extends Component {
    render() {
        return (<button id={this.props.Id} class="rounded mx-6 border border-black text-black text-xl" style={{ opacity: 0.5 }}>+</button>)
    }
}
export {
    Button1,
    AddButton
}