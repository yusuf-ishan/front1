import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Helmet } from 'react-helmet';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault()
    this.setState({
      num: Math.floor(Math.random() * 10)
    })
  }
  render(){
  <Helmet>
    <link rel="stylesheet" href="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
  </Helmet>
  const quote = ["The only thing we have to fear is fear itself",
"The truth will set you free.","There's no place like home","Three can keep a secret, if two of them are dead.","A rose by any other name would smell as sweet.","All that glitters is not gold.","All the worlds a stage, and all the men and women merely players.","Ask not what your country can do for you; ask what you can do for your country","Eighty percent of success is showing up.","Genius is one percent inspiration and ninety-nine percent perspiration.","Hell is other people."]
  const author = ["Franklin D. Roosevelt","the Bible","Dorothy(Charecter)","Benjamin Franklin","William Shakespeare","William Shakespeare","William Shakespeare","John Kennedy","Woody Allen","Thomas Edison","Jean-Paul Sartre"]
  const colors = ["olive", "Black", "purple","blue","lighBlue","darkRed","lime","darkGreen","maroon","teal","darkCyan","darkSalmon"]
  const quoteGen = quote[this.state.num]
  const authorGen = author[this.state.num]
  const colorGen = colors[this.state.num]
  return (
    <body style={{backgroundColor: colorGen}}>
    <div id="quote-box">
    <div className='quote-text'>
    <FontAwesomeIcon icon={faQuoteLeft} /> 
    <span id='text' style={{color:colorGen}}> {quoteGen} </span>
    </div>
    <div id='quote-author'>
    <span id="author" style={{color:colorGen}}> {authorGen} </span>
    </div>
    <div className='buttons'>
    <button id='new-quote' style={{color: "white", backgroundColor:colorGen}} onClick={this.handleClick}>New Quote</button>
   
    </div>
    <div className='tweet' id='icon'>
      <a id='tweet-quote' href='https://twitter.com/intent/tweet' rel='noreferrer' target='_blank'>
    <FontAwesomeIcon className='icon' style={{color: 'white', backgroundColor: colorGen}} icon={faTwitter}  /> 
    </a>
       </div>
      </div>
    </body>
    
  );
}
}

export default App;
