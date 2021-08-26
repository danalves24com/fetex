import PropTypes from "prop-types"

const Navbar = ({ text, onClick }) => {
    return (
        <button
        onClick={onClick}
        className={"mx-5 my-2 border-b border-gray-500 px-2 py-1"}
        >
        {text}
        </button>
    )
}
//"border-green-500"
export default Navbar
