import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    // TODO call action
    this.setState({ comment: '' });
  };

  render() {
    return (
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
    );
  }
}

export default CommentBox;
