
import React from 'react';
import {Reviews} from './Reviews'
import { TextArea } from "./TextArea"
import { Button } from "./Button";


export class Page extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        reviews: [],
        comment: '',
        commentId: 0,
      };
    }

    handleAddReview = () => {
      this.setState({
        commentId: this.state.commentId + 1,
        reviews: [
          ...this.state.reviews,
          {id: this.state.commentId, comment: this.state.comment},
        ]
      })
    }

    handleComment = (newComment) => {
      this.setState({
        comment: newComment.target.value,
      })
    }

    handelDeleteReview = (commentId) => {
      const reviews = this.state.reviews.filter(r => r.id !== commentId);
      this.setState({ reviews: reviews})
    }

    render() {
      return (
        <div className="page">
          <div className="flexbox-container">
              <TextArea onChange={(comment) => this.handleComment(comment)}/>
              <Button name='Add' onClick={() => this.handleAddReview()}/>
          </div>
          <div className='reviews'>
            {this.state.reviews.map((review) => <Reviews key={review.id} review={review}
            onDelete={this.handelDeleteReview}
            onChange={this.handleEditReview}/>)}
          </div>
        </div>
      );
    }
  }