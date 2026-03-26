import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchAndFilters from '../components/SearchAndFilters'
import UserCard from '../components/UserCard';
import SkeletonLoader from '../components/SkeletonLoader';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    const updateOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    setSortOrder(updateOrder);
  }

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersList = await response.json();
        setUsers(usersList);
        setFilteredList(usersList.sort((a, b) => {
          let nameCompare = sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
          if (nameCompare !== 0) return nameCompare;
          if (a.company && b.company) {
            return sortOrder === 'asc' ? a.company.name.localeCompare(b.company.name) : b.company.name.localeCompare(a.company.name)
          }
          return 0;
        }))
        setError(null);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getUsers();

    return () => { };
  }, []);

  useEffect(() => {
    setFilteredList(users.filter(user => {
      const searchLower = search.toLowerCase();
      return user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower);
    }).sort((a, b) => {
      let nameCompare = sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      if (nameCompare !== 0) return nameCompare;
      if (a.company && b.company) {
        return sortOrder === 'asc' ? a.company.name.localeCompare(b.company.name) : b.company.name.localeCompare(a.company.name)
      }
      return 0;
    }))
  }, [users, sortOrder, search])

  return (
    <div className='h-[calc(100vh-64px)] mb-3'>
      <div className=''>
        <div className='w-11/12 mx-auto max-md:hidden mt-6'>
          <h1 className='text-2xl font-semibold text-[#2A3439] mb-1'>User Directory</h1>
          <p className='text-sm text-[#566166]'>Manage and curate members within the Precision ecosystem.</p>
        </div>
        <SearchAndFilters search={search} setSearch={setSearch} sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
        {loading && <SkeletonLoader />}
        {!loading && filteredList && (
          <ul className='w-11/12 list-none mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 mt-6'>
            {filteredList && filteredList.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dashboard