import "../App.css";

function ThongTinNguoiMua() {
    return (
        <div className="thongtin">
            <table className="table">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Số vé</th>
                        <th>MSSV/CCCD</th>
                        <th>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nguyễn Trần Minh Khoa</td>
                        <td>5</td>
                        <td>2251052053</td>
                        <td className="hidden-sdt">0983392146</td>
                    </tr>
                    <tr>
                        <td>Nguyễn Hữu Hoài Thanh Vân</td>
                        <td>5</td>
                        <td>2251052053</td>
                        <td className="hidden-sdt">0983392146</td>
                    </tr>
                    <tr>
                        <td>Nguyễn Văn A</td>
                        <td>5</td>
                        <td>2251052053</td>
                        <td className="hidden-sdt">0983392146</td>
                    </tr>
                    <tr>
                        <td>Nguyễn Văn A</td>
                        <td>5</td>
                        <td>2251052053</td>
                        <td className="hidden-sdt">0983392146</td>
                    </tr>
                    <tr>
                        <td>Nguyễn Văn A</td>
                        <td>5</td>
                        <td>2251052053</td>
                        <td className="hidden-sdt">0983392146</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

document.addEventListener("DOMContentLoaded", function () {
    var sdtElements = document.querySelectorAll(".hidden-sdt");
    sdtElements.forEach(function (element) {
        var originalText = element.textContent;
        var hiddenText =
            originalText.substring(0, originalText.length - 3) + "***";
        element.textContent = hiddenText;
    });
});

export default ThongTinNguoiMua;
