import "./App.css";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <h1>Hello World!</h1>
        </Alert>
      )}
      <Button
        onClick={() => setAlertVisible(!alertVisible)}
        color={"secondary"}
      >
        {alertVisible ? "Hide Alert" : "Show Alert"}
      </Button>
    </>
  );
}

export default App;
