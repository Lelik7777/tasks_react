import "./App.css";
import Counter1 from "./components/counter/Counter1";
import FeedbackForm from "./components/form/FeedbackForm";
import FeedbackForm2 from "./components/form/FeedbackForm2";
import Form from "./components/form/Form";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Gallery />
      <Form />
      <FeedbackForm />
      <FeedbackForm2 />
      <Counter1/>
    </div>
  );
}

export default App;
