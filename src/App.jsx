import Batsman from './Batsman';
import Counter from './Counter';
import Friends from './Friends';
import './App.css';
import { Suspense } from 'react';

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();


  function handleClick() {
    alert('I am clicked!')
  }
  function handleClicked() {
    alert('I am shaleh!')
  }
  const handleAdd = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  // https://jsonplaceholder.typicode.com/users

  return (
    <>

      <Suspense fallback={<h3>Friends Loading!!</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>


      <Batsman></Batsman>
      <Counter></Counter>
      <h1 style={{ color: 'yellow' }}>I AM SHALEH</h1 >
      <button onClick={handleClicked}>Add Me</button>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={() => handleAdd(10)}>Add Number!</button>

    </>
  )
}

export default App
