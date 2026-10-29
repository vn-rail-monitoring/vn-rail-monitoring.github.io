# RAIL MONITOR — Website giới thiệu dự án

Website tĩnh (HTML/CSS/JavaScript), responsive và sẵn sàng để đăng lên **GitHub Pages** mà không cần build, npm hay backend.

## Nội dung

- Giới thiệu định hướng nghiên cứu giải pháp theo dõi, giám sát hành trình đoàn tàu theo thời gian thực ứng dụng IoT, GIS và AI.
- Công nghệ, kiến trúc, 6 nhóm chức năng chính, giao diện giám sát minh họa, sản phẩm khoa học và công nghệ dự kiến, định hướng ứng dụng.
- Thông tin được viết dựa trên phụ lục `PhuLucKCDSVN.pdf` (5 trang) do người dùng cung cấp.

**Lưu ý:** Các chỉ tiêu là yêu cầu nhiệm vụ, không phải thành tựu đã nghiệm thu. Ảnh tạo bằng AI. Dashboard không hiển thị dữ liệu vận hành thực tế. `RAIL MONITOR` là tên hiển thị đề xuất, chưa được xác nhận là tên chính thức.

## Chạy website trên máy

Mở `index.html` trong trình duyệt; hoặc dùng web server tại thư mục gốc:

```sh
python3 -m http.server 8000
```

Truy cập http://localhost:8000.

## Triển khai GitHub Pages

Website được xuất bản tại **https://vn-rail-monitoring.github.io/** từ repository
`vn-rail-monitoring/vn-rail-monitoring.github.io`.

- Repository: **Public**.
- Nguồn xuất bản: **Deploy from a branch**, nhánh **`main`**, thư mục **`/ (root)`**.
- Mỗi lần cập nhật nhánh `main`, GitHub Pages tự xây dựng và xuất bản lại website.
- Xem kết quả tại tab `Actions` → **pages build and deployment**.

Trang sử dụng HTML/CSS/JavaScript tĩnh, không cần npm, build hay backend.

## Cấu trúc

```
index.html
styles.css
script.js
.nojekyll
assets/
  images/       # WebP được tạo trước và lưu lại
  diagrams/     # SVG có thể chỉnh sửa
README.md
```

## Điều chỉnh nội dung

- Chỉnh văn bản trong `index.html`.
- Chỉnh màu sắc, bố cục, responsive trong `styles.css`.
- Chỉnh menu di động và hiệu ứng cuộn trong `script.js`.
- Thay `assets/` bằng tài nguyên đã được duyệt, giữ nguyên đường dẫn hoặc sửa lại `src`.
- Trước khi công khai: xác minh tên chính thức, đơn vị chủ trì, đại diện liên hệ, kết quả nghiên cứu nếu có và quyền sử dụng hình ảnh.
