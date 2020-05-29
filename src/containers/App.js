import Header from '../components/header/header';
import React from 'react';
import Main from '../components/main/main';
import '../css/App.scss';

const App = () => {
    return (
    <div className='app__layout'>
        <Header/>
        <Main/>
        <footer className='footer__style'>
            <p>The true delight is in the finding out rather than in the knowing</p>
        </footer>
    </div>
    );

    }

export default App;
