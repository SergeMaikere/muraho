import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header.jsx';
import Products from './components/products/products.jsx';


function App() {
	return (
		<div className="App">
			<Header></Header>
			<Products></Products>
		</div>
	);
}

export default App;
