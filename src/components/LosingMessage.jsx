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
        <span className="losingText">You lost better luck next time</span>
        <button className="closeLose" autoFocus>
          Retry one more time
        </button>
      </dialog>
    </>
  );
}
