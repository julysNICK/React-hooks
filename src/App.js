import './App.css';
import { useState, useEffect } from 'react';
const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // componentDidUpdate - executa toda vez que o component atualiza
  // useEffect(() => {
  // console.log('componentDidUpdate');
  //});
  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);
  // Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1:', count, 'C2:', count2);
  }, [count, count2]);
  return (
    <div className="App">
      <p>Teste 3</p>

      <h1>
        c1:{count} C2:{count2}{' '}
      </h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount2(count2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
