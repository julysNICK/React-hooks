import { PostsProvider } from '../../Context/PostsProvider';
import { Posts } from '../../Component/Posts';
import { CounterProvider } from '../../Context/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
