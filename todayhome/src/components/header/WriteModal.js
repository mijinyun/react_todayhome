import './WriteModal.scss';

// 부트스트랩
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function WriteModal() {
  return(
    <>
      <Dropdown.Item>
        <div className='item_list_container'>
            <img src='/write1.png'></img>
            <div className='item_entire_text'>
              <div className="item_main_text">사진/동영상 올리기</div>
              <div className='item_sub_text'>우리 집의 공간과 나의 일상을 기록해보세요.</div>
            </div>
        </div></Dropdown.Item>

        <Dropdown.Item>
        <div className='item_list_container'>
            <img src='/write2.png'></img>
            <div className='item_entire_text'>
              <div className="item_main_text">집들이 글쓰기</div>
              <div className='item_sub_text'>집에 관한 이야기를 글로 작성해 보세요..</div>
            </div>
        </div></Dropdown.Item>

        <Dropdown.Item>
        <div className='item_list_container'>
            <img src='/write3.png'></img>
            <div className='item_entire_text'>
              <div className="item_main_text">노하우 글쓰기</div>
              <div className='item_sub_text'>다양한 인테리어 노하우를 공유해 주세요.</div>
            </div>
        </div></Dropdown.Item>

        <Dropdown.Item>
        <div className='item_list_container'>
            <img src='/write4.png'></img>
            <div className='item_entire_text'>
              <div className="item_main_text">상품 리뷰 쓰기</div>
              <div className='item_sub_text'>상품 리뷰를 작성하고 포인트도 받아 보세요.</div>
            </div>
        </div></Dropdown.Item>

        <Dropdown.Item>
        <div className='item_list_container'>
            <img src='/write5.png'></img>
            <div className='item_entire_text'>
              <div className="item_main_text">시공 전문가 리뷰쓰기</div>
              <div className='item_sub_text'> 시공 전문가 리뷰를 작성하고 포인트도 받아 보세요.</div>
            </div>
        </div></Dropdown.Item>

        <Dropdown.Item>
        <div className='item_list_container'>
            <img src='/write6.png'></img>
            <div className='item_entire_text'>
              <div className="item_main_text">인테리어 질문하기</div>
              <div className='item_sub_text'>인테리어 고수들과 전문가들에게 질문해 보세요.</div>
            </div>
        </div></Dropdown.Item>
    </>
  )
}

export default WriteModal;