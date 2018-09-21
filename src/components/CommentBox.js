import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from 'components/requireAuth';
import sizeMe from 'react-sizeme';

import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment, () => {
      this.props.history.push('/');
    });

    this.setState({ comment: '' });
  };

  handleFetchComments = () => {
    this.props.fetchComments(() => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handleChange.bind(this)}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.handleFetchComments}>
          Fetch Comment
        </button>
      </div>
    );
  }
}

export default sizeMe()(connect(null, actions)(requireAuth(CommentBox)));
