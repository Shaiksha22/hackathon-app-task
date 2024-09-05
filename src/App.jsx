import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import ErrorLayout from "./components/ErrorLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ChallengeInformation from './components/ChallengeInformation'
import Error from "./pages/Error";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router basename="/hackathon-app">
      <ErrorLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/hackathon" />} />
          <Route path="/hackathon" element={<Home />} />
          <Route path="/hackathon/admin" element={<Admin />} />
          <Route path="/hackathon/details/:id" element={<ChallengeInformation />} />
          <Route path="/hackathon/*" element={<Error />} />
        </Routes>
      </ErrorLayout>
    </Router>
  );
};

export default App;
