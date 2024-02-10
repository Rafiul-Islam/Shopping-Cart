import {FaRegStar, FaStar} from "react-icons/fa";
import {CSSProperties} from "react";

interface PropsType {
    rating: number,
    handleClick?: (index: number) => void,
    style?: CSSProperties
}


// @ts-ignore
const RatingFilter = ({rating, handleClick, style}: PropsType) => {
    return (
        <>
            {
                [...Array(5)].map((_, indx) =>
                    rating > indx ?
                        <FaStar role='button' key={indx} onClick={() => handleClick!(indx)} className='ms-1' style={style}/> :
                        <FaRegStar role='button' key={indx} onClick={() => handleClick!(indx)} className='ms-1' style={style}/>
                )
            }
        </>
    );
};

export default RatingFilter;
