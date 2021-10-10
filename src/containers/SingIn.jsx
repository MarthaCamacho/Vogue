import React from 'react';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import '../styles/index.scss'

export const SingIn = () => {
    const urlBackground = "https://images.pexels.com/photos/6070408/pexels-photo-6070408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    return (
        <div>
            <Header onLogin withoutNav />
            <div className="login " style={{ backgroundImage: `url(${urlBackground})`, backgroundSize: "cover" }}>

                <form className="formLogin"> {/*action="/action_page.php"*/}
                    <span className="formLogin-title">Sing In</span>
            
                        <input className="formLogin-input " type="text" id="fname" name="fname" placeholder="Name" />
                        <input className="formLogin-input " type="text" id="lname" name="lname" placeholder="Lastname" />
                        <input className="formLogin-input " type="email" id="fname" name="fname" placeholder="Email" />
                        <input className="formLogin-input" type="text" id="lname" name="lname" placeholder="Password" />
                  
                    <Button label="Send" />
                </form>
            </div>
        </div>
    );
};