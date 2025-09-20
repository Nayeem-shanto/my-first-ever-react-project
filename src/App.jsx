
import './App.css'
import './Fifa'
import Fifa from './Fifa'
import Actor from './Actor';
import Singer from './Singer';

/* eta hocche main component jeta react project create kora hole automatically add hoy.
react component er nam er first letter always capital hobe. 
component always kisu return korbe and sheta hocche jsx.


*/
function App() { //etai hocche main components.

  const actors =['Shakib Khan', "Manna", "Arefin Shuvo", "Siam Ahmed"];

  const singer=[
    {
    name:  'Tahsan Khan',
    viralSong : 'Alo Alo'
  }
  ]
  return (
    <> 
      <h1>My first ever react project</h1>
      {
        singer.map(singer1 => <Singer singer={singer1.name} viralSong={singer1.viralSong}></Singer>)
      }
      {
        actors.map(actor => <Actor nayok={actor}></Actor>)
      }
      <Student name="Allen-Blake" id="111"></Student>
      <Fifa tName="Brazil" bestPlayer="Pele" marketValue="30000000USD" ></Fifa>
      <Fifa tName="Argentina" bestPlayer="Diago Maradona" marketValue="20000000USD"></Fifa>
      <Fifa tName="Portugal" bestPlayer="Cristiano Ronaldo" marketValue="17000000USD"></Fifa>
      <Player name="Branden Macculam" runs="6000" ></Player>
      <Player name="Virat Koholi" runs= "5000" ></Player>
      <Player name="Tamim Iqbal Khan" runs="4500"></Player>
      
      <Student name="David-Smith" id="222"></Student>
      <Student name="Carlos-Don" id="333"></Student>
      <Student ></Student>
      <Teacher></Teacher>
      {/* <Person></Person> */}
    </>
  )
}

/* const player={
  name: "Branden Macculam"
  runs: 6000
} */
function Player ({name="Not added", runs=0}){
  return (
    <div className='student'>
      <p>Player's Name: {name} </p>
      <p>Runs: {runs} </p>
    </div>
  )
}


/* lets create a component */

function Person(){
  const name= "Nayeem Hasan Shanto"
const thingsIOwn ={
  bike: "I have a bike",
  car: "I have a car also"
}
  return(
    <>
    <h1>My name is : {name} </h1>
    <h2>I am learning web Development</h2>
    <p>{thingsIOwn.bike}</p>
    <p>{thingsIOwn.car}</p>
    </>
  )
}

/* components er moddhe style add korbo... */
/* option-1: main css file e style likhe shetake class name diye component er moddhe use kora.
  option-2: ekta object create kore .
*/
function Student(porps){
  console.log(porps);
  const option2 ={
    color: "yellow",
    border: "2px solid blue",
    margin: "30px"
  }
  return(
  <div className='student'> {/* option-1 */}
    <div style={option2}> {/* object create kore style */}
      <h2>Name: {porps.name}</h2>
    <h2>ID: {porps.id} </h2>
    </div>
  </div>
  )
}


function Teacher(){
  return(
    <h1 style={{ /* ekhane style directly dynamic vabe dewa hoice */
      color:"green",
      border:"2px solid red",
      padding: "5px"
    }}>Teacher Name: </h1>
  )
}

export default App
