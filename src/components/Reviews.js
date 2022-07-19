import React from 'react';
import {TextArea} from './TextArea';
import {Button} from './Button'




export class Reviews extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            value: this.props.review.comment
        }
    }

    handleComment  = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render () {

        return (
            <div className='flexbox-container'>
            <TextArea onChange={(e) => {this.handleComment(e)}} value={this.state.value}/>
            <div>
                <Button name='Delete' onClick={() => this.props.onDelete(this.props.review.id)}/>
            </div>
        </div>
        )
    }
}