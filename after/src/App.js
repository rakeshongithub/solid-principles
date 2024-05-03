import './App.css';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <main className="App">
      <BlogPost postId={1} />
      <BlogPost postId={2} />
    </main>
  );
}

export default App;
