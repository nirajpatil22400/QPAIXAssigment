// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./components/Homepage";
// import FormPage from "./components/FormPage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/form" element={<FormPage />} />
//         <Route path="/form/:id" element={<FormPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import FormPage from "./components/FormPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form/:id?" element={<FormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
