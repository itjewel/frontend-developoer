export default function TextInput({ icon, ...rest }) {
    return (<div className="textInput">
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
    </div>);
}