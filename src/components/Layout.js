import NavBar from "./NavBar";
export default function Layout({ children }) {
    return (<main className="main">
        <NavBar />
        {children}
        {/* <Footer/> */}
    </main>);
}