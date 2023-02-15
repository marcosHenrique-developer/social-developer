import style from "./Header.module.css";
import ImgLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={ImgLogo} alt="" />
      <strong>Feed</strong>
    </header>
  );
}
