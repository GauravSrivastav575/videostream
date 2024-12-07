import React, { useEffect, useState } from "react";

function MissingPersonList() {
  const [lists, setLists] = useState([
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        let result = await fetch("http://192.168.45.24:5000/listReport");
        result = await result.json();
        if (result.success) {
          setLists(result.data);
        }
      } catch (err) {
        console.log("error: ", err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="">
      <div className="py-3 text-center text-4xl font-bold text-gray-800">
        Missing Person List
      </div>
      <div className="flex flex-wrap mx-auto gap-2 bg-gray-300 w-3/4 justify-center items-center">
        {lists.map((list, index) => (
          <div className="w-60 bg-red-400 rounded-xl" key={index}>
            <div className="w-full h-80 flex justify-center items-center">
            <img src={list.url} alt="img" className="w-full object-contain rounded-xl" /></div>
            <div className="p-2 text-center">{list.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissingPersonList;
