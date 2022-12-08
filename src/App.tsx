import React from "react";
import "./App.css";

const Heading = ({ title }: { title: string }) => <h2>Heading</h2>;

function App() {
  return (
    <div>
      <Heading title='Introduction' />
    </div>
  );
}

export default App;
