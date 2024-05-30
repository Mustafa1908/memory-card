import "../styles/LosingMessage.css";

export default function LosingMessage() {
  return (
    <>
      <dialog>
        <img className="losingGif" src="../assets/picture/losing.gif" alt="" />
        <span className="losingText">You lost better luck next time</span>
        <button className="closeLose" autoFocus>
          Retry one more time
        </button>
      </dialog>
    </>
  );
}
