import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {val: this.props.val};
      }
    handleClickSubtract = () => {
         if(this.state.val > 0) {
            this.setState({
                val: this.state.val - 1
            });
         } 
         else {
             alert("Cannot be less than zero");
         }
    }
    handleClickPlus = () => {
        this.setState({
            val: this.state.val + 1
        });
    }
    render() {
        return (
            <div>
                <h1>Decrement</h1>
                <button id="A"
                    type="submit"
                    onClick={this.handleClickSubtract}>
                -1
                </button>
                <button id="B"
                    type="submit"
                    onClick={this.handleClickPlus}>
                    +1
                    </button>
                <div class = "number">
                    {this.state.val}
                </div>
            </div>
        )
    }
}

Decrement.propTypes ={
    val: PropTypes.number.isRequired
};