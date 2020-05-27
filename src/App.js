// https://bonappetit-kw.firebaseapp.com

// Redux involves files:
// App.js                               as provider from store
// src>components>UsersContainer.js     to map
// src>redux>user>userActions.js        to axios 
//                userReducer.js
//                userTypes.js
// src>redux>index.js
//           rootReducer.js
//           store.js


import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Home from './components/Home'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Choices from './components/Choices'
import Options from './components/Options'
import UsersContainer from './components/UsersContainer'


function App () {
  return (
    

      <div className='App'>

      <Router>

      <div>

        <nav>
            
          <Link to="/home">Home</Link> .....
          <Link to="/one">One</Link> .....
          <Link to="/two">Two</Link> .....
          <Link to="/three">Three</Link> .....
          <Link to="/four">Four</Link> .....
          <Link to="/five">Five</Link> .....
          <Link to="/choices">Recipes</Link> .....
          <Link to="/options">Apples</Link> .....
          <Link to="/userscontainer">Redux</Link> .....
          <Link to="/six">Easy</Link>
       
        </nav>
   
        <Switch>

          <Route exact path="/home"> 
            <Home />
          </Route>
          <Route path="/one"> 
            <One />
          </Route>
          <Route path="/two"> 
            <Two />
          </Route>
          <Route path="/three"> 
            <Three />
          </Route>
          <Route path="/four"> 
            <Four />
          </Route>
          <Route path="/five"> 
            <Five />
          </Route>
          <Route path="/choices"> 
            <Choices />
          </Route>
          <Route path="/options"> 
            <Options />
          </Route>

          <Route path="/userscontainer"> 
           <Provider store={store}>
            <UsersContainer />
           </Provider>  
           </Route>

           <Route path="/six"> 
            <Six />
           </Route>

        </Switch>

      </div>

    </Router>
        
      </div>

    
  )
}

export default App














// Original React
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


