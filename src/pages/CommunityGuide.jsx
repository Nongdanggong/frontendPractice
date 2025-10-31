import PointColorGhostButton from '../components/PointColorGhostButton';

function CommunityGuide() {
  return (
    <div className='flex flex-col justify-center items-center h-90'>
      <div>
        <p className='text-4xl text-point font-light'>
          Shared Reading and Discussion
        </p>
      </div>
      <div className='flex flex-col justify-center items-center mt-4 gap-2.5'>
        <p className='font-light'>책장에서 함께 읽고 함께 나누는 독후활동,</p>
        <p className='font-light'>
          책장과 함께 독서의 매력과 인사이트를 발견해 보세요
        </p>
      </div>
      <div className='mt-7.5 mb-7.5'>
        <PointColorGhostButton
          size='lg'
          text='커뮤니티 바로가기'
        ></PointColorGhostButton>
      </div>
    </div>
  );
}

export default CommunityGuide;
