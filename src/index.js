import React from 'react'
import ReactDOM from 'react-dom'

//Components
import Header from './components/header'

// var app = function(){}

const App = () => {
    return (
    <div>
        <Header/>
        <h1>Hello world</h1>
    </div>
    
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));