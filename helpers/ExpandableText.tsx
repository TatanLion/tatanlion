import React, { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxWords?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxWords = 15 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(' ');

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="text-md mt-2">
        {isExpanded ? text : words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '')}
      </p>
      {words.length > maxWords && (
        <button 
          onClick={toggleExpansion} 
          className="text-[#41d1ff] hover:underline mt-1 cursor-pointer"
        >
          {isExpanded ? 'View Less' : 'View More'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
