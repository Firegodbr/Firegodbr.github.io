import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
function App() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Presentation />
        <main>
          <div className="flex justify-center content-center">
            <div className="mx-auto">Hello world</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
