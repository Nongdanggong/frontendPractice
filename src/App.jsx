import Slogen from './pages/Slogen';
import CommunityGuide from './pages/CommunityGuide';
import HorizonBlockArea from './pages/HorizonBlockArea';
import RecommendBook from './pages/RecommendBook';
import RelayBoardOpenNotice from './pages/RelayBoardOpenNotice';
import UniqueTransciption from './pages/UniqueTranscription';
import RelayBoard from './pages/RelayBoard';
import ReadingDiscussion from './pages/ReadingDiscussion';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='overflow-hidden w-screen h-full m-auto bg-floral-white'>
      <Header></Header>
      <Slogen></Slogen>
      <CommunityGuide></CommunityGuide>
      <HorizonBlockArea></HorizonBlockArea>
      <RecommendBook></RecommendBook>
      <RelayBoardOpenNotice></RelayBoardOpenNotice>
      <UniqueTransciption></UniqueTransciption>
      <RelayBoard></RelayBoard>
      <ReadingDiscussion></ReadingDiscussion>
      <Footer></Footer>
    </div>
  );
}

export default App;
