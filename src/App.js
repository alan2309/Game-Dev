import Game from "./screens/game/Game";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Market from "./screens/market/Market";
import Start from "./screens/game/Start";
import { Row, Col } from "react-bootstrap";
import {
  // Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Ice from "./screens/icecream/Ice.js";
import Fruits from "./screens/Fruits";
import Grocery from "./screens/Grocery";

function App() {
  let routes = [
    {
      route: "/start",
      component: <Start />,
    },
    {
      route: "/shop",
      component: <Market />,
    },
    {
      route: "/shop/veggie",
      component: <Game />,
    },
    {
      route: "/shop/fruits",
      component: <Fruits />,
    },
    {
      route: "/shop/grocery",
      component: <Grocery />,
    },
    {
      route: "/shop/icecream",
      component: <Ice />,
    },
  ];
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, key) => (
            <Route
              path={route.route}
              exact
              key={key}
              element={
                <DndProvider backend={HTML5Backend}>
                  {route.component}
                </DndProvider>
              }
            />
          ))}
          {/* do not change */}
          <Route
            path="*"
            element={
              <Row style={{ margin: "20px 0 0 0" }}>
                <Col style={{ padding: "10px 90px" }}>
                  <>
                    <h1>404 not found</h1>
                  </>
                </Col>
              </Row>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
