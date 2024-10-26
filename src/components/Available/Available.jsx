import PropTypes from "prop-types";

const Available = ({selected, handleIsActiveState, isActive}) => {
   console.log(isActive)
    return (
        <div className="mt-44">
            <div className="flex justify-between">
                <h3>Available Players</h3>
                <div className="flex overflow-hidden border-2 border-[#ccc] rounded-xl">
                    <button onClick={() => handleIsActiveState("available")} className={`${isActive.status == "available" ? " bg-yellow-400 border-none flex-1 py-2 px-6" : "border-none flex-1 py-2 px-6"}`}>Available</button>
                    <button onClick={() => handleIsActiveState("selected")} className={`${isActive.status == "selected" ? "bg-yellow-400 border-none py-2 px-6" : "border-none py-2 px-6"}`}>Selected {selected.length} </button>
                </div>
            </div>
        </div>
    );
};

Available.propTypes = {
    selected: PropTypes.object,
    handleIsActiveState: PropTypes.func,
    isActive: PropTypes.object
}
export default Available;