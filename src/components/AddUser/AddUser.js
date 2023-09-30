import { useState } from 'react';

const AddUser = (props) => {
  const [dataInput, setDataInput] = useState({ name: '', age: '' });

  const changeHandler = (input, value) => {
    setDataInput((prev) => {
      return { ...prev, [input]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitData(dataInput);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-1/2 h-64 bg-gray-200 rounded-lg shadow-lg mt-16 flex flex-col p-6">
        <form onSubmit={submitHandler} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-xs text-gray-500 font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 text-sm block focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Your name here..."
              type="text"
              onChange={(e) => changeHandler('name', e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs text-gray-500 font-medium" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Your age here..."
              type="number"
              onChange={(e) => changeHandler('age', e.target.value)}
            />
          </div>

          <div className="w-full flex justify-end">
            <button className="mt-3 bg-sky-500 text-white text-sm rounded-md px-6 py-1.5 hover:shadow-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
