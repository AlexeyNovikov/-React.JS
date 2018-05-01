import React, {Component} from 'react';
import CommentList from './CommentList';

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
        {this.getBody()}
      </div>
    );
  }
}

export default Article;
