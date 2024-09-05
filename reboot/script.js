// Lấy phần tử nút chuyển đổi chế độ sáng/tối
const toggleButton = document.querySelector("#toggle-theme"); // Chỉ lấy một nút
// Lấy phần tử body của trang web
const body = document.body;

// Thêm sự kiện lắng nghe cho nút
toggleButton.addEventListener("click", () => {
    // Chuyển đổi lớp CSS cho body giữa chế độ sáng và tối
    body.classList.toggle("body-dark-mode");
    // Chuyển đổi lớp CSS cho nút giữa chế độ sáng và tối
    toggleButton.classList.toggle("button-dark-mode");
    toggleButton.classList.toggle("button-light-mode"); // Thêm dòng này

    // Đặt nội dung nút dựa trên chế độ
    toggleButton.textContent = body.classList.contains("body-dark-mode") ? "" : "";
});

// Lưu ý: Biểu tượng cho nút được định nghĩa trong file CSS (style.css)
// thông qua các lớp .button-light-mode và .button-dark-mode
