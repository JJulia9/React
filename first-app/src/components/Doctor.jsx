const Doctor = (props) => {
  return (
    <>
      <h1> Doctor Details </h1>

      <p> Doctor: {props.doctor} </p>

      <p> Nurse: {props.nurse} </p>
    </>
  );
};

export default Doctor;
