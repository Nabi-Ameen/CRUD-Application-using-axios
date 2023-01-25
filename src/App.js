// import AxiosComponent from "./AxiosComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCRUD from "./CRUDComponents/MainCRUD";


function App() {
  return (
    <div className="container">
      <h3 className="text-center py-4 ">CRUD Application using axios</h3>
      <MainCRUD/>
    </div>
  );
}

export default App;
