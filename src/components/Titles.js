import React, {Component} from 'react';

class Titles extends Component {
    render() {
        return (
            <div>
                <h1 className="title-container__title">Weather Forecast</h1>
                <h3 className="title-container__subtitle">Find out temperature conditons and more..</h3>                
            </div>
        );
    }
}

export default Titles;