import "bootstrap/dist/css/bootstrap.min.css";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import defaultFiles from "./utils/defaultFiles";
import BottomBtn from "./components/BottomBtn";
import TabList from "./components/TabList";

function App() {
  return (
    <div className="App container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-3 left-panel">
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
          <div className="row no-gutters">
            <div className="col">
              <BottomBtn
                text="新建"
                colorClass="btn-primary"
                icon={faPlus}
                onBtnClick={() => {
                  console.log("新建");
                }}
              />
            </div>
            <div className="col">
              <BottomBtn
                text="导入"
                colorClass="btn-success"
                icon={faFileImport}
                onBtnClick={() => {
                  console.log("导入");
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-9 right-panel">
          <TabList
            files={defaultFiles}
            activeId="1"
            unsaveIds={["1", "2"]}
            onTabClick={(id) => console.log(id)}
            onCloseTab={(id) => console.log("closing", id)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
