import { ImgApi } from "../../../config";


const Card =({cloudinaryImageId,name,cuisines,deliveryTime})=>{


    return (
        <div className="border m-auto text-center w-60 h-80" >
            <img src={`${ImgApi}` + `${cloudinaryImageId}`}  className="p-3" alt="" />

            <div className="name">{name}</div>
            <div className="cuisines">{cuisines.join(", ")}</div>
            <div className="dt">{deliveryTime}</div>
            
        </div>
       
    )
};

export default Card;