import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import style from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    "Post muito bacana, hein?!",
    "Muito bom Devon, parabéns!! 👏👏",
  ]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCrateNewComment(e) {
    e.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }
  function handleNewComment(e) {
    e.target.setCustomValidity("");
    setNewComment(e.target.value);
  }
  function handleInvalidComment(e) {
    e.target.setCustomValidity("Esse campo é obrigaório!");
  }
  function deleteComment(commentToRemove) {
    const newListWithNewComments = comments.filter((comment) => {
      return comment !== commentToRemove;
    });

    setComments(newListWithNewComments);
  }

  const isCommentEmpty = newComment.length === 0;

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCrateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewComment}
          placeholder="Deixe um comentário"
          onInvalid={handleInvalidComment}
          required
        />

        <footer>
          <button disabled={isCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
