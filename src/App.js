import "./App.css";
import LabReports from "./components/labReports";
import NavigationBar from "./components/NavigationBar.js";

function App() {
  return (
    <div className="App">
      <NavigationBar />;
      <LabReports />
    </div>
  );
}

export default App;
