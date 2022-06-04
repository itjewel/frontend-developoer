export default function Button({ children }) {
    return (<button className="button" type="submit">
        {children}
    </button>);
}