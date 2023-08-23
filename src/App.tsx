import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <div className="container row">
        <div className="col">
          <h1>To Do Lists</h1>
          <TodoForm />
          <TodoList />
        </div>
        <div className="col">
          <h1>Posts</h1>
          <PostList />
        </div>
      </div>
    </>
  );
}

export default App;
