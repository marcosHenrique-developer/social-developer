import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from "./Sidebar.module.css";

export function SideBar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <div className={style.profile}>
        <Avatar src="https://github.com/marcosHenrique-developer.png" />
        <strong>Marcos Henrique</strong>
        <span>Front-End Web Developp</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
