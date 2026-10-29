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

## Đưa lên GitHub Pages (Organization site)

1. Tạo GitHub Organization với tên đăng ký thực tế, ví dụ `vn-rail-monitoring` nếu còn khả dụng.
2. Tạo repository **Public** tên `TEN_ORG.github.io`, thay `TEN_ORG` bằng tên Organization thực tế.
3. Upload **nội dung bên trong thư mục website này** vào root của nhánh `main`: `index.html`, `styles.css`, `script.js`, `assets/`, `.nojekyll` và `README.md`.
4. Trong `Settings → Pages`, tại `Build and deployment → Source`, chọn **GitHub Actions**. Repository đã kèm `.github/workflows/deploy.yml` để tự động deploy mỗi lần push lên `main`.
5. Mở tab `Actions` và kiểm tra workflow **Publish RAIL MONITOR to GitHub Pages** hoàn tất thành công. Website sẽ hiển thị tại `https://TEN_ORG.github.io/`.

Nếu chọn `Deploy from a branch` thay vì GitHub Actions, có thể cấu hình nguồn `main / (root)` do mã nguồn website đã nằm sẵn ở thư mục gốc. Không sử dụng đồng thời hai cách triển khai.

Nếu sử dụng `git`, tại thư mục này:

```sh
git init
git add .
git commit -m "Initial Rail Monitor website"
git branch -M main
git remote add origin https://github.com/TEN_ORG/TEN_ORG.github.io.git
git push -u origin main
```

Bạn cần thay thế tên Organization bằng tên được đăng ký trên GitHub, có quyền tạo repository và quyền cấu hình Pages.

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
.github/workflows/deploy.yml
```

## Điều chỉnh nội dung

- Chỉnh văn bản trong `index.html`.
- Chỉnh màu sắc, bố cục, responsive trong `styles.css`.
- Chỉnh menu di động và hiệu ứng cuộn trong `script.js`.
- Thay `assets/` bằng tài nguyên đã được duyệt, giữ nguyên đường dẫn hoặc sửa lại `src`.
- Trước khi công khai: xác minh tên chính thức, đơn vị chủ trì, đại diện liên hệ, kết quả nghiên cứu nếu có và quyền sử dụng hình ảnh.