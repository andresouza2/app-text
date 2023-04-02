import { EditorText } from "./EditorText";

export const App = () => {
  return (
    <div className="App">
      <div
        style={{
          width: "600px",
          height: "200px",
        }}
      >
        <EditorText />
      </div>
    </div>
  );
};
