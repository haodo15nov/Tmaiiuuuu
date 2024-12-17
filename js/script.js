// Số lượng trái tim nhỏ
const NUM_HEARTS = 50; // X3 lần số lượng trái tim
const HEART_SIZE = 35; // Kích thước trái tim nhỏ
const SAFE_RADIUS = 200; // Khoảng cách an toàn từ trung tâm (trái tim lớn)

const container = document.getElementById("floating-hearts");
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

// Hàm tạo vị trí ngẫu nhiên nhưng tránh khu vực trung tâm
function getRandomPosition() {
  let x, y, distance;
  do {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
  } while (distance < SAFE_RADIUS); // Đảm bảo không chạm trái tim lớn
  return { x, y };
}

// Tạo nhiều trái tim nhỏ
for (let i = 0; i < NUM_HEARTS; i++) {
  const heart = document.createElement("i");
  heart.className = "fas fa-heart small-heart";

  const { x, y } = getRandomPosition();
  heart.style.top = `${y}px`;
  heart.style.left = `${x}px`;

  // Kích thước ngẫu nhiên nhẹ
  const size = HEART_SIZE * (0.8 + Math.random() * 0.4); // Từ 80% đến 120%
  heart.style.fontSize = `${size}px`;

  // Thời gian hiệu ứng ngẫu nhiên
  const duration = 5 + Math.random() * 3;
  heart.style.animationDuration = `${duration}s`;

  container.appendChild(heart);
}
// Hàm hiển thị lá thư khi nhấn nút trái tim
// Hàm hiển thị lá thư khi nhấn nút trái tim
function showLetter() {
  const letter = document.getElementById("letter");
  const catButton = document.getElementById("cat-button");
  letter.style.display = "block"; // Hiển thị lá thư

  // Hiển thị nút con mèo sau khi lá thư xuất hiện
  setTimeout(() => {
    catButton.style.display = "inline-block";
  }, 1000); // Hiển thị sau 1 giây để hiệu ứng thư xuất hiện trước
}

// Hàm tạo hiệu ứng bùng nổ trái tim
function explodeHearts() {
  const container = document.getElementById("floating-hearts");
  container.innerHTML = ""; // Xóa các trái tim cũ

  // Đảm bảo phần tử container hiển thị trên toàn màn hình
  container.style.display = "block";

  // Tạo hiệu ứng bùng nổ trái tim
  for (let i = 0; i < 333; i++) {
    // Tạo một trái tim mới
    const heart = document.createElement("div");
    heart.classList.add("exploding-heart");
    heart.innerHTML = "💖"; // Biểu tượng trái tim

    // Vị trí ngẫu nhiên trên màn hình
    const angle = Math.random() * 2 * Math.PI; // Chọn góc ngẫu nhiên để trái tim bay đi
    const distance = Math.random() * 600 + 300; // Khoảng cách từ trung tâm màn hình

    // Tính toán vị trí (x, y) cho trái tim
    const x = Math.cos(angle) * distance + window.innerWidth / 2;
    const y = Math.sin(angle) * distance + window.innerHeight / 2;

    // Đặt vị trí cho trái tim
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Thêm trái tim vào container
    container.appendChild(heart);

    // Thêm hiệu ứng di chuyển và biến mất cho trái tim
    heart.style.animation = `explode 2s forwards, bounce 1.5s infinite`;

    // Xóa trái tim sau khi nó hoàn thành hiệu ứng
    setTimeout(() => {
      heart.remove();
    }, 10000);
  }

  // Sau 20 giây, ẩn đi các trái tim bùng nổ
  setTimeout(() => {
    container.style.display = "none";
  }, 20000);
}
