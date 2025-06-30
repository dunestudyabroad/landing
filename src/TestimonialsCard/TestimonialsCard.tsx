import Image from 'next/image';
import React from 'react';

interface TestimonialCardProps {
  name: string;
  text: string;
  avatarUrl: string;
  country: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, avatarUrl, country }) => {
  return (
    <div className="bg-[#FAF1FD] p-6 rounded-lg shadow-sm h-full w-full flex flex-col justify-between transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col flex-grow">
        <div className="mb-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
            <Image
              src={avatarUrl}
              alt="/avtar.avif"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <p className="text-gray-800 mb-4 flex-grow overflow-y-auto">{text}</p>
      </div>
      <p className="text-gray-700 font-medium">- {name}</p>
      <p className="text-gray-700 font-medium">{country}</p>
    </div>
  );
};

export default TestimonialCard;
