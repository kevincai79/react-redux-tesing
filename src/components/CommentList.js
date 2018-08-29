import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComemnts() {
    if (!this.props.comments) {
      return <div>loading...</div>;
    }

    return this.props.comments.map((comment, i) => {
      return <li key={i}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComemnts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
