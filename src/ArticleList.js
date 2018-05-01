import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component {
  state = {
    openArticleId: null
  }

  toggleOpenArticle = openArticleId => () => { // карирование!!!
    this.setState({openArticleId});
  }

  render() {
    const articleElems = this.props.articles.map((article) => <li key = {article.id}>
      <Article
        article = {article}
        isOpen = {article.id === this.state.openArticleId}
        toggleOpen = {this.toggleOpenArticle(article.id)}
      />
    </li>);

    return (
      <ul>
        {articleElems}
      </ul>
    );
  }
}

export default ArticleList;
