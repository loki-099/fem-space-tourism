import Header from '../components/Header';

function Home() {
  return (
    <div className='w-full h-screen overflow-y-auto bg-home-mobile bg-no-repeat bg-cover md:bg-home-tablet xl:bg-home-desktop'>
      <div>
        <Header/>
        <div className='my-14 md:my-28 xl:my-12 xl:mt-36 px-6 mx-auto flex flex-col items-center gap-20 md:gap-40 xl:flex-row xl:justify-between xl:items-end xl:px-[136px]'>
          <div className='w-full max-w-[450px] flex flex-col items-center gap-4 md:gap-6 xl:items-start'>
            <h5 className='heading-5 uppercase'>So, You want to travel to</h5>
            <h1 className='heading-1 uppercase'>Space</h1>
            <p className='body text-center xl:text-left'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          </div>
          <div className='w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center md:w-[242px] md:h-[242px]'>
            <p className='btn-text uppercase pt-2'>Explore</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Home