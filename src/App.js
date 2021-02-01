import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import defaultFiles from "./utils/defaultFiles";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col left-panel">
          <FileSearch
            onFileSearch={(value) => {
              console.log(value);
            }}
          />
          <FileList
            files={defaultFiles}
            onFileClick={(id) => {
              console.log(id);
            }}
            onFileDelete={(id) => {
              console.log("deleting", id);
            }}
            onSaveEdit={(id, title) => {
              console.log(id, title);
            }}
          />
        </div>
        <div className="col bg-primary right-panel">
          <h3>right</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
