import {FaRegStar, FaStar} from "react-icons/fa";

interface PropsType {
    rating: number,
    handleClick: (index: number) => void
}


// @ts-ignore
const RatingFilter = ({rating, handleClick}: PropsType) => {
    return (
        <>
            {
                [...Array(5)].map((_, indx) =>
                    rating > indx ?
                        <FaStar role='button' key={indx} onClick={() => handleClick(indx)} className='ms-1'/> :
                        <FaRegStar role='button' key={indx} onClick={() => handleClick(indx)} className='ms-1'/>
                )
            }
        </>
    );
};

export default RatingFilter;
