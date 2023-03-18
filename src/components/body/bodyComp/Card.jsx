import { ImgApi } from "../../../config";


const Card =({cloudinaryImageId,name,cuisines,deliveryTime})=>{


    return (
        <div className="card" >

            <img src={`${ImgApi}` + `${cloudinaryImageId}`} alt="" />
            <div className="name">{name}</div>
            <div className="cuisines">{cuisines.join(", ")}</div>
            <div className="dt">{deliveryTime}</div>
            
        </div>
       
    )
};

export default Card;