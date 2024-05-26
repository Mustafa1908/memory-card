import "../styles/WinningMessage.css";

export default function WinningMessage() {
  return (
    <>
      <dialog className="dialog">
        <img
          className="winningGif"
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG5sMTd2YXhpdHY1Nm53YjB5eDI0bWN0ZDJoaWdrM25sN2Q5ZG9paCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9pxrEmGb1n1JklkSnG/giphy.gif"
          alt=""
        />
        <span>You win congratulations!</span>
        <button className="closeWin" autoFocus>
          Retry
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
    </>
  );
}
