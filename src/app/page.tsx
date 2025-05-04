export default function Home() {
  return (
    <section
      id="hero"
      className="section-padding-x py-24 md:py-36 text-light-base max-h-screen bg-gradient-to-b from-blue-s3-base via-blue-s3-secondary to-transparent relative overflow-hidden h-auto"
    >
      <div className="max-w-screen-xl container relative z-20">
        <div className="text-center md:max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-black mb-1 md:mb-2">Cooming Soon</h1>
          <h2 className="texl-xs md:text-2xl xl:text-4xl font-medium mb-1 xl:mb-4">
            Soedirman Student Summit 2025
          </h2>
          <p className="text-xs md:text-sm lg:text-base mb-4">
            Soedirman Student Summit (S3) is an annual event introducing
            university life to new Jenderal Soedirman University students. It
            helps Gensoed discover themselves, implement key values, connect
            with peers, and begin their academic journey purposefully.
          </p>
          <div className="flex gap-4 items-center justify-center">
            <a
              href="https://wa.me/6289533333333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-base font-semibold px-5 py-3 md:px-8 md:py-3 rounded-lg gradient-to-r from-blue-s3-base to-blue-s3-secondary bg-gradient-to-br w-fit flex items-center gap-4 outline-none hover:from-blue-s3-secondary hover:to-blue-s3-base transition duration-300 hover:scale-105 text-xs md:text-sm lg:text-base"
            >
              <span>Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/s3.unsoed/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold px-5 py-3 md:px-8 md:py-3 rounded-lg w-fit flex items-center gap-4 outline-none bg-gradient-to-tl from-teal-s3-secondary to-teal-s3-base text-light-base hover:from-teal-s3-base hover:to-teal-s3-secondary transition duration-300 hover:scale-105 text-xs md:text-sm lg:text-base"
            >
              <span>Get To Know Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zm160 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Clouds Start */}
      {/* <div 
        className="absolute -top-16 -left-24 hidden xl:block w-144 h-96 opacity-50" 
        style={{ backgroundImage: 'url(/img/elements/cloud-1.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', pointerEvents: 'none' }}
        aria-hidden="true"
      ></div>
      <div 
        className="absolute top-12 -right-24 hidden xl:block w-144 h-96 opacity-50" 
        style={{ backgroundImage: 'url(/img/elements/cloud-2.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', pointerEvents: 'none' }}
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-0 left-12 transform -translate-x-1/2 hidden xl:block w-144 h-96 opacity-50" 
        style={{ backgroundImage: 'url(/img/elements/cloud-3.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', pointerEvents: 'none' }}
        aria-hidden="true"
      ></div> */}
      {/* Clouds End */}
      {/* Tag Start */}
      {/* <p className="rounded-4xl px-4 py-2 xl:px-8 xl:py-4 bg-light-base text-dark-base shadow-sm border-dark-base rotate-12 text-xs md:text-lg font-semibold w-fit absolute left-12 bottom-0 md:bottom-8 md:left-24">
        #Gensoed25
      </p>
      <p className="rounded-4xl px-4 py-2 xl:px-8 xl:py-4 bg-light-base text-dark-base shadow-sm border-dark-base -rotate-8 text-xs md:text-lg font-semibold w-fit absolute bottom-24 left-72">
        #Unsoed
      </p>
      <p className="rounded-4xl px-4 py-2 xl:px-8 xl:py-4 bg-light-base text-dark-base shadow-sm border-dark-base -rotate-4 text-xs md:text-lg font-semibold w-fit absolute bottom-0 left-96">
        #UniversitasJenderalSoedirman
      </p>
      <p className="rounded-4xl px-4 py-2 xl:px-8 xl:py-4 bg-light-base text-dark-base shadow-sm border-dark-base -rotate-16 text-xs md:text-lg font-semibold w-fit absolute bottom-8 right-12">
        #Purwokerto
      </p>
      <p className="rounded-4xl px-4 py-2 xl:px-8 xl:py-4 bg-light-base text-dark-base shadow-sm border-dark-base rotate-8 text-xs md:text-lg font-semibold w-fit absolute bottom-16 right-64">
        #MabaUnsoed
      </p>
      <p className="rounded-4xl px-4 py-2 xl:px-8 xl:py-4 bg-light-base text-dark-base shadow-sm border-dark-base -rotate-4 text-xs md:text-lg font-semibold w-fit absolute bottom-0 right-112">
        #Mantab
      </p> */}
      {/* Tag End */}
    </section>
  );
}
