export default function CheckBox({ text }) {
    return (<label>
        <input type="checkbox" />
        <span>{text}</span>
    </label>);
}