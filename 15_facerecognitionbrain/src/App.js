import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import { useState } from "react";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: 'c27f842a12104b1e91ff1f71e1ef85d7'
 });

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
  };
  const onButtonSubmit = () => {
    console.log("clicked");
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
        console.log(response);
      },
      function (err) {
        //error
      }
    );
  };
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition />
    </div>
  );
}

export default App;
