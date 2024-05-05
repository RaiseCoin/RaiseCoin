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
'use client'
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function Page() {
  const [read, setRead] = useState(true)
  const [loading, setLoading] = useState(true)
  const [first, setFirst] = useState('')
  const [email, setEmail] = useState('')
  const [stName, setStName] = useState('')
  const [sub, setSub] = useState('')
  const [summary, setSummary] = useState('')
  const [overview, setOverview] = useState('')
  const [inv, setInv] = useState('')
  const [prevFund, setPrevFund] = useState('')
  const [price, setPrice] = useState('')
  const [btnText, setBtnText] = useState("Submit");

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/startups/${'10'}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse, "res")
        if (jsonResponse.data) {
          setFirst(jsonResponse.data.attributes.name)
          setEmail(jsonResponse.data.attributes.email)
          setStName(jsonResponse.data.attributes.startupName)
          setSub(jsonResponse.data.attributes.subtitle)
          setSummary(jsonResponse.data.attributes.summary)
          setOverview(jsonResponse.data.attributes.overview)
          setInv(jsonResponse.data.attributes.minInvestment)
          setPrevFund(jsonResponse.data.attributes.previousFunding)
          setPrice(jsonResponse.data.attributes.pricePerShare)
        }
        setLoading(false)
      }
      catch (error) {
        console.error("Error fetching data:", error);
        toast.error(`Error fetching data: ${error.message}`);
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async () => {
    setBtnText("Submitting...");
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/startups/${10}`;
    const payload = {
      data: {
        name: first,
        email: email,
        startupName: stName,
        subtitle: sub,
        summary: summary,
        overview: overview,
        minInvestment: inv,
        previousFunding: prevFund,
        pricePerShare: price,
      },
    };
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        toast.success("Updated Successfully!!")
      }
      setBtnText('Update')
    } catch (error) {
      console.error("Error during update:", error);
      toast.error(`Error during update: ${error.message}`);
    }
    setRead(true)
  }



  return (
    <div className="flex flex-col">

      <div className="flex justify-between items-start w-full">
        <p className="font-bold text-2xl text-green-600 mb-5">StartUp Overview</p>
        {read && <button onClick={() => { setRead(false) }} className="px-3 py-1 bg-green-300 text-green-600 font-bold text-sm rounded-lg hover:text-white hover:bg-green-600 duration-300">Edit</button>}
      </div>
      {!loading && <>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor={'first_name'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type={'text'}
              value={first}
              onChange={(e) => { setFirst(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              required
            />
          </div>
          <div>
            <label
              htmlFor={"email"}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {'Email address'}
            </label>
            <input
              type={"email"}
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              required
            />
          </div>
          <div>
            <label
              htmlFor={'startupName'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {'Startup Name'}
            </label>
            <input
              type={"text"}
              value={stName}
              onChange={(e) => { setStName(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              required
            />
          </div>
          <div>
            <label
              htmlFor={'subtitle'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {'SubTitle'}
            </label>
            <input
              type={"text"}
              value={sub}
              onChange={(e) => { setSub(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              required
            />
          </div>
          <div>
            <label
              htmlFor={'summmary'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {'Summmary'}
            </label>
            <input
              type={"text"}
              value={summary}
              onChange={(e) => { setSummary(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              required
            />
          </div>
          <div>
            <label
              htmlFor={'Overview'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {'Overview'}
            </label>
            <input
              type={"text"}
              value={overview}
              onChange={(e) => { setOverview(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              required
            />
          </div>
          <div>
            <label
              htmlFor={'Mininv'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {'Minimum Investment'}
            </label>
            <input
              type={"number"}
              value={inv}
              onChange={(e) => { setInv(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              placeholder="ETH"
              required
            />
          </div>
          <div>
            <label
              htmlFor={'prevFund'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {'Previous Funding'}
            </label>
            <input
              type={"number"}
              value={prevFund}
              onChange={(e) => { setPrevFund(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              placeholder="ETH"
              required
            />
          </div>
          <div>
            <label
              htmlFor={'pricepershare'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {'Price Per Share'}
            </label>
            <input
              type={"number"}
              value={price}
              onChange={(e) => { setPrice(e.target.value) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly={read}
              placeholder="ETH"
              required
            />
          </div>
        </div>
        {!read && <div className="w-full md:col-span-2 flex justify-start">
          <button className="bg-blue-700 text-white py-2 px-4" onClick={handleSubmit}>{btnText}</button>
        </div>}
      </>
      }
    </div>
  );
}