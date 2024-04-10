import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import { useState } from "react";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";
import SignIn from "./components/Signin/SignIn";
import Register from "./components/Register/Register";

const app = new Clarifai.App({
  apiKey: "c27f842a12104b1e91ff1f71e1ef85d7",
});

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signin");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFace = (box) => {
    console.log(box);
    setBox(box);
  };

  const onButtonSubmit = () => {
    console.log("clicked");
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, imageUrl)
      .then((response) => displayFace(calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };
  const onRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <div className="App">
      <Navigation />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      ) : route === "signin" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
}

export default App;
