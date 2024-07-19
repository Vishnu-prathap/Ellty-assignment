"use client";
export default function Home() {
  const myFunction = () => {
    return 1;
  };
  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className='border-2 p-10 gap-y-4 flex flex-col min-w-[370px]'>
        <div className='flex flex-row  min-h-[42px] justify-between items-center'>
          <p>All pages</p>
          <input type='checkbox' className=' text-blue-600 rounded-sm' />
        </div>
        <hr className='text-black w-[340px] decoration-5' />

        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className='flex flex-row  max-h-[164px] items-center justify-between'
              key={index}>
              <p>Page {item}</p>
              <input type='checkbox' className=' text-blue-600 rounded-sm' />
            </div>
          );
        })}
        <hr className='text-black w-[340px] decoration-5' />

        <button className="bg-amber-400  min-h-[40px] hover:bg-amber-300">Done</button>

      </div>
    </div>
  );
}
