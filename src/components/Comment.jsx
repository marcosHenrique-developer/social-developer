import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likesCounts, setLikeCounts] = useState(0);
  function handleDelete() {
    onDeleteComment(content);
  }
  function handleLikesCount() {
    setLikeCounts((state) => {
      return state + 1;
    });
  }

  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/marcosHenrique-developer.png"
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Marcos Henrique</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDelete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikesCount}>
            <ThumbsUp />
            Aplaudir <span>{likesCounts}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
