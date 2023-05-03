import Game from "./screens/game/Game";
import Task from "./screens/game/Task";
import { useState } from "react";
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

import Level from "./screens/game/Levels";

import Fruits from "./screens/Fruits";
import Grocery from "./screens/Grocery";
import levelData from "./levelData.json";
import Final from "./screens/Final";

function App() {
  const [question, setQuestion] = useState(0);
  const [level, setLevel] = useState(0);

  const nextQuestion = () => {
    setQuestion(question + 1);
  };
  let routes = [
    {
      route: "/start",
      component: <Start />,
    },
    {
      route: "/shop",
      component: (
        <Market
          level={levelData[level]}
          question={question}
          nextQuestion={nextQuestion}
        />
      ),
    },
    {
      route: "/shop/0",
      component: (
        <Game
          level={levelData[level]}
          question={question}
          nextQuestion={nextQuestion}
        />
      ),
    },
    {
      route: "/shop/1",
      component: (
        <Fruits
          level={levelData[level]}
          question={question}
          nextQuestion={nextQuestion}
        />
      ),
    },
    {
      route: "/shop/2",
      component: (
        <Grocery
          level={levelData[level]}
          question={question}
          nextQuestion={nextQuestion}
        />
      ),
    },
    {
      route: "/shop/3",
      component: (
        <Ice
          level={levelData[level]}
          question={question}
          nextQuestion={nextQuestion}
        />
      ),
    },
    {
      route: "/level",
      component: <Level setLevel={setLevel} />,
    },

    {
      route: "/task",
      component: (
        <Task
          level={levelData[level]}
          question={question}
          nextQuestion={nextQuestion}
        />
      ),
    },
    {
      route: "/end",
      component: <Final />,
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
