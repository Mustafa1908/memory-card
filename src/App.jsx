import Header from "./components/Header";
import MemoryCards from "./components/MemoryCards";
import LoadingPage from "./components/LoadingPage";
import LosingMessage from "./components/LosingMessage";
import WinningMessage from "./components/WinningMessage";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Header />
      <MemoryCards />
      <LoadingPage />
      <LosingMessage />
      <WinningMessage />
    </>
  );
}

export default App;
