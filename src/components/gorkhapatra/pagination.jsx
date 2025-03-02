import React from 'react'

const Pagination = ({ page, hasMore, onPrevious, onNext }) => {
    return (
        <div className="flex items-center justify-center mt-4">
            <button
                onClick={onPrevious}
                disabled={page === 1}
                className={`
                    mx-1 px-3 py-1 rounded-full transition-colors 
                    ${page === 1
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-200'
                    }
                  `}
            >
               &lt;
            </button>
            <span className="flex items-center">Page {page}</span>
            <button
                onClick={onNext}
                disabled={!hasMore}
                className={`
                    mx-1 px-3 py-1 rounded-full transition-colors 
                    ${!hasMore
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-200'
                    }
                  `}

            >
               &gt;
            </button>

        </div>
    )
}

export default Pagination