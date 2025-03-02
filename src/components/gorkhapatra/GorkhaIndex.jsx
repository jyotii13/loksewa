import React, {useState} from 'react'
import GorkhaPatra from './GorkhaPatra';
import SamacharNepal from './SamacharNepal';

const GorkhaIndex = () => {
    const [activeTab, setActiveTab] = useState('gorkha');

  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-gray-100 py-8 px-3 md:px-32 ">
      {/* Tab Buttons */}
      <div className="flex justify-center bg-gray-200 rounded-lg mb-4">
        <button
          onClick={() => handleTabClick('gorkha')}
          className={`
            px-4 py-1 flex-1 mx-2 rounded-lg focus:outline-none
            ${activeTab === 'gorkha' ? 'bg-white text-black shadow-md flex-grow' : 'text-gray-800'}
          `}
        >
            
          Gorkha Patra
        </button>
        <button
          onClick={() => handleTabClick('samachar')}
          className={`
            px-4 py-1 flex-1 mx-2 rounded-lg focus:outline-none
            ${activeTab === 'samachar' ? 'bg-white text-black shadow-md flex-grow' : 'text-gray-800'}
          `}
        >
          Nepal Samachar Patra
        </button>
      </div>

      {/* Conditionally Render Each Component */}
      {activeTab === 'gorkha' && <GorkhaPatra/>}
      {activeTab === 'samachar' && <SamacharNepal />}
    </div>
  )
}

export default GorkhaIndex