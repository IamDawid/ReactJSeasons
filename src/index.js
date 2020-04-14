import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component {

        //this is the only exception for 'this.state ='
        //e.g this.state = { lat: null, errorMessage: '' };

    state = { lat: null, errorMessage: '' };

    componentDidMount() {  //best place for initial data loading

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),

            //setState needs to be called in order to update the state!

            err => this.setState({ errorMessage: err.message })
        );

    }

    //It is recommended to create a helper function to contain conditionals and then call it inside the render() method

    renderContent() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }


        return <Spinner message="Please accept location request" />

    }
  
    //React requires render to be defined
    render() {

        return (
            <div>
                {this.renderContent()}
            </div>
        );
        
                }

}

ReactDOM.render(
    <App />, document.querySelector('#root')
);