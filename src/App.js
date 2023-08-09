import "./App.css";
import ClassComp from "./component/ClassComp";
import FunA from "./component/FunA";
import FunB from "./component/FunB";
import Form from './component/Form';
import Header from "./component/Header";
function App() {
  return (
    <>
      <div className="App">
        {/* <FunA firstName={"Good"} lastName={"mk"} /> */}
        {/* <FunB /> */}
        {/* <ClassComp charData={[{name: "Charlie",job: "Janitor"},{name: "Mac",job: "Bouncer"}]}/> */}
        {/* <Form /> */}
        <Header />
      </div>
    </>
  );
}

export default App;
