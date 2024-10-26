import bgImage from '../../assets/image/bg-shadow.png'

const FooterCard = () => {
    return (
        <div className="relative">
            <div className='-mt-[10%]'>
            <div className="w-[60%] mx-auto rounded-xl  border-2 border-white">
                    <img className='rounded-xl w-[100%] mx-auto my-4 ml-4' src={bgImage} />
                
            </div>
            <div className="relative">
                    <div className='-mt-[16%]'>
                        <h2 className='font-bold text-2xl'>Subscribe to our Newsletter</h2>
                        <p className='text-sm'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex gap-2 justify-center mt-4'>
                            <input type="text" placeholder='Enter your email' className='border-2 rounded-lg pl-2'/>
                            <button className='btn btn-warning '>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterCard;