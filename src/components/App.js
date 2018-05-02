import React, {Component} from 'react';
import Select from 'react-select';
import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from './UserForm';
import 'react-select/dist/react-select.css';

class App extends Component {
  state = {
    selection: null
  };

  changeSelection = selection => this.setState({selection});

  render() {
    const {articles} = this.props;
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <div>
        <UserForm />
        <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi />
        <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
        <ArticlesChart articles = {articles} />
      </div>
    );
  }
}

export default App;
