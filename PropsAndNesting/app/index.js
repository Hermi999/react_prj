var USER_DATA = {
	name: "Hermann Wagner",
	username: "Hermi999",
	image: "https://i0.wp.com/leanstartupsecurity.com/wp-content/uploads/2016/08/contact_profilbild-150x150.jpg"
};

var React = require('react');
var ReactDOM = require('react-dom');


class ProfilePic extends React.Component{
	render(){
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
}

class ProfileLink extends React.Component{
	render(){
		return (
			<div>
				<a href={"https://www.github.com/" + this.props.username}>
					{this.props.username}
				</a>
			</div>
		)
	}
}

class ProfileName extends React.Component{
	render(){
		return(
			<div>{this.props.name}</div>
		)
	}
}

class Avatar extends React.Component{
	render(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
}

ReactDOM.render(<Avatar user={USER_DATA}/>, 
				document.getElementById('app'));