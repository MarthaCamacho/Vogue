import React from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import '../styles/index.scss'

export const Login = () => {
    const urlBackground = "https://images.pexels.com/photos/6436465/pexels-photo-6436465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    return (
        <div>
            <Header onLogin withoutNav />
            <div className="login" style={{ backgroundImage: `url(${urlBackground})`, backgroundSize: "cover"}}>
                <form className="formLogin"> {/*action="/action_page.php"*/}
                    <span className="formLogin-title">Log in</span>
                    <input className="formLogin-input" type="email" id="fname" name="fname" placeholder="Email" />
                    <input className="formLogin-input" type="password" id="lname" name="lname" placeholder="Password" />
                    <Button label="Send" />
                    <span className="formLogin-textSecond" for="lname">First time here?
                        <Link to="/singIn">sing up</Link>
                    </span>
                </form>
            </div>
        </div>
    );
};
