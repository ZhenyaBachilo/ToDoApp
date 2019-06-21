
import React from "react";
import '../styles/App.css';
import Categories from '../containers/Categories';
import ToDos from '../containers/ToDos';


class App extends React.Component {
    render() {
        return (
            <div className="mainApp">
                <Categories/>
                <ToDos/>
            </div>
                  
        );
    }
}
export default App;