import "./App.css";
import Collapse from "./component/Collapse/collapse.index";

function App() {
  return (
    <div className="mainWrap">
      <div className="buttonWrap">
        <Collapse title="Single Button">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          veniam quisquam laudantium officiis. Inventore assumenda pariatur quo
          in deserunt reprehenderit molestiae nihil ut, magnam illo velit? Quasi
          sequi magni distinctio!
        </Collapse>
      </div>
      <div className="buttonWrap buttonWrap_2">
        <Collapse title="Collapsibe Button-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          veniam quisquam laudantium officiis. Inventore assumenda pariatur quo
          in deserunt reprehenderit molestiae nihil ut, magnam illo velit? Quasi
          sequi magni distinctio!
        </Collapse>
        <Collapse title="Collapsible Button-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          veniam quisquam laudantium officiis. Inventore assumenda pariatur quo
          in deserunt reprehenderit molestiae nihil ut, magnam illo velit? Quasi
          sequi magni distinctio!
        </Collapse>
        <Collapse title="Collapsible Button-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          veniam quisquam laudantium officiis. Inventore assumenda pariatur quo
          in deserunt reprehenderit molestiae nihil ut, magnam illo velit? Quasi
          sequi magni distinctio!
        </Collapse>
        <Collapse title="Collapsible Button-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          veniam quisquam laudantium officiis. Inventore assumenda pariatur quo
          in deserunt reprehenderit molestiae nihil ut, magnam illo velit? Quasi
          sequi magni distinctio!
        </Collapse>
      </div>
    </div>
  );
}

export default App;
