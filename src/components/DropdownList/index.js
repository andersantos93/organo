import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.changed(event.target.value)}
        required={props.required}
        value={props.value}
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
