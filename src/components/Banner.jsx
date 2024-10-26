import bgImage from '../assets/image/bg-shadow.png';
import bannerLogo from '../assets/image/banner-main.png';
import PropTypes from "prop-types";

const Banner = ({handleFreeCredit}) => {
    return (
        <div className='mt-8'>
            <img src={bgImage} alt="banner-bg" className='bg-black rounded-3xl'/>
            <div className='relative'>
                <img src={bannerLogo} alt="" className='w-[150px] ml-[45%] -mt-[33%]'/>
                <h1 className='font-bold text-3xl text-white py-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-slate-300'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleFreeCredit} className='btn mt-12 bg-yellow-400 border-4 border-blue-500 rounded-lg'>Claim Free Credit</button>

            </div>
        </div>
    );
};

Banner.propTypes = {
      handleFreeCredit: PropTypes.func
}
export default Banner;