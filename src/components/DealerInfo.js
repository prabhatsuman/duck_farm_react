import React, { useState, useEffect } from 'react';

const DealerInfo = () => {
  const [dealers, setDealers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDealers, setFilteredDealers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dealersPerPage] = useState(5);

  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const response = await fetch('http://127.0.0.1/api/dealer_info');
        if (response.ok) {
          const data = await response.json();
          setDealers(data);
          setFilteredDealers(data);
        } else {
          console.error('Failed to fetch dealers');
        }
      } catch (error) {
        console.error('Error fetching dealers:', error);
      }
    };

    fetchDealers();
  }, []);

  // Pagination
  const indexOfLastDealer = currentPage * dealersPerPage;
  const indexOfFirstDealer = indexOfLastDealer - dealersPerPage;
  const currentDealers = filteredDealers.slice(indexOfFirstDealer, indexOfLastDealer);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Search functionality
  useEffect(() => {
    const results = dealers.filter(dealer =>
      dealer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDealers(results);
  }, [searchTerm, dealers]);

  return (
    <div className="w-full">
    
      <div className="m-auto">
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search dealers..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentDealers.map(dealer => (
              <tr key={dealer.id}>
                <td className="px-6 py-4 whitespace-nowrap">{dealer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dealer.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dealer.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dealer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dealer.phone_number}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dealer.dealer_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{indexOfFirstDealer + 1}</span> to{' '}
              <span className="font-medium">{Math.min(indexOfLastDealer, filteredDealers.length)}</span> of{' '}
              <span className="font-medium">{filteredDealers.length}</span> results
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredDealers.length / dealersPerPage)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DealerInfo;
