import PointColorGhostButton from '../components/PointColorGhostButton';

function RelayBoard() {
  return (
    <div class='flex flex-col justify-center items-center h-230 pb-37.5'>
      <div class='mb-10'>
        <p class='text-point'>
          인상깊은 책의 구절에 대한
          <span class='font-bold'> 감상</span>을 간단하게
          <span class='font-bold'> 기록</span>해 보세요
        </p>
      </div>
      <p class='text-5xl font-bold'>릴레이 독후감</p>
      <div class='mt-7 mb-19'>
        <PointColorGhostButton
          size='md'
          text='릴레이 독후감 쓰러가기'
        ></PointColorGhostButton>
      </div>
      <div class='flex justify-center gap-7.5 w-full'>
        <div class='w-2/10 max-w-72.5 min-h-92.5 p-6 pt-11 bg-translucent-white'>
          <p class='leading-6 text-point'>
            통제와 감시의 공포를 탐구하면서, 자유와 개인의 권리에 대한 깊은
            고찰을 제시합니다. 주인공 윈스턴의 내면 갈등과 무력한 저항의 울림은
            독자를 깊이 생각하게 합니다.
          </p>
          <div class='mt-12.5 flex flex-col justify-center items-center'>
            <img
              class='h-16'
              alt='책 이미지1'
              src='https://cdn.imweb.me/upload/S2023121491fde6832840c/d4ee7600bc869.png'
            />
            <p class='font-semibold mt-2 text-base text-gray'>1984</p>
            <p class='text-gray text-sm text-center font-light'>
              w. George Orwell
            </p>
          </div>
        </div>
        <div class='w-2/10 max-w-72.5 min-h-92.5 p-6 pt-11 bg-translucent-white'>
          <p class=' text-point leading-6'>
            가브리엘 가르시아 마르케스의 이 소설은 마법같은 리얼리즘으로
            미술적으로 표현된 이야기를 통해 한 가족의 세대를 따라가며 삶과 사랑,
            고독과 운명에 대한 놀라운 사색을...
          </p>
          <div class='mt-12.5 flex flex-col justify-center items-center'>
            <img
              class='h-16'
              alt='책 이미지1'
              src='https://cdn.imweb.me/upload/S2023121491fde6832840c/1dd05fea5be95.png'
            />
            <p class='font-semibold mt-2 text-base text-gray'>백년의 고독</p>
            <p class='text-gray text-sm text-center font-light'>
              w. Gabriel GarcíaMárquez
            </p>
          </div>
        </div>
        <div class='w-2/10 max-w-72.5 min-h-92.5 p-6 pt-11 bg-translucent-white'>
          <p class='text-point leading-6t'>
            인생의 선택과 그 결과에 대해 다시 생각하게 되는 동시에 저의 삶을
            다시 평가하게 되었습니다. 특히 이 책은 희망과 변화에 대한 메시지를
            전달하며, 저에게 위로와 용기를 주었습니다.
          </p>
          <div class='mt-12.5 flex flex-col justify-center items-center'>
            <img
              class='h-16'
              alt='책 이미지1'
              src='https://cdn.imweb.me/upload/S2023121491fde6832840c/6e3b8f62a630d.png'
            />
            <p class='font-semibold mt-2 text-base text-gray'>
              The Midnight Library
            </p>
            <p class='text-gray text-sm text-center font-light'>w. Matt Haig</p>
          </div>
        </div>
        <div class='w-2/10 max-w-72.5 min-h-92.5 p-6 pt-11 bg-translucent-white'>
          <p class='text-point leading-6t'>
            자연의 아름다움과 인간의 복잡한 감정을 아름답게 풀어냈다고
            생각했습니다. 이 책은 사랑과 손해, 외로움과 용기의 이야기를 통해
            독자들에게 깊은 감동과 여운을 선사했습니다.
          </p>
          <div class='mt-12.5 flex flex-col justify-center items-center'>
            <img
              class='h-16'
              alt='책 이미지1'
              src='https://cdn.imweb.me/upload/S2023121491fde6832840c/1e42fbbdc13c9.png'
            />
            <p class='font-semibold mt-2 text-base text-gray'>
              가재가 노래하는 곳
            </p>
            <p class='text-gray text-sm text-center font-light'>
              w. Delia Owens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelayBoard;
