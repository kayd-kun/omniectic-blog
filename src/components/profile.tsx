
export default function ProfileCard() {
    return (
      <div>
        {/* component */}
        <div className="max-w-md mx-auto md:max-w-4xl mt-16 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="relative">
                  <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                </div>
              </div>
            </div>
            <div className="mt-20">
            </div>
            <div className="text-center mt-5">
              <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 pt-5">Kamal Acharya</h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" /> CST, Bhutan
              </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <p className="font-light leading-relaxed text-slate-600 mb-4">
                    I am an under grad student from CST, Bhutan. My main focus is on learning Security, I read AI and Non-Fiction books in free time. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }