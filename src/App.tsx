import Navbar from "./compoents/Navbar.tsx";
import Routers from "./navigation/Routers.tsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Routers/>
            </main>
        </>
    );
};

export default App;
