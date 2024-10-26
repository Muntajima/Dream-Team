import PropTypes from "prop-types";

const Add = ({isActive, handleIsActiveState}) => {
    return (
        <div>
            <div>
                <button onClick={() => handleIsActiveState("available")} className={`${isActive.status == "selected" ? "block btn border-2 border-red-600 font-bold" : "hidden"}`}>Add More Player</button>
            </div>
        </div>
    );
};

Add.propTypes = {
    isActive: PropTypes.object,
    handleIsActiveState: PropTypes.func
}
export default Add;