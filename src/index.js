import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './component/hello_world';

class App extends Component {
	render() {
		return(
			<div>
			<HelloWorld />
			</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector('.container'));
