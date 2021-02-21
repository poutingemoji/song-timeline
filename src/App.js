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
          <div className="container flex flex-col items-center px-6 pt-20 xl:pt-24 xl:px-8">
            <Timeline></Timeline>
            {/* 
            <div id="popup" className="fixed bottom-0 w-2/6 h-20 bg-white">
              My button
            </div> 
            */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
