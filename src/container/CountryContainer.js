import React, {Component} from 'react';
import Country from '../Component/Country.js';
import './CountryContainer.css';

class CountryContainer extends Component {
    state = {
        data: []
        
    }
    componentWillMount = () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then (response => response.json())
        .then(body => this.setState({data: body}))
        .catch(err => console.log(err));
    }

deleteCountrie = (index) => {
    let countries = this.state.data;
    countries.splice(index,1);
    this.setState({data: countries});
}

    render() {
        return(
            <ul className = "country-list">
             {this.state.data.map((item, index) => <Country key={index} deleteCountrie={() => this.deleteCountrie() } data={item}/>)}
              </ul>
            
        );
    }
}

export default CountryContainer;
   