import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div>
				내용입력: <input type="text" name="" onChange={this.props.changeValue} />
			</div>
		);
	}
}
export default Header;