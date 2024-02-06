const Patient = (props) => {
  console.log(props);
  return (
    <>
      <h1>Profile Information</h1>

      <p> Name: {props.name} </p>

      <p> Age: {props.age} </p>

      {props.children}
    </>
  );
};
export default Patient;
