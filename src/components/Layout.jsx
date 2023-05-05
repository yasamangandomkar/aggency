import Navbar from "./Navbar"

const Layout = ({ children }) => {

    return (
        <div className="px-2 md:px-8 lg:px-12 ">
            <Navbar />
            <main>{children}</main>

        </div>
    )
}

export default Layout