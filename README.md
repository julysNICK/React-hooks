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

 
