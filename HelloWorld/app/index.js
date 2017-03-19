var React = require('react');
var ReactDOM = require('react-dom');

var Hello1 = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program num. 1!</div>
    )
  }
});

class Hello2 extends React.Component{
	render(){
		return <div>Hello {this.props.firstname + " " + this.props.lastname}</div>;
	}
}

//ReactDOM.render(<Hello1 />, document.getElementById('app'));
ReactDOM.render(<Hello2 firstname="Hermann" lastname="Wagner"/>, 
				document.getElementById('app'));