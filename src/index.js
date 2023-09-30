import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Fake comments
//Custom event
function emitComment(id) {
	setInterval(() => {
		//dispatch phạm vi window-> bất cứ component nào chạy cũng sẽ dispatch được
		window.dispatchEvent(
			new CustomEvent(`lesson-${id}`, {
				detail: `The comment of lesson ${id}`,
			})
		);
	}, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
