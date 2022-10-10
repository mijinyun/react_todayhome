import './subheader.scss';


function SubHeader(props) {

    const item = props.subMenu;

    return(
        <div className='sub' >
            <div className='subMenu'>
                {/*  추후에 배열 반목문map못쓰니까 객체로 반복해서 출력하도록 해보기 */}
                <ul>
                    <li>{item.menu1}</li>
                    <li>{item.menu2}</li>
                    <li>{item.menu3}</li>
                    <li>{item.menu4}</li>
                    <li>{item.menu5}</li>
                    <li>{item.menu6}</li>
                    <li>{item.menu7}</li>
                    <li>{item.menu8}</li>
                    <li>{item.menu9}</li>

                </ul>
            </div>
        </div>
    )
}

export default SubHeader;