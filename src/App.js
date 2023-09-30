import { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const dataHandler = (data) => {
    if (!data) return setIsValid(false);
    if (!data.name || !data.age) return setIsValid(false);
    setIsValid(true);

    setUsersData((prevData) => {
      const x = [...prevData];
      x.push(data);
      return x;
    });
  };

  return (
    <div>
      <AddUser onSubmitData={dataHandler} />
      {!isValid && alert('Data not valid!') && setIsValid(true)}
      {usersData.length === 0 ? (
        <p className="mt-8 text-sm text-center">Data not found </p>
      ) : (
        <UsersList data={usersData} />
      )}
    </div>
  );
}

export default App;
