import React from 'react';
import { Counter } from '../ui/counter';


function Count() {
  return (
    <div className=" bg-[#FEFEFE] flex items-center justify-center w-full">
      <div className="bg-[#FEFEFE] rounded-lg px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={10} label="Years of Experience" />
          <Counter end={15} label="Countries" />
          <Counter end={200} label="Universities" />
          <Counter end={400} label="Global Admissions" />
        </div>
      </div>
    </div>
  );
}

export default Count;