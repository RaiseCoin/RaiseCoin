// 'use client'
// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';

// const UserList = ({ userList }) => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredUsers = userList.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>User List</h2>
//       <input
//         type="text"
//         placeholder="Search users..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul>
//         {filteredUsers.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // export default UserList;


// const Graph = ({ data }) => {
//   const chartData = {
//     labels: data.map(item => item.month),
//     datasets: [{
//       label: 'Investments',
//       data: data.map(item => item.amount),
//       backgroundColor: 'rgba(75,192,192,0.2)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderWidth: 1
//     }]
//   };

//   return (
//     <div>
//       <h2>Investments Graph</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// // export default Graph;



// // import Graph from './Graph'; // Import your graph component
// // import UserList from './UserList'; // Import your user list component

// const Page = () => {
//   // Sample data for investments
//   const investmentsData = [
//     { month: 'January', amount: 1000 },
//     { month: 'February', amount: 1500 },
//     { month: 'March', amount: 2000 },
//     // Add more data as needed
//   ];

//   // Sample data for user list
//   const [userList, setUserList] = useState([
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//     // Add more users as needed
//   ]);

//   // Handler for searching users
//   const handleSearch = (searchTerm) => {
//     // Perform search logic here and update userList state accordingly
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       {/* Graph of investments */}
//       <Graph data={investmentsData} />

//       {/* User list with search feature */}
//       <UserList userList={userList} onSearch={handleSearch} />
//     </div>
//   );
// };

// export default Page;


export default function Page() {
  return (
    <div>
      <h1>Founders Portfolio</h1>
      <p>Coming soon...</p>
    </div>
  );
}