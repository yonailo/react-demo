import MyComponent from "./MyComponent";

function List() {
  const names = [
    { name: "Olivier Laveille", color: "red" },
    { name: "Juan Rodriguez", color: "vert" },
    { name: "Styve Ganocheau", color: "blue" },
  ];

  const employeesList = () => {
    let comps = names.map(({ name, color }) => {
      const key = crypto.randomUUID();
      return <MyComponent key={key} name={name} color={color} />;
    });

    return comps;
  };

  return <>{employeesList()}</>;
}

export default List;
