import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
const PostsNew = lazy(() => import('./components/posts_new'));
import PostsShow from './components/posts_show';
import ErrorPage from './components/error_page';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
    	<Suspense fallback={<div className="loader"></div>}>
    		<Switch>
    			<Route path="/" exact component={PostsIndex} />    
    			<Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route render={ErrorPage} />
    		</Switch>
    	</Suspense>
    </HashRouter>
  </Provider>
  , document.querySelector('.container'));
