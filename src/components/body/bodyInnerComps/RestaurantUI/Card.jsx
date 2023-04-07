import { ImgApi } from "../../../../config";


const Card = ({ cloudinaryImageId, name, promoted, cuisines, deliveryTime, costForTwoString, avgRating, aggregatedDiscountInfo }) => {


    return (
        <div className="border m-auto relative  w-64" >
            <img src={`${ImgApi}` + `${cloudinaryImageId}`} className=" w-64 h-40" alt="" />
            {promoted && (
                <div className="bg-[#3a3c41]
                 text-white -left-2 absolute top-0 text-xs font-medium px-2 py-1 after:content-[''] after:absolute  after:border-[#3a3c41] after:w-0 after:h-0 after:-bottom-2  after:left-0 after:border-t-8 after:border-r-8  after:border-b-transparent  after:border-b-8  after:border-l-0 "> 
                    PROMOTED</div>
            )}
            <div className="text-base font-medium text-ttlRestroHeading">{name}</div>
            <div className="text-xs font-light text-sortByBtnColor ">{cuisines.join(", ")}</div> 
            <div className="flex justify-between items-center">
                <p className="rating">{avgRating}</p>
                <p>•</p>
                <p className="text-[#535665] text-xs font-light">{deliveryTime}</p>
                <p>•</p>
                <p className="text-[#535665] text-xs font-light">{costForTwoString}</p>
            </div>
            <div className="8a584b font-normal text-sm">{aggregatedDiscountInfo?.shortDescriptionList?.meta}</div>
            <button className=" m-auto text-center">QuickView</button>
                <div className=" border-[#3a3c41] w-0 h-0 border  border-t-[4px] border-r-0 border-b-0 border-l-[4px] border-l-white"></div>
        </div>

    )
};

export default Card;