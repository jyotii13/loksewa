import React, { useState, useEffect } from 'react'

const NepalSamachar = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = '/api/loksewa/nepal-samachar-patra/';

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched data:', data);
                setItems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch Data', err);
                setError(err);
                setLoading(false);
            })

    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full">
                </div>
            </div>
        );
    }

    if(error){
        return <div className="p-4 text-red-600 ">Error: {error.message}</div>;    
    }

    return (
        < div >
            {
                items.map((item) => (
                    <div
                        key={item.id}
                        className="border p-4 mb-4 rounded shadow-sm flex flex-col md:flex-row"
                    >
                        <div className="md:w-2/3 mb-4 md:mb-0 md:pr-4">
                            <iframe
                                src={item.file}
                                alt={item.title}
                                className="w-full h-44 object-cover rounded"
                            />
                        </div>

                        <div className="md:w-2/3 flex flex-col justify-between">
                            <div>
                                {item.type && (
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-2">
                                        {item.type.toUpperCase()}
                                    </span>
                                )}
                                
                                {/* Title & Date */}
                                <h2 className="font-bold text-lg mt-0">{item.title}</h2>
                                <p className="text-gray-500 text-sm">{item.nepali_date}</p>
                            </div>

                            {/* View More button */}
                            <div className="mt-4">
                                <button className="bg-secondary1 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NepalSamachar