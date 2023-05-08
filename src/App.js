import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CopilotTesting from "./pages/CopilotTesting";
import CopilotForm from "./pages/CopilotForm";
import EmployeeTable from "./pages/EmployeeTable";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import EmployeeAddForm from "./pages/EmployeeAddForm";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    {/* <Route path="/" element={<CopilotTesting />} /> */}
                    {/* <Route path="/addForm" element={<CopilotForm />} /> */}
                    <Route path="/" element={<EmployeeTable />} />
                    <Route path="/addForm" element={<EmployeeAddForm />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
