import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComemnts() {
    return this.props.comments.map((comment, i) => {
      return <li key={i}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComemnts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
