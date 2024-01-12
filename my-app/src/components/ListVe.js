import "../App.css";
import ThongTinNguoiMua from "./ThongTinNguoiMua";

function ListVe() {
    return (
        <div className="listve">
            <div className="content">
                <div className="comments_title">
                    <h2 className="title">
                        Vé yêu thương - Xuân Tình Nguyện 2024 "Đầy"
                    </h2>
                    <p className="desc">
                        Cảm ơn vì sự đóng góp của mọi người cho chiến dịch lần
                        này
                    </p>
                </div>

                <div className="list">
                   <ThongTinNguoiMua />
                   <ThongTinNguoiMua />
                   <ThongTinNguoiMua />
                   <ThongTinNguoiMua />
                   <ThongTinNguoiMua />
                   <ThongTinNguoiMua />
                   <ThongTinNguoiMua />
                </div>
            </div>
        </div>
    );
}

export default ListVe;
