
import React from "react";
import '../styles/App.css';
import Categories from '../containers/Categories';
import ToDos from '../containers/ToDos';
import Footer from '../containers/Footer';
import Header from '../containers/Header';


class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <div className='mainBody'>
                    <Categories />
                    <ToDos />
                </div>
                <Footer />
            </div>

        );
    }
}
export default App;