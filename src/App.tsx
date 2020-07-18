import React, { FC } from 'react';
import './styles/App.scss';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main_page/MainPage';
import NavBar from './components/navbar/NavBar';

const App: FC = () => {
    return (
        <div className={'app'}>
            <header>
                <NavBar />
            </header>
            <main>
                <Switch>
                    <Route exact path={'/'} component={MainPage} />
                </Switch>
            </main>
        </div>
    );
};

export default App;
