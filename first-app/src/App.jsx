import Patient from "./components/Patient";
import Department from "./components/Department";
import Doctor from "./components/Doctor";

const App = () => {
  return (
    <>
      <Patient name="Karen" age="33">
        <Department department="x-ray" />

        <Doctor doctor="Dr Jekyll" nurse="Nurse Ratched" />
      </Patient>
    </>
  );
};
export default App;
