const UsersList = (props) => {
  return (
    <div className="mt-8 flex flex-col w-full justify-center items-center">
      <div className="w-1/2 p-6 rounded-lg bg-gray-200 shadow-lg space-y-3">
        {props.data.map((el, i) => (
          <div
            key={i}
            className="w-full flex bg-gray-50 rounded-lg px-3 py-1.5"
          >
            <div className="grow">{el.name}</div>
            <div>{el.age}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
