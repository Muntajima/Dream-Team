import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import PropTypes from "prop-types";

const Player = ({ player, handleChooseSelected, isActive }) => {

    const { name, img, country, type, price, rating, battingType, bowlingType } = player;
   
    return (
        <div className={`${isActive.status == "available" ? "block" : "hidden"}`}>
            <div className="text-sm">
                <div className="card bg-base-100 w-96 shadow-xl text-left space-y-2 font-bold">
                    <figure className="mb-4">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl w-[300px] h-[300px] object-cover" />
                    </figure>
                    <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <h3><FaUser></FaUser></h3>
                        <h3 className="text-lg">{name}</h3>
                    </div>
                        <div className="flex gap-2 items-center">
                        <h3><FcRating /></h3>
                        <h2>{rating}</h2>
                        </div>
                    </div>
                    
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <h3><FaFlag></FaFlag></h3>
                            <h3 className="text-gray-400">{country}</h3>
                        </div>
                        <button className="btn btn-sm">{type}</button>
                    </div>
                    <div>
                        <h3>Rating: {rating}</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <h3>{bowlingType}</h3>
                        <h3>{battingType}</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <h3>Price: ${price}</h3>
                        <button className="btn btn-sm" onClick={() => handleChooseSelected(player)}>Choose Player</button>
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    handleChooseSelected: PropTypes.func,
    isActive: PropTypes.object
}
export default Player;