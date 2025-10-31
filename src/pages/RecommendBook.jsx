function RecommendBook() {
  return (
    <div className='flex flex-col justify-center items-center h-320 bg-point'>
      <div className='flex flex-col justify-center items-center text-white'>
        <div>
          <p className='font-light'>
            금주의{' '}
            <span className='font-bold mobile-text-bold-no-apply'>
              추천 도서
            </span>
            를 확인해 보세요.
          </p>
        </div>
        <div className='mt-10'>
          <p className='text-5xl font-bold'>추천 책장</p>
        </div>
      </div>
      <div>
        <div className='h-125 w-full max-w-360 flex justify-between mb-7.5'>
          <div className='w-7/10 p-21 pt-16 flex flex-col gap-9'>
            <div className='flex flex-col gap-2.5'>
              <p className='w-fit text-4xl text-point font-extrabold tracking-widest bg-base pt-2 pl-2.5 pr-2.5'>
                Death of
              </p>
              <p className='w-fit text-4xl text-point font-extrabold tracking-widest bg-base pt-2 pl-2.5 pr-2.5'>
                A Salesman
              </p>
            </div>
            <div className='flex flex-col gap-2 mt-10.5 text-white'>
              <p className='text-xl'>세일즈맨의 죽음</p>
              <p>w. Arthur Miller</p>
            </div>
            <div className='pc-only-view flex recommend-book-story-text-wrapper w-full max-w-145 text-of-point gap-7.5'>
              <p className='w-1/2 text-sm leading-6 flex flex-col'>
                30여 년간 세일즈맨으로 일한 윌리 로먼은 주변에서 아무리 자신을
                무시해도 그 나름대로 자부심을 갖고 두 아들 비프와 해피의
                뒷바라지를 하며 살아
              </p>
              <p className='w-1/2 text-sm leading-6 flex flex-col'>
                왔다. 하지만 나이가 들수록 점점 보수는 낮아지고 궁핍한 생활을
                지속하다 결국 회사로부터 해고 당하게 된다. 윌리는 방탕한
                낙오자로 전락하면서...
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center pt-7.5 w-1/3 max-w-90'>
            <img
              className='w-full h-auto'
              alt='책 사진~~~'
              src='https://cdn.imweb.me/thumbnail/20240410/82c68ab648c61.png'
            />
          </div>
          {/* <div className='mobile-only-view recommend-book-story-text-mobile-wrapper'>
            <p className='text-color-white recommend-book-story-text'>
              30여 년간 세일즈맨으로 일한 윌리 로먼은 주변에서 아무리 자신을
              무시해도 그 나름대로 자부심을 갖고 두 아들 비프와 해피의
              뒷바라지를 하며 살아왔다. 하지만 나이가 들수록 점점 보수는
              낮아지고 궁핍한 생활을 지속하다 결국 회사로부터 해고당하게 된다.
              윌리는...
            </p>
          </div> */}
        </div>
      </div>
      <div className='h-35/100 mb-19 flex'>
        <div className='mx-7.5 flex-1'>
          <img
            className='w-56 h-auto'
            alt='추천 책 사진1'
            src='https://cdn.imweb.me/thumbnail/20240325/1b9398d3c298b.png'
          />
          <div className='flex flex-col gap-1 px-2.5'>
            <p className='text-floral-white'>무진기행</p>
            <p className='font-sm text-of-point'>w. 김기욱</p>
          </div>
        </div>
        <div className='mx-7.5 flex-1'>
          <img
            className='w-56 h-auto'
            alt='추천 책 사진1'
            src='https://cdn.imweb.me/thumbnail/20240325/66a4471532ba9.png'
          />
          <div className='flex flex-col gap-1 px-2.5'>
            <p className='text-floral-white'>Invisible Man</p>
            <p className='font-sm text-of-point'>w. Ralph Waldo Ellison</p>
          </div>
        </div>
        <div className='mx-7.5 flex-1'>
          <img
            className='w-56 h-auto'
            alt='추천 책 사진1'
            src='https://cdn.imweb.me/thumbnail/20240325/918a7991064bf.png'
          />
          <div className='flex flex-col gap-1 px-2.5'>
            <p className='text-floral-white'>The Adventures of Tom Sawyer</p>
            <p className='font-sm text-of-point'>w. Mark Twain</p>
          </div>
        </div>
        <div className='mx-7.5 flex-1'>
          <img
            className='w-56 h-auto'
            alt='추천 책 사진1'
            src='https://cdn.imweb.me/thumbnail/20240325/938065c38b01e.png'
          />
          <div className='flex flex-col gap-1 px-2.5'>
            <p className='text-floral-white'>The Old Man and the Sea</p>
            <p className='font-sm text-of-point'>w. Ernest Miller Hemingway</p>
          </div>
        </div>
        <div className='mx-7.5 flex-1'>
          <img
            className='w-56 h-auto'
            alt='추천 책 사진1'
            src='https://cdn.imweb.me/thumbnail/20240325/28e2999ac5125.png'
          />
          <div className='flex flex-col gap-1 px-2.5'>
            <p className='text-floral-white'>Die Leiden des jungen Werthers</p>
            <p className='font-sm text-of-point'>w. Johann Wolfgang</p>
          </div>
        </div>
        <div className='mx-7.5 flex-1'>
          <img
            className='w-56 h-auto'
            alt='추천 책 사진1'
            src='https://cdn.imweb.me/thumbnail/20240325/872df919c8270.png'
          />
          <div className='flex flex-col gap-1 px-2.5'>
            <p className='text-floral-white'>Jane Eyre</p>
            <p className='font-sm text-of-point'>w. Charlotte Brontë</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendBook;
