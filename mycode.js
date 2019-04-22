'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.style = {height:200 };
    this.state = { count: 0 };
  }

  render() {
    if (this.state.count > 10) {
      return 'You liked this.';
    }

    return e(
          'button',
      { onClick: () => this.setState({ count: this.state.count +1 }) },
      this.state.count
    );
  }
}

const domContainer = document.querySelector('#root');
const domContainer2 = document.querySelector('#root2');

ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(e(LikeButton), domContainer2);
