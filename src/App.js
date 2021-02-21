import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex flex-wrap md:flex-row-reverse">
        <div className="w-full md:w-10/12 bg-gray-dark">
          <div className="container px-4 pt-20 xl:pt-24 xl:px-8">
            <Timeline></Timeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
