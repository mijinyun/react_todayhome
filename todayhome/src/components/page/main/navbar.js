import './navbar.scss';
import data2 from '../../../db/CateData.json';

function NavMenu() {
    const navbarData = data2.navData;
    // console.log(data2.navData.length);

    return(
        <div className='nav_container'>
            <ul className='nav_category'>

            {
                navbarData.map(function(nav,i) {
                    return(
                    <li>
                        <div>
                            <img src={nav.img}></img>
                        </div>
                        <div>{nav.title}</div>
                    </li>
                    )
                })
            }
            
            </ul>
        </div>
    )
}

export default NavMenu;