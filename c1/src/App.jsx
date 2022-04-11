
import './App.css';
import { useState  } from 'react';
function App() {
  const [score,scoreCount]=useState(76)
  const [wicket,wicketCount]=useState(2)
  const [over,overCount]=useState(8.2)
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
         Score:
          <h1 className="scoreCount">
          {score}
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
          {wicket}
          </h1>
        </div>
   
        <div>
          Over:
          <h1 className="overCount">
            {over }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{
          if(score<100)
          scoreCount(score+1)
        }}>Add 1</button>
        <button className="addScore4" onClick={()=>{
          if(score>100){
            return
          }
          scoreCount(score+4)
        }}>Add 4</button>
        <button className="addScore6" onClick={()=>{
          if (score>100){
          return
          }
          scoreCount(score+6)
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{
       if(score>100){
        return
      }
        if(wicket>=12){
          return
        }
          wicketCount(wicket+1)
        }}
        >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
          if(score>100){
            return
          }
          let new_over=over+0.1
          new_over.toFixed(1)
          overCount(new_over)
       
        }}
        >Add 1</button>
        
      </div>
  
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
     
     }
    </div>
  );
}

export default App;