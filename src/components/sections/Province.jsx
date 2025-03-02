import React, { useEffect, useState } from 'react'
import { BsFileEarmark, BsFileEarmarkText } from 'react-icons/bs';

const Province = () => {
  const [activeRegion, setActiveRegion] = useState('Gandaki');
  const [activeCategory, setActiveCategory] = useState('');
  const [filteredNotices, setFilteredNotices] = useState([])

  const regions = ['Gandaki', 'Bagmati', 'Lumbini', 'Sudurpashchim', 'Koshi', 'Madhesh'];

  const categoriesByProvince = {
    Gandaki: [
      { name: 'Vacancy', count: 276 },
      { name: 'Swikrit Namawali', count: 40 },
      { name: 'Likhit Natija', count: 10 },
      { name: 'Sifaris', count: 20 },
      { name: 'Gandaki New Vacancy', count: 5 },
    ],
    Bagmati: [
      { name: 'Barsik KaryaTalika', count: 4 },
      { name: 'Swikrit Namawali', count: 10 },
      { name: 'Pradesh Taha ko Bigyapan', count: 9 },
      { name: 'Isthaniya Tahako Lagi Bigyapan', count: 10 },
      { name: 'Pariksha Kendra', count: 10 },
    ],
    Lumbini: [
      { name: 'Swikrit Namawali', count: 10 },
      { name: 'Barsik KaryaTalika', count: 4 },
      { name: 'Pradesh Taha ko Bigyapan', count: 9 },
      { name: 'Isthaniya Tahako Lagi Bigyapan', count: 10 },
      { name: 'Pariksha Kendra', count: 10 },
    ],
    Koshi: [
      { name: 'Pariksha Kendra', count: 10 },
      { name: 'Barsik KaryaTalika', count: 4 },
      { name: 'Swikrit Namawali', count: 10 },
      { name: 'Pradesh Taha ko Bigyapan', count: 9 },
      { name: 'Isthaniya Tahako Lagi Bigyapan', count: 10 },
    ],
    Madhesh: [
      { name: 'Isthaniya Tahako Lagi Bigyapan', count: 10 },
      { name: 'Barsik KaryaTalika', count: 4 },
      { name: 'Swikrit Namawali', count: 10 },
      { name: 'Pradesh Taha ko Bigyapan', count: 9 },
      { name: 'Pariksha Kendra', count: 10 },
    ],

  };

  const noticesData = {
    Gandaki: {
      Vacancy: [
        {
          title: 'गण्डकी प्रदेश - Vacancy 2',
          date: '2081-11-15',
          posts: 'Number of posts: 3',
        },
        {
          title: 'गण्डकी प्रदेश - Vacancy 1',
          date: '2081-10-29',
          posts: 'Number of posts: 5',
        },
        {
          title: 'गण्डकी प्रदेश - Vacancy 2',
          date: '2081-11-15',
          posts: 'Number of posts: 3',
        },
        {
          title: 'गण्डकी प्रदेश - Vacancy 2',
          date: '2081-11-15',
          posts: 'Number of posts: 3',
        },
        {
          title: 'गण्डकी प्रदेश - Vacancy 2',
          date: '2081-11-15',
          posts: 'Number of posts: 3',
        },
        {
          title: 'गण्डकी प्रदेश - Vacancy 2',
          date: '2081-11-15',
          posts: 'Number of posts: 3',
        },
        {
          title: 'गण्डकी प्रदेश - Vacancy 2',
          date: '2081-11-15',
          posts: 'Number of posts: 3',
        },
      ],
      'Swikrit Namawali': [
        {
          title: 'गण्डकी प्रदेश - Swikrit Namawali 1',
          date: '2081-09-01',
          posts: 'Number of posts: 2',
        },
      ],
    },
    Koshi: {
      'Barsik KaryaTalika': [
        {
          title: 'कोशी प्रदेश - Barsik KaryaTalika 1',
          date: '2081-07-10',
          posts: 'Number of posts: 4',
        },
      ],
      'Pariksha Kendra': [
        {
          title: 'कोशी प्रदेश - Pariksha Kendra 1',
          date: '2081-08-12',
          posts: 'Number of posts: 6',
        },
        {
          title: 'कोशी प्रदेश - Pariksha Kendra 2',
          date: '2081-09-05',
          posts: 'Number of posts: 2',
        },
      ],
    },
  };

  //setting first category as active
  useEffect(() => {
    const firstCategory = categoriesByProvince[activeRegion]?.[0]?.name;
    if (firstCategory) {
      setActiveCategory(firstCategory);
    }
  }, [activeRegion]);

  //filtering notices based on active region and category

  useEffect(() => {
    const notices = noticesData[activeRegion]?.[activeCategory] || [];
    setFilteredNotices(notices);
  }, [activeRegion, activeCategory]);

  return (
    <>
      <div className="flex justify-start rounded-lg mb-4 bg-gray-200 overflow-x-auto px-3 md:justify-center">
        <div className="flex space-x-2 min-w-max">
        {regions.map((region) => (
          <button key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-4 py-1 mx-2 rounded-lg focus:outline-none ${activeRegion === region ? 'bg-white shadow-md' : 'bg-gray-200'}`}>
            {region}
          </button>
        ))}
      </div>
      </div>

      <div className=" mx-auto flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full bg-white rounded-lg container md:w-3/4">
          <h2 className="text-2xl font-bold mx-5 mb-4">{activeCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-4">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 p-4">
                  <div className="flex flex-row">
                    <div>
                      <BsFileEarmarkText className="w-6 h-6 text-blue-500 mr-2" />
                    </div>
                    <div className="flex flex-col gap-4" >
                      <h3 className="text-lg ">{notice.title}</h3>
                      <p className="text-gray-500 text-sm">{notice.date}</p>
                      <button className="w-auto inline-flex items-center bg-blue-100 text-blue-700 rounded px-3 py-1 ">View PDF</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-600 rounded-lg p-4">
                No PDF document available for this category.
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-6 md:sticky md:top-12 md:overflow-y-auto md:self-start">
          <h3 className="font-bold text-lg mb-2">Categories</h3>
          <ul className="space-y-2">
            {categoriesByProvince[activeRegion]?.length > 0 ? (

              categoriesByProvince[activeRegion]?.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={`cursor-pointer flex justify-between items-center p-2 rounded ${activeCategory === category.name ? 'bg-blue-100 text-blue-600' : ''
                    }`}>
                  <span>{category.name}</span>
                  <span className="bg-gray-200 text-gray-70 rounded-full px-2 text-sm">
                    {category.count}
                  </span>
                </li>
              ))
            ) : (
              <div className="text-gray-600 rounded-lg p-4">
                No category available for this province.
              </div>

            )}
          </ul>
        </div>

      </div>
    </>
  );
};

export default Province