## Examples:
```` JS
//useState
const [reverse, setReverse] = useState(false);
  const [count, setcount] = useState(0);

  const reverseClass = reverse ? 'reverse' : ' ';
  const handleclick = () => {
    setReverse(!reverse);
  };
  const handleCount = () => {
    setcount((prevState) => prevState + 1);
  };
````

```` JS
//useMemo
{useMemo(() => {
        posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          });
      })}
````

```` JS
//useCallback
 const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

````
```` JS
//useReduce
const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('chamou inverte', action.payload);
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('nunhuma action encotrada');
  return { ...state };
};
 

````

