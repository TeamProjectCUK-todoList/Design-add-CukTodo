import React from "react";
import { signin } from "./service/ApiService";
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");

        console.log("로그인");
        signin({ email: email, password: password });
    }

    render() {
        return (
            <div className="container">
                <div className="grid">
                    <h1 className="title">로그인</h1>
                </div>
                <form noValidate onSubmit={this.handleSubmit} className="form">
                    <div className="grid">
                        <div className="grid-item">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="이메일 주소"
                                className="text-field"
                            />
                        </div>
                        <div className="grid-item">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                placeholder="패스워드"
                                className="text-field"
                            />
                        </div>
                        <div className="grid-item">
                            <button
                                type="submit"
                                className="button primary"
                            >
                                로그인
                            </button>
                        </div>
                        <a href="/signup" className="link">계정이 없습니까? 여기서 가입하세요.</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
