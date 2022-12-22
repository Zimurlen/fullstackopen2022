// import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} correct?
      </p>
    </div>
  )
}

function App() {
  console.log('Hello from the component!')
  const now = new Date()
  const numA = 10
  const numB = 20
  const name = 'Peter'
  const age = 25

  return (
    <>
      <header className="App-header">
        <Hello name='George' age={14} />
        <Hello name='Daisy' age={26+8} />
        <Hello name={name} age={age} />
        <p>
          It is {now.toString()}
        </p>
        <p>
          {numA} and {numB} sum together as {numA+numB}
        </p>
      </header>
    </>
  );
}

export default App;
