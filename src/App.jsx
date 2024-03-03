import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';

function App() {

      var actors = ['josim','robel','alimgir','raj','nirob'];

      var singers = [
        { id :1 ,name:'sharmin', age:25},
        { id :2,name:'sonali', age:15},
        { id:3,name:'sumaiya', age:20},
        {id:4 ,name:'fahmid', age:75},
      
      ]
  return (
    <>
      <h2>Sharmin Sultana</h2>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Person></Person>
      <Device name = "Mobile" price = "170000"></Device>
      <Device name = "Laptop" price = "170000"></Device>
      <Device name = "camera" price= "60000"></Device>
      <Todo task ="Learn React" isDone={true}></Todo>
      <Todo task ="Explore core concept"isDone={false}></Todo>
      <Todo task ="Try jsx" isDone ={true}></Todo>
      <Actor name="sharmin"></Actor>
      {
        actors.map(actor =><Actor name ={actor}></Actor>)

      }
      
       
    </>
  )
}
function Person(){

  var village = 'kapasia';
  var age = 21;
  var num1 = 23;
  var num2 = 25;
  var person ={name:'sharmin',age:13}
  return(
    <>
    <div className='Student'>
      <h3>i'm from village:{village} age:{age} sum:{num1+num2} newPerson:{person.age}</h3>
    </div>
    </>
  )
}

function Device({name,price}){
  return (
    <>
    <div>
      <h2>This is device:{name} Price:{price}</h2>
    </div>
    </>
  )
}






export default App
