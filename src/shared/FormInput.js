const FormInput = ({ feild_name, placeHolder, id, onChange, value }) => {
  return (
    <div
      className={id}
      style={{
        display: "grid",
        gridTemplateColumns: "90px 250px",
        alignItems: "center",
      }}
    >
      <div>
        <label style={{ fontSize: "20px" }}> {feild_name} </label>
      </div>
      <div>
        <input
          id={id}
          name={feild_name}
          style={{ fontSize: "20px" }}
          type="text"
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default FormInput;
