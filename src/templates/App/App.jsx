import './styles.css';

import { PostsProvider } from '../../Context/PostsProvider';
import { Posts } from '../../Component/Posts';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
