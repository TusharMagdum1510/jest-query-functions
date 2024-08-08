import "./App.css";
import ColorList from "./components/ColorList";
import LoadableColorList from "./components/FakeFetchColors";

function App() {
  return (
    <>
      <ColorList />
      <LoadableColorList/>
    </>
  );
}

export default App;
