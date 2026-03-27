import React, { useEffect, useState } from 'react'
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import SearchAndFilters from '../components/SearchAndFilters'
import UserCard from '../components/UserCard';
import SkeletonLoader from '../components/SkeletonLoader';

const sortUsers = (users, sortOrder) => {
  return [...users].sort((a, b) => {
    const nameCompare = sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);

    if (nameCompare !== 0) {
      return nameCompare;
    }

    if (a.company && b.company) {
      return sortOrder === 'asc'
        ? a.company.name.localeCompare(b.company.name)
        : b.company.name.localeCompare(a.company.name);
    }

    return 0;
  });
};

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [reloadKey, setReloadKey] = useState(0);

  const toggleSortOrder = () => {
    const updateOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    setSortOrder(updateOrder);
  }

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Failed to fetch user list.');
        }

        const usersList = await response.json();
        setUsers(usersList);
        setError(null);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    getUsers();

    return () => { };
  }, [reloadKey]);

  useEffect(() => {
    const nextUsers = users.filter(user => {
      const searchLower = search.toLowerCase();
      return user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower);
    });

    setFilteredList(sortUsers(nextUsers, sortOrder));
  }, [users, sortOrder, search])

  const handleRetry = () => {
    setReloadKey((currentKey) => currentKey + 1);
  };

  return (
    <div className='h-[calc(100vh-64px)] mb-3'>
      <div className=''>
        <div className='w-11/12 mx-auto max-md:hidden mt-6'>
          <h1 className='text-2xl font-semibold text-[#2A3439] mb-1'>User Directory</h1>
          <p className='text-sm text-[#566166]'>Manage and curate members within the Precision ecosystem.</p>
        </div>
        <SearchAndFilters search={search} setSearch={setSearch} sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
        {loading && <SkeletonLoader />}
        {!loading && error && (
          <ErrorState
            title='Unable to load users'
            message={error.message || 'An unexpected error occurred while fetching the user list.'}
            onRetry={handleRetry}
          />
        )}
        {!loading && !error && filteredList.length === 0 && (
          <EmptyState
            title={search ? 'No matching users' : 'No users available'}
            message={search
              ? 'Try changing your search term to see more results.'
              : 'There are no users available to display right now.'}
          />
        )}
        {!loading && !error && filteredList.length > 0 && (
          <ul className='w-11/12 list-none mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 mt-6'>
            {filteredList.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dashboard