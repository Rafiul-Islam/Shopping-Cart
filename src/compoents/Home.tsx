import Sidebar from "./Sidebar.tsx";
import Products from "./Products.tsx";

const Home = () => {
    return (
        <section className='row mx-0'>
            <section className='col-md-4 col-lg-3 col-xl-2 ps-0'>
                <Sidebar/>
            </section>
            <section className='col-md-8 col-lg-9 col-xl-10 pe-0 bg-light'>
                <Products/>
            </section>
        </section>
    );
};

export default Home;
