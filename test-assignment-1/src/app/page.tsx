"use client";
export default function Home() {
 
  return (
    <div className=' flex flex-col items-center justify-center pt-5'>
      <div className='border-solid rounded-md border-t-1 shadow-lg py-[10px] gap-y-4 flex flex-col min-w-[370px] justify-center'>
        <div className='flex flex-row justify-between items-center py-[8px] pr-[15px] pl-[22px] '>
          <p>All pages</p>
          <input type='checkbox' className=' text-blue-600 rounded-md w-[23px] h-[23px]' />
        </div>
        <div className="flex flex-row justify-between items-center py-[8px] pr-[15px] pl-[22px]">
          <hr className='text-black w-[340px] border-t-1' />
        </div>

        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className='flex flex-row  max-h-[164px] items-center justify-between py-[8px] pr-[15px] pl-[22px]'
              key={index}>
              <p>Page {item}</p>
              <input type='checkbox' className=' text-blue-600 rounded-md w-[23px] h-[23px]' />
            </div>
          );
        })}
        <div className="flex flex-row justify-between items-center py-[8px] pr-[15px] pl-[22px]">
          <hr className='text-black w-[340px] border-t-1' />
        </div>
        
          <div className="py-[10px] px-[20px]">
            <button className='bg-amber-400 w-[340px] min-h-[40px] rounded-[4px] hover:bg-amber-300'>
              Done
            </button>
          </div>
        
      </div>
    </div>
  );
}
