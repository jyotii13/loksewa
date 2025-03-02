import React from 'react'
import { AiOutlineFile } from 'react-icons/ai';

const Central = () => {
    const notices = [
        {
            title: 'नायब सुब्बा वा सो सरह, जेठता र कार्यसम्पादन मूल्याङ्कन, प्रशासन, सा.प्र. , (सोलुखुम्बु)',
            description: '2081-10-29',
            date: 'Number of posts: 4',
        },
        {
            title: 'नायब सुब्बा वा सो सरह, जेठता र कार्यसम्पादन मूल्याङ्कन, प्रशासन, सा.प्र. , (भोजपुर)',
            description: '2081-10-29',
            date: 'Number of posts: 4',
        },
        {
            title: 'नायब सुब्बा वा सो सरह, जेठता र कार्यसम्पादन मूल्याङ्कन, प्रशासन, लेखा, (ओखलढुंगा)',
            description: '2081-10-29',
            date: 'Number of posts: 4',
        },
        {
            title: 'नायब सुब्बा वा सो सरह, जेठता र कार्यसम्पादन मूल्याङ्कन, प्रशासन, सा.प्र. , (भोजपुर)',
            description: '2081-10-29',
            date: 'Number of posts: 4',
        },
        {
            title: 'नायब सुब्बा वा सो सरह, जेठता र कार्यसम्पादन मूल्याङ्कन, प्रशासन, सा.प्र. , (संखुवासभा)',
            description: '2081-10-29',
            date: 'Number of posts: 4',
        },
        {
            title: 'नायब सुब्बा वा सो सरह, जेठता र कार्यसम्पादन मूल्याङ्कन, न्याय, न्याय, (उच्च अदालत विराटनगर वा अन्तर्गतका इजलासहरू)',
            description: '2081-10-29',
            date: 'Number of posts: 4',
        },
        {
            title: 'नायब सुब्बा वा सो सरह, जेठता र कार्यसम्पादन मूल्याङ्कन, प्रशासन, सा.प्र. , (भोजपुर)',
            description: '2081-10-29',
            date: 'Number of posts: 4',
        },
        {
            title: 'नायब सुब्बा वा सो सरह, जेठता र कार्यसम्पादन मूल्याङ्कन, प्रशासन, सा.प्र. , (संखुवासभा)',
            description: '2081-10-29',
            date: 'Number of posts: 4',
        },
    ];
    return (
        <div className="w-full">
            {/*  <h2 className="text-2xl font-bold mb-4">Central</h2>*/}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {notices.map((notice, index) => (
                    <div key={index}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition border-l-4 border-blue-500">
                        <div className="flex gap-2">
                            <div>
                                <AiOutlineFile className="text-blue-500 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg mb-2">{notice.title}</h3>
                                <p className="text-gray-500 text-sm">{notice.description}</p>
                                <p className="text-gray-500 text-sm">{notice.date}</p>
                            </div>
                        </div>

                        {/* <button className="mt-4 bg-blue-100 text-blue-600 py-1 px-3 rounded flex items-center">
                        View PDF
                    </button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Central