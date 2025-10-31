import { useState } from 'react';
import './headerTransition.css';

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div class='pc-only-view fixed w-full bg-floral-white text-point flex items-center justify-between p-5 pl-7.5 pr-6'>
      <div class='flex items-center'>
        <div class='company-name-wrapper'>
          <p class='text-4xl leading-2 cursor-pointer'>책장</p>
        </div>
        <div class='flex ml-10 gap-20'>
          <div
            class='relative bind-menu'
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              class='cursor-pointer h-7.5 flex flex-col justify-center parent-menu'
              onMouseEnter={() => setIsHovered(true)}
            >
              <p>커뮤니티</p>
            </div>
            <div
              class={`absolute cursor-pointer opacity-100 top-7.5 left-0 right-0 bg-white w-45 shadow-gray-200 inset-shadow-sm
                ${isHovered ? 'smooth-active' : 'smooth-disabled'}
                `}
              onMouseEnter={() => setIsHovered(true)}
            >
              <div class='p-6.5 pl-6 hover:bg-point transition-all furation 400 hover:text-white'>
                <p class='text-sm'>자유 북토크</p>
              </div>
              <div class='p-6.5 pl-6 hover:bg-point transition-all furation 400 hover:text-white'>
                <p class='text-sm'>릴레이 독후감</p>
              </div>
              <div class='p-6.5 pl-6 hover:bg-point transition-all furation 400 hover:text-white'>
                <p class='text-sm'>고유 필사</p>
              </div>
            </div>
          </div>
          <div class='cursor-pointer h-7.5 flex flex-col justify-center'>
            <p>추천 책장</p>
          </div>
          <div class='cursor-pointer h-7.5 flex flex-col justify-center'>
            <p>책장 소식</p>
          </div>
        </div>
      </div>
      <div class='header-right-area'>
        <div class='flex gap-9'>
          <p class='text-sm cursor-pointer'>로그인</p>
          <p class='text-sm cursor-pointer'>회원가입</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
