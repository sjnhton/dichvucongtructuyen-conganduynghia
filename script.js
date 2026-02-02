// Data for Public Services
const services = [
    {
        title: "Đăng ký xe trực tuyến toàn trình",
        icon: "fa-car",
        desc: "Thủ tục đăng ký xe lần đầu trực tuyến toàn trình cho xe sản xuất, lắp ráp trong nước.",
        guidelineImg: "images/dang-ky-xe-lan-dau.png",
        link: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-nganh-doc.html?ma_thu_tuc=1.012575"
    },
    {
        title: "Đổi giấy phép lái xe trực tuyến",
        icon: "fa-id-card",
        desc: "Thủ tục đổi giấy phép lái xe trực tuyến, không cần đến trực tiếp, nhận kết quả tại nhà.",
        guidelineImg: "images/doi-gplx.png",
        link: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-nganh-doc.html?ma_thu_tuc=3.000347"
    },
    {
        title: "Cấp lại giấy phép lái xe",
        icon: "fa-address-card",
        desc: "Thủ tục cấp lại giấy phép lái xe khi bị mất, hư hỏng hoặc hết hạn.",
        guidelineImg: "images/cap-lai-gplx.png",
        link: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-nganh-doc.html?ma_thu_tuc=3.000348"
    }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    setupForm();
});

function renderServices() {
    const grid = document.getElementById('servicesGrid');

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';

        // Use local image if available, else QR placeholder
        const imgContent = service.guidelineImg
            ? `<div class="service-image"><img src="${service.guidelineImg}" alt="${service.title}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-image fa-3x\\'></i>'"></div>`
            : `<div class="service-image"><i class="fas fa-image fa-3x"></i></div>`;

        card.innerHTML = `
            <div class="service-content">
                <i class="fas ${service.icon} card-icon"></i>
                <h3 class="service-title">${service.title}</h3>
                <p>${service.desc}</p>
                ${imgContent}
                <a href="${service.link}" target="_blank" class="service-link-btn">
                    <i class="fas fa-external-link-alt"></i> Tại đây
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setupForm() {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple Validation logic is handled by 'required' attributes in HTML
        // But we can add detailed logic here

        const formData = {
            name: document.getElementById('fullname').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            service: document.getElementById('service').value,
            notes: document.getElementById('notes').value
        };

        console.log("Dữ liệu đăng ký:", formData);

        // Show success message
        alert(`Đã đăng ký thành công!\n\nXin chào ${formData.name},\nLịch hẹn của bạn vào ngày ${formData.date} đã được ghi nhận.`);

        form.reset();
    });
}
