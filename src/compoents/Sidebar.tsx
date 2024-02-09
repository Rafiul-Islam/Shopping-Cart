import React, {useState} from "react";


const Sidebar = () => {
    const [sortingType, setSortingType] = useState<string>("");
    const [stockOut, setStockOut] = useState<boolean>(false);
    const [fast, setFast] = useState<boolean>(false);

    const handleSorting = (e: React.FormEvent) => {
        // @ts-expect-error
        setSortingType(e.target.value);
    }

    const handleStockOut = () => {
        setStockOut(prevState => !prevState);
    }
    const handleFastDelivery = () => {
        setFast(prevState => !prevState);
    }

    const handleReset = () => {
        setSortingType("");
        setStockOut(false);
        setFast(false);
    }

    return (
        <section className='sidebar sticky-top'>
            <form>
                <div className='sort-view'>
                    <label className='d-block' htmlFor="asc">
                        <input
                            className='me-2'
                            type="radio"
                            onChange={(e) => handleSorting(e)}
                            id='asc'
                            value='asc'
                            checked={sortingType === 'asc'}
                        />
                        <small>Ascending</small>
                    </label>
                    <label className='my-2' htmlFor="desc">
                        <input
                            className='me-2'
                            type="radio"
                            onChange={(e) => handleSorting(e)}
                            id='desc'
                            value='desc'
                            checked={sortingType === 'desc'}
                        />
                        <small>Descending</small>
                    </label>
                </div>
                <div className='filter my-2'>
                    <label className='d-block' htmlFor="stockOut">
                        <input
                            className='me-2'
                            type="checkbox"
                            onChange={handleStockOut}
                            id='stockOut'
                            checked={stockOut}
                        />
                        <small>Include Out Of Stock</small>
                    </label>
                </div>
                <div className='filter my-2'>
                    <label htmlFor="fast">
                        <input
                            className='me-2'
                            type="checkbox"
                            onChange={handleFastDelivery}
                            id='fast'
                            checked={fast}
                        />
                        <small>Fast Delivery</small>
                    </label>
                </div>
                <button onClick={handleReset} type='reset' className='btn w-100 bg-light text-dark mt-3'>Reset All
                    Filters
                </button>
            </form>
        </section>
    );
};

export default Sidebar;
