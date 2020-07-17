import React from 'react';
import './App.css';
import {Header} from "../components/Header"
import {PhoneInput} from "../components/PhoneInput";

function App() {
    return (
        <div className="App">
            <Header/>
            <PhoneInput mask={'999-999-99-99'}
                        searchArray={[9528262065, 9528262064, 9528262063, 9528262062, 9528262061]}
                        callbackFunc={(e: any) => {
                            console.log(`${e}`)
                        }
                        }/>
        </div>
    );
}

export default App;
