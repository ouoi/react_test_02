import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from '../routes/Home';
import Posts from '../routes/Posts';
import Mypage from '../routes/MyPage';
import NotExist from './NotExist';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Menu />
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/posts" component={Posts} />
						<Route path="/mypage" component={Mypage} />
						<Route component={NotExist} />
					</Switch>
				</div>
			</Router>
		);
	}
}
export default App;