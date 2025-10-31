import PointColorGhostButton from '../components/PointColorGhostButton';

function UniqueTransciption() {
  return (
    <div class='h-225 flex flex-col justify-center items-center'>
      <img
        class='h-12'
        alt='고유 필사 아이콘'
        src='https://cdn.imweb.me/thumbnail/20240331/b25be75e07bdd.png'
      />
      <div class='mt-9 mb-10'>
        <p class='text-base text-point'>
          자신만의 고유한
          <span class='font-bold'>손글씨</span>로 책 구절을 따라 쓰세요
        </p>
      </div>
      <p class='text-5xl font-bold'>고유 필사</p>
      <div class='mt-7.5 mb-16'>
        <PointColorGhostButton
          size='md'
          text='고유 필사 작성하기'
        ></PointColorGhostButton>
      </div>
      <div class='flex justify-center px-2.5 w-full gap-5'>
        <div class='w-1/3 max-w-95 h-70 bg-[url("https://cdn.imweb.me/thumbnail/20240326/afe08fe1a7b12.jpg")] bg-center bg-no-repeat bg-cover'>
          <div class='w-full h-full opacity-0 transition duration-300 bg-translucent-point hover:cursor-pointer hover:opacity-100  flex items-end'>
            <p class='text-white p-5 pb-6 font-base font-light'>
              써보았는데 어떤가요?
            </p>
          </div>
        </div>
        <div class='w-1/3 max-w-95 h-70 bg-[url("https://cdn.imweb.me/thumbnail/20240326/c9abd8c709ebd.jpg")] bg-center bg-no-repeat bg-cover'>
          <div class='w-full h-full opacity-0 transition duration-300 bg-translucent-point hover:cursor-pointer hover:opacity-100 flex items-end'>
            <p class='text-white p-5 pb-6 font-base font-light'>
              손글씨로 적어 보았습니다!
            </p>
          </div>
        </div>
        <div class='w-1/3 max-w-95 h-70 bg-[url("https://cdn.imweb.me/thumbnail/20240326/c6708b5a1e03c.jpg")] bg-center bg-no-repeat bg-cover'>
          <div class='w-full h-full opacity-0 transition duration-300 bg-translucent-point hover:cursor-pointer hover:opacity-100 flex items-end'>
            <p class='text-white p-5 pb-6 font-base font-light'>
              최애 책의 구절을 필사해 보았어요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqueTransciption;
