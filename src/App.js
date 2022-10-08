import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/CRUDwithMongoDB" element={<UserList />} />
          <Route path="/CRUDwithMongoDB/add" element={<AddUser />} />
          <Route path="/CRUDwithMongoDB/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
