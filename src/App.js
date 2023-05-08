import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CopilotTesting from "./pages/CopilotTesting";
import CopilotForm from "./pages/CopilotForm";
import EmployeeTable from "./pages/EmployeeTable";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import EmployeeAddForm from "./pages/EmployeeAddForm";
import Appointments from "./pages/Appointments";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="app">
                    <Router>
                        <Routes>
                            {/* <Route path="/" element={<CopilotTesting />} /> */}
                            {/* <Route path="/addForm" element={<CopilotForm />} /> */}
                            <Route path="/" element={<EmployeeTable />} />
                            <Route
                                path="/addForm"
                                element={<EmployeeAddForm />}
                            />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route
                                path="/appointments"
                                element={<Appointments />}
                            />
                        </Routes>
                    </Router>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
