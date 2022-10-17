"use strict";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return <button onClick={() => setLiked(true)}>
  Liker
  </button>;
}

document.querySelectorAll(".like-button-root").forEach((rootNode) => {
  console.log(rootNode.dataset.commentid);
  const root = ReactDOM.createRoot(rootNode);
  const commentID = parseInt(rootNode.dataset.commentid, 10);
  root.render(
    React.createElement(LikeButton, {
      commentID: commentID,
    })
  );
});
