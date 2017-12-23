import { h, Component } from 'preact'
import { Router, route} from 'preact-router'
import { auth, defaultDatabase } from '../firebase'

import Home from './pages/home';
import Layout from './tags/layout';
import Article from './pages/article';
import Error404 from './pages/errors/404';
import Blog from './pages/blog';

const onChange = obj => window.ga && ga.send('pageview', { dp:obj.url });


export default class App extends Component {
	constructor(props){
			super(props)
			this.state = {
				user: null,
				updateMainState: this.updateMainState.bind(this),
			}
	}
	updateMainState(object_to_set){
			this.setState(object_to_set)
	}
	render() {
		return (
			<Layout>
				<Router onChange={ onChange }>
					<Home path="/" {...this.state} />
					<Blog path="/blog" {...this.state} />
					<Article path="/blog/:title" {...this.state} />
					<Error404 default {...this.state} />
				</Router>
			</Layout>
		)
  }
}
