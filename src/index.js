import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {


    constructor(props) {
        super(props);

        //this is the only exception for 'this.state ='
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //setState needs to be called in order to update the state!
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );

    }

    //React requires render to be defined
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        
        return <div>Loading...</div>
        

        }

    
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);