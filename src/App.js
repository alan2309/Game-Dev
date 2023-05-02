import Game from "./screens/game/Game";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import Start from "./screens/game/Start";

function App() {
  return (
    <div className="App">
    <DndProvider backend={HTML5Backend}>
     <Game />
     </DndProvider>
    </div>
  );
}

export default App;
