import '../css/Pagination.css';
import RenderProjects from './RenderProjects';
import { useState } from 'react';

function Pagination(props) {

    const itemsPerPageConfig = 3;

    let pages = Math.ceil(props.data.length / itemsPerPageConfig);
    let [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage(currentPage++);
    }

    function goToPreviousPage() {
        setCurrentPage(currentPage--);
    }

    function changePage(e) {
        setCurrentPage(e.target.textContent);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * itemsPerPageConfig - itemsPerPageConfig;
        const endIndex = (startIndex) + itemsPerPageConfig;
        return props.data.slice(startIndex, endIndex);
    };

    const getPaginatedGroup = () => {
        let start = Math.floor((currentPage - 1) / itemsPerPageConfig) * itemsPerPageConfig;
        return new Array(currentPage).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div>
            {getPaginatedData().map((d, index) => {
                return <RenderProjects
                    key={index}
                    data={d}
                />
            })}

            {/* Pagination Page Selectors */}
            <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    Prev
                </button>

                {getPaginatedGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        // Get classname here to disable the correct button on correct conditions
                        className={`paginationItem ${currentPage === item || item < pages ? 'active' : 'disabled'}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages || currentPage === 0 ? 'disabled' : ''}`}
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export default Pagination;
