import React, { Component } from 'react';
class Cell extends Component{

    render(){
        return  (
            <div>
                {
                    this.props.integer
                }
            </div>
                )
        }
    }

    export default Cell