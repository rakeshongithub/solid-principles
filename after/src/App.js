import './App.css';
import BlogPost from './components/BlogPost';

const POST_ID = [1,2,3,4]

function App() {
  return (
    <>
    <header>
      <h1>Empowering Experience Engineers with SOLID Principles</h1>
    </header>
    <main className="App main-wrapper">
      
      {
        POST_ID.map(postId => <BlogPost key={postId} postId={postId} />)
      }
    </main>
    <footer>Copyright @2024</footer>
    </>
  );
}

export default App;
