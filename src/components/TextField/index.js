import "./TextField.css";

const TextField = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const onChange = (event) => {
    props.changed(event.target.value);
  };

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onChange}
        required={props.required}
        placeholder={placeholderModified}
      />
    </div>
  );
};

export default TextField;
