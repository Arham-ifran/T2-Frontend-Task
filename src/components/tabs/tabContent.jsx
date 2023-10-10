import { Link } from "react-router-dom";

const TabNavItem = ({ id, title, activeTab, setActiveTab, link }) => {

    //Handle Tab
    const handleClick = () => {
        setActiveTab(id);
    };
    return (
        <Link to={link} style={{ paddingLeft: '10px', textDecoration: 'none', color: 'black', fontSize: '24px', fontWeight: 'bold' }}>

            <li className="nav-item" style={{ paddingLeft: '10px', textDecoration: 'none' }}>
                <span role="button" onClick={handleClick} className={activeTab === id ? "active nav-link d-inline-flex" : "nav-link d-inline-flex"}>
                    {title}
                </span>
            </li>
        </Link>
    );
};
export default TabNavItem;
