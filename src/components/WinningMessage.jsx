import "../styles/WinningMessage.css";

export default function WinningMessage() {
  return (
    <>
      <dialog className="dialog">
        <img
          className="winningGif"
          src="../src/assets/picture/winning.gif"
          alt=""
        />
        <span className="winningText">You win congratulations!</span>
        <button className="closeWin" autoFocus>
          Retry again
        </button>
      </dialog>
    </>
  );
}
