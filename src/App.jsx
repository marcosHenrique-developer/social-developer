import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import style from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <SideBar />
        <main>
          <p>Post teste App</p>
        </main>
      </div>
    </div>
  );
}
