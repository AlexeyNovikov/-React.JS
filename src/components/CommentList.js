import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
	getBody() {
		const {isOpen, comments} = this.props;

    if (!isOpen) return null;
    if (!comments || !comments.length) return <p>No comments yet</p>;

    return (
      <ul>
        {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
      </ul>
    );
  }

  render() {
		const {isOpen, toggleOpen} = this.props;
    const text = isOpen ? 'hide comments' : 'show comments';

    return (
      <div>
        <button onClick = {toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    );
  }
}

CommentList.propTypes = {
	data: PropTypes.array
};

CommentList.defaultProps = {
	data: []
};

export default toggleOpen(CommentList);
