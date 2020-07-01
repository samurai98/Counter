import React from 'react';
import './App.css';
import Settings from './components/Settings';
import Counter from './components/Counter';


class App extends React.Component {

    render = () => {

        return (
            <div className='App'>
                <Settings/>
                <Counter/>
            </div>
        );
    }
}

export default App;

