
function UsersListing() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer mt-5 w-fit">
        <div className="flex items-center">
            <img 
              className="h-[32px] w-[32px] rounded-full bg-black/10 border-2 border-white z-10 object-cover" 
              src="images/avatar.png"
              alt=""
            />
            <img 
              className="h-[32px] w-[32px] rounded-full bg-black/10 border-2 border-white relative -translate-x-2 z-9 group-hover:translate-x-0 duration-200 ease-in-out object-cover"
              src="images/avatar-3.jpeg"
              alt=""
            />
            <img 
              className="h-[32px] w-[32px] rounded-full bg-black/10 border-2 border-white relative -translate-x-4 z-8 group-hover:translate-x-0 duration-200 ease-in-out object-cover"
              src="images/avatar-1.jpeg"
              alt=""
            />
            <img 
              className="h-[32px] w-[32px] rounded-full bg-black/10 border-2 border-white relative -translate-x-6 z-7 group-hover:translate-x-0 duration-200 ease-in-out object-cover"
              src="images/avatar-4.jpeg"
              alt=""
            />
        </div>
        <p className="text-[#15272D65] text-[15px] -translate-x-6 group-hover:translate-x-0 duration-200 ease-in-out">Ava, Liam, Noah +12 others</p>
    </div>
  )
}

export default UsersListing