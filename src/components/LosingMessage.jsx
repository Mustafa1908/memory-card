import "../styles/LosingMessage.css";

export default function LosingMessage() {
  return (
    <>
      <dialog>
        <img
          className="losingGif"
          src="https://i.giphy.com/8JL3dO7r5nUkWBKmza.webp"
          alt=""
        />
        <span>You lost better luck next time!</span>
        <button className="closeLose" autoFocus>
          Retry
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
    </>
  );
}
