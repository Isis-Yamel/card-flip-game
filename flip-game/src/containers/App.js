import Header from '../components/header/header';
import React from 'react';
import Main from '../components/main/main';
import '../css/App.scss';

const App = () => {
    return (
    <div className='app__layout'>
        <Header
            // counter= {this.state.counter}
            // restart= {this.handleRestartButton}
        />
        <Main/>
        <footer>
            <p>The true delight is in the finding out rather than in the knowing</p>
        </footer>
    </div>
    );

    }

export default App;
