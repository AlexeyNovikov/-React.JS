import React, {Component} from 'react';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getBody() {
    if (!this.state.isOpen) return null;

    return <section>{this.props.article.text}</section>;
  }

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {this.toggleOpen}>
          {isOpen ? 'закрыть' : 'открыть'}
        </button>
        {this.getBody()}
      </div>
    );
  }
}
