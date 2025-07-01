const Footer = () => {
    return (
        <footer className="flex justify-between px-4 text-white items-center text-xs h-[7%] bg-blue-400">
            <p>@2025 Joum</p>
            <div className="flex flex-col justify-center items-center">
                <p>Created by Any</p>
                <p><a href="https://github.com/cuyssi" target="_blank" className="text-blue-900 cursor-pointer">GitHub, </a><a href="https://www.linkedin.com/in/anabcastro/" target="_blank" className="text-blue-900 cursor-pointer">Linkedin</a></p>
            </div>
        </footer>
    );
};

export default Footer;
