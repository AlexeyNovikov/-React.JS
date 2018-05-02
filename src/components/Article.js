import React, {Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import CommentList from './CommentList';
import './article.css';

class Article extends Component {
  getBody() {
    const {article, isOpen} = this.props;

    if (!isOpen) return null;

    return (
      <section>
        {article.text}
        <CommentList comments = {article.comments}/>
      </section>
    );
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'закрыть' : 'открыть'}
        </button>
        <CSSTransitionGroup
          transitionName = 'article'
          transitionAppear
          transitionAppearTimeout = {500}
          transitionEnterTimeout = {300}
          transitionLeaveTimeout = {500}
          component = 'div'
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Article;
