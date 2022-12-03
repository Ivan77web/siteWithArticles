import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../AppRouter";
import { CreateArticle } from "../createArticle/CreateArticle";
import { Navbar } from "../navbar/Navbar";
import cl from "./App.module.css"

function App() {
  return (
    <div className={cl.app}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
