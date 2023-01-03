import {Link} from 'react-router-dom'

const Navbar=()=> {
  return (
    <div className='Navbar'>
        <div className='Navbar1'>
            <div className='Main_Content'>
                <div className="image">
                    <Link to="/">
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart"  width="75px" class="image1"/>
                        <div className='explr'> 
                        Explore <span className="plus_img">Plus</span>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" width="10px" />
                        </div>
                    </Link>
                </div>
                <div className='search_container'>
                    <span className='box'>
                        <input type="search"  placeholder="Search for products, brands and more"/>
                        <button ><i className='bx bx-search'></i></button>
                    </span>
                </div>
                <div>
                    <button class="loginbtn">Login</button>
                </div>
                <div className='HeaderName'>
                    <ul> <Link to="/user"> Home </Link> </ul>
                    <ul> <Link to="/addnewproduct"> Become a Seller </Link> </ul>
                    <ul> <Link to="/cart"> Cart </Link> </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
