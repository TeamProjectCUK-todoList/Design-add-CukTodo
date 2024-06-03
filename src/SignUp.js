import React from "react";
import { signup } from "./service/ApiService";
import './SignUp.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        signup({ email: email, username: username, password: password }).then(
            (response) => {
                window.location.href = "/login";
            }
        );
    }

    render() {
        return (
            <div className="container">
                <form noValidate onSubmit={this.handleSubmit} className="form">
                    <div className="grid">
                        <div className="grid-item">
                            <h1 className="title">계정 생성</h1>
                        </div>
                        <div className="grid-item">
                            <input
                                type="text"
                                name="username"
                                required
                                placeholder="사용자 이름"
                                className="text-field"
                            />
                        </div>
                        <div className="grid-item">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="이메일 주소"
                                className="text-field"
                            />
                        </div>
                        <div className="grid-item">
                            <input
                                type="password"
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
                                계정생성
                            </button>
                        </div>
                        <div className="grid-item">
                            <a href="/login" className="link">이미 계정이 있습니까? 로그인 하세요.</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
