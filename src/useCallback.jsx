import P from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementeButton }) {
  console.log('filho rederizou');
  return <button onClick={() => incrementeButton(100)}>+</button>;
});
Button.propTypes = {
  incrementeButton: P.func,
};
function App() {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback((num) => {
    setCount((c) => c + num); //usei o c para nao depende do usestate
  }, []);
  console.log('Pai redenrizou');
  return (
    <div className="App">
      <p>Teste 3</p>

      <h1>c1:{count}</h1>
      <Button incrementeButton={incrementCount} />
    </div>
  );
}

export default App;
