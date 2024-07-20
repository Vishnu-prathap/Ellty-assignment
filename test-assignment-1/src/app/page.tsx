"use client";
import { useState } from 'react';

export default function Home() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([false, false, false, false]);

  const hasCheckedItem = checkedItems.some(item => item === true);

  const handleAllChange = (e: { target: { checked: any; }; }) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setCheckedItems(checkedItems.map(() => checked));
  };

  const handleItemChange = (index: number) => (e: { target: { checked: boolean; }; }) => {
    const newCheckedItems = checkedItems.slice();
    newCheckedItems[index] = e.target.checked;
    setCheckedItems(newCheckedItems);

    if (!e.target.checked) {
      setAllChecked(false);
    } else if (newCheckedItems.every((item) => item)) {
      setAllChecked(true);
    }
  };
const handleDoneSubmit = () =>{
setAllChecked(false)
setCheckedItems(checkedItems.map(() => false));
if(hasCheckedItem){
  alert("The selected pages are submitted");  
}
else{
  alert("Please select 1 or more pages to submit")
}
}

  return (
    <div className='flex flex-col items-center justify-center pt-5'>
      <div className='border-solid rounded-md border-t-1 shadow-lg py-[10px] gap-y-4 flex flex-col min-w-[370px] justify-center'>
        <div className='flex flex-row justify-between items-center py-[8px] pr-[15px] pl-[22px] '>
          <p className="font-normal text-sm">All pages</p>
          <input
            type='checkbox'
            className='text-blue-600 rounded-md w-[23px] h-[23px]'
            checked={allChecked}
            onChange={handleAllChange}
          />
        </div>
        <div className="flex flex-row justify-between items-center py-[8px] pr-[15px] pl-[22px]">
          <hr className='text-black w-[340px] border-t-1' />
        </div>

        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className='flex flex-row max-h-[164px] items-center justify-between py-[8px] pr-[15px] pl-[22px]'
              key={index}>
              <p className="font-normal text-sm">Page {item}</p>
              <input
                type='checkbox'
                className='text-blue-600 rounded-md w-[23px] h-[23px]'
                checked={checkedItems[index]}
                onChange={handleItemChange(index)}
              />
            </div>
          );
        })}
        <div className="flex flex-row justify-between items-center py-[8px] pr-[15px] pl-[22px]">
          <hr className='text-black w-[340px] border-t-1' />
        </div>

        <div className="py-[10px] px-[20px]">
          <button className='bg-amber-400 w-[340px] min-h-[40px] rounded-[4px] hover:bg-amber-300' onClick={handleDoneSubmit}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
