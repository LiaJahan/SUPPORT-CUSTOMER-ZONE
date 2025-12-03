import { useState } from "react";
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Components/Footer/Footer";
import MainPage from "./assets/Components/MainPage/MainPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const fetchData = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {

  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const fetchDataApi = fetchData();

  return (
    <>
      <Navbar />
      <MainPage
        fetchDataApi={fetchDataApi}
        tasks={tasks}
        setTasks={setTasks}
        resolvedTasks={resolvedTasks}
        setResolvedTasks={setResolvedTasks}
        inProgressCount={inProgressCount}
        setInProgressCount={setInProgressCount}
        resolvedCount={resolvedCount}
        setResolvedCount={setResolvedCount}
      />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
