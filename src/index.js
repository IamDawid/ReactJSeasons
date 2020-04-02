import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {


    constructor(props) {
        super(props);

        //this is the only exception for 'this.state ='
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //setState needs to be called in order to update the state!
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );

    }

    //React requires render to be defined
    render() {
       
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);