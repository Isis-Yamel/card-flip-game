import GameRecord from '../components/main/gameRecord';
import Header from '../components/header/header';
import React from 'react';
import Main from '../components/main/main';
import '../css/App.scss';
import '../css/main.scss';
import '../css/footer.scss';

const App = () => {
    return (
    <div className='app__layout'>
        <Header/>
        <main className='main__layout'>
            <Main/>
            <GameRecord/>
        </main>
        <footer className='footer footer__style'>
            <p>The true delight is in the finding out rather than in the knowing</p>
        </footer>
    </div>
    );

    }

export default App;
