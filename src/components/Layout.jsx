import Navbar from "./Navbar"

const Layout = ({ Children }) => {
    return (
        <div className="px-4 md:px-8 lg:px-12">
            <Navbar />
            {Children}
        </div>
    )
}

export default Layout