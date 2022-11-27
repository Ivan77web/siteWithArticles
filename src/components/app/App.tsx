import { CreateArticle } from "../createArticle/CreateArticle";
import cl from "./App.module.css"

function App() {
  return (
    <div className={cl.app}>
      <CreateArticle/>
    </div>
  );
}

export default App;
