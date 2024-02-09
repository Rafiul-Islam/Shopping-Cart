import Navbar from "./compoents/Navbar.tsx";
import Routers from "./navigation/Routers.tsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <main className='p-3'>
                <Routers/>
            </main>
        </>
    );
};

export default App;
