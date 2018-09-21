import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

const Editor = props => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default;
    require('brace/mode/javascript');
    require('brace/mode/json');
    require('brace/mode/xml');
    require('brace/theme/monokai');

    return <Ace {...props} />;
  }
  return null;
};

class IsomorphicEditor extends React.Component {
  state = { mounted: false };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render = () => (this.state.mounted ? <Editor {...this.props} /> : null);
}

class App extends Component {
  renderButton() {
    return (
      <button
        onClick={() => {
          let isLoggedIn = this.props.auth ? false : true;

          this.props.changeAuth(isLoggedIn);
        }}
      >
        {this.props.auth ? 'Sign out' : 'Log in'}
      </button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <IsomorphicEditor
          mode="javascript"
          theme="monokai"
          minLines={10}
          tabSize={2}
          maxLines={10}
        />
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
