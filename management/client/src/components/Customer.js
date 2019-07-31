import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {
    render() { 
       return(
            <div>
                <h2>{this.props.id}</h2>
                <p>{this.props.name}</p>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
       );
    }
}
 
export default Customer;