import PropTypes from "prop-types";

const Selected = ({ select, isActive, handleDelete }) => {
    
    const { name, img, type, price } = select;
    return (
        <>
            <div className={`${isActive.status == "selected" ? "block" : "hidden"}`}>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center my-8">
                        <img src={img} alt="" className="w-[150px] rounded-lg border-2 border-red-500" />
                        <div>
                            <h2 className="font-bold text-xl">{name}</h2>
                            <h3>{type}</h3>
                            <p><span className="font-bold">Price:</span> ${price}</p>
                        </div>

                    </div>
                    <button onClick={() =>handleDelete(select)} className ="btn btn-error text-white">Delete</button>
                </div>
            </div>           
        </>


    );
};

Selected.propTypes = {
    select: PropTypes.object,
    isActive: PropTypes.object,
    handleDelete: PropTypes.func
}
export default Selected;
