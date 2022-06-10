// router
import { BrowserRouter as Router } from "react-router-dom";

// theme
import { GlobalStyle } from "../src/theme/globalTheme";

// components
import AnimatedRoutes from "./components/Routes/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
