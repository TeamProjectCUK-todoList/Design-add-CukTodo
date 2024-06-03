import React from "react";
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true };
        this.delete = props.delete;
        this.update = props.update;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    offReadOnlyMode = () => {
        this.setState({ readOnly: false }, () => {
            console.log("ReadOnly?", this.state.readOnly)
        });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.setState({ readOnly: true });
            this.update(this.state.item);
        }
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
    }

    checkboxEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({ readOnly: true });
        this.update(this.state.item);
    }

    render() {
        const item = this.state.item;
        return (
            <li className={item.done ? 'checked' : ''}>
                <input
                    //type="checked"

                    checked={item.done}
                    onChange={this.checkboxEventHandler}
                />
                <input
                    type="text"
                    value={item.title}
                    readOnly={this.state.readOnly}
                    onClick={this.offReadOnlyMode}
                    onChange={this.editEventHandler}
                    onKeyPress={this.enterKeyEventHandler}
                />
                <span onClick={this.deleteEventHandler}>×</span>
            </li>
        );
    }
}

export default Todo;
