import './SideMenu.css'

function SideMenu({ children }) {
    return (
        <div className="btn-wrapper">{ children }</div>
    )
}

export default SideMenu;