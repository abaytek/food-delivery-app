import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";

const App = () => {
  return (
    <AnimatePresence>
      <div className="bg-primary w-screen h-auto flex flex-col">
        <Header />
        <main className="w-full p-8 mt-24">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createitem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
