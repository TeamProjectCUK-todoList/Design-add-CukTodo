import React from "react";
import './AddTodo.css';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "" } };
        this.add = props.add;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({ item: { title: "" } });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <div className="row">
                <input
                    type="text"
                    placeholder="Add Todo here"
                    value={this.state.item.title}
                    onChange={this.onInputChange}
                    onKeyPress={this.enterKeyEventHandler}
                />
                <button onClick={this.onButtonClick}>+</button>
            </div>
        );
    }
}

export default AddTodo;
