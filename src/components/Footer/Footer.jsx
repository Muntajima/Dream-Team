import footerLogo from '../../assets/image/logo-footer.png'

const Footer = () => {
    return (
        <div>
            
    <div>
      
      <div className="bg-[#06091A] py-20 ">
        <div className="flex justify-center mb-2">
          <img className="w-1/12 mb-8" src={footerLogo} />
        </div>
        <footer className="footer px-10 text-white text-left">

          <nav>
            <h6 className="footer-title text-right">About Us</h6>
            <p>We are a passionate team dedicated to providing the <br /> best services to our customers.</p>


          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Subscribe</button>
              </div>
            </fieldset>
          </form>

        </footer>
      </div>
      <div>
        <hr className="text-white" />
        <footer className="footer footer-center text-base-content bg-[#06091A] p-4">
          <aside>
            <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by Rangpur Riders</p>
          </aside>
        </footer>
      </div>
    </div>
      </div>
    );
};

export default Footer;