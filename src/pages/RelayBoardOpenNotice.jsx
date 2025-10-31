import PointColorSolidButton from '../components/PointColorSolidButton';

function RelayBoardOpenNotice() {
  return (
    <div class='h-150 bg-no-repeat bg-center bg-cover bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url("https://cdn.imweb.me/thumbnail/20240326/0097dcac1308f.jpg")]'>
      <div class='text-white pl-14 pt-32'>
        <div>
          <p class='text-xl text-of-white'>
            책장
            <span class='font-bold mobile-text-bold-no-apply'> 커뮤니티</span>
          </p>
        </div>
        <div class='mt-4 mb-7.5'>
          <p class='text-6xl leading-20'>
            릴레이 <span class='font-bold'>독후감</span>
            <br />
            게시판 <span class='font-bold'>오픈!</span>
          </p>
        </div>
        <div>
          <p class='font-light leading-6 text-of-white'>
            다독러들과 함께 인상깊은 책의 구절에 대해
            <br />
            릴레이로 자유롭게 기록해 보세요.
          </p>
        </div>
        <div class='mt-20'>
          <PointColorSolidButton
            size='md'
            text='릴레이 독후감 쓰기'
          ></PointColorSolidButton>
        </div>
      </div>
    </div>
  );
}

export default RelayBoardOpenNotice;
