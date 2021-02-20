import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-wrap md:flex-row-reverse">
        <Navbar></Navbar>
        {/*Main Content */}
        {/* 
        <iframe
          src="https://datastudio.google.com/embed/reporting/0b9f3907-a3a9-42c8-8d31-215530b50f8e/page/jnxUB"
          frameBorder="0"
        ></iframe>
      */}

        <div className="w-full md:w-10/12 bg-gray-dark">
          <div className="container px-4 py-3 xl:py-8 xl:px-16">
            <Timeline></Timeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
