/* index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render (<App />, document.getElementById ('root'));

// 앱이 오프라인에서 작동하고 더 빨리로드되도록하려면
// 아래의 unregister()를 register()로 변경 합니다.
serviceWorker.unregister ();
