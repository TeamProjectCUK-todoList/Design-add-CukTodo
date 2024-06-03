import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import './App.css';
import { call, signout } from './service/ApiService';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
        };
    }

    add = (item) => {
        call("/todo", "POST", item).then((response) =>
            this.setState({ items: response.data })
        );
    }

    delete = (item) => {
        call("/todo", "DELETE", item).then((response) =>
            this.setState({ items: response.data })
        );
    }

    update = (item) => {
        call("/todo", "PUT", item).then((response) =>
            this.setState({ items: response.data })
        );
    }

    componentDidMount() {
        call("/todo", "GET", null).then((response) =>
            this.setState({ items: response.data, loading: false })
        );
    }

    render() {
        const todoItems = this.state.items.length > 0 && (
            <ul>
                {this.state.items.map((item, idx) => (
                    <Todo item={item} key={item.id} delete={this.delete} update={this.update} />
                ))}
            </ul>
        );

        const todoListPage = (
            <div className="container">
                <div className="todo-app">
                    <h2>오늘의 할일</h2>
                    <AddTodo add={this.add} />
                    <div className="todo-list">{todoItems}</div>
                </div>
            </div>
        );

        const loadingPage = <h1>로딩중...</h1>;
        const content = this.state.loading ? loadingPage : todoListPage;

        return <div className="App">{content}</div>;
    }
}

export default App;
