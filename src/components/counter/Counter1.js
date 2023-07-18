import { useState } from 'react';

export default function Counter() {
  const [age, setAge] = useState(42);

  function increment() {

    //setAge(age+1)
    //работает только в случае с функцией обновления,выше вариант нерабочий
    setAge(a => a + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}