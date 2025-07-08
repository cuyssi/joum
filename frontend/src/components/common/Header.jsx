import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center h-[10vh] bg-blue-500 px-4">
            <img src={logo} alt="Logo Joum" className="h-30" />
            
        </header>
    );
};

export default Header;
