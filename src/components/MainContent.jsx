import React, { useState } from 'react'
import Central from './sections/Central';
import Province from './sections/Province';

export const MainContent = () => {
  const [activeTab, setActiveTab] = useState('Central');

  const tabs = ['Central', 'Province']

  return (
    <div className="bg-gray-100 py-8 px-3 md:px-32">
      <div className="flex justify-center bg-gray-200 rounded-lg mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 flex-1 mx-2 rounded-lg focus:outline-none ${activeTab === tab ? 'bg-white shadow-md flex-grow' : 'bg-gray-200'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Central' && <Central />}
      {activeTab === 'Province' && <Province />}

      <button
        className="fixed bottom-6 right-6 bg-black text-white rounded flex items-center space-x-2 shadow-lg hover:bg-gray-800 focus:outline-none transition px-4 py-2 z-50"
        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.neptechpal.loksewatayari&pli=1', '_blank')}
      >

        Download App
      </button>

    </div>
  )
}
