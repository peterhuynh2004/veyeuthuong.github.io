import avatar from "../img/Avatar.png";
import logo from "../img/XTNwhite.png";
import "../App.css";

function Logo() {
    return (
        <div className="parent">
            <div className="content">
                <div className="nav">
                    <img className="Avatar" src={avatar} alt="Avatar" />
                    <img
                        className="logo"
                        src={logo}
                        alt="Logo trường ĐH Mở TP.HCM"
                    />
                </div>
            </div>
        </div>
    );
}

export default Logo;
