import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import LoginSignup from "./Components/LoginSignup/LoginSignup";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Other routes */}
                <Route path="/signup" element={<LoginSignup />} />
            </Routes>
        </Router>
    );
}

export default App;
