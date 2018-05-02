import React from 'react';

export default Component => class Accordion extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    openItemId: props.defaultOpenId
  }
}

  toggleOpenItem = openItemId => () => { // карирование!!!
    this.setState({
      openItemId: openItemId === this.state.openItemId ? null : openItemId
    });
  }

  render() {
    return <Component {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId} />
  }
}
