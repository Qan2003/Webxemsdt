// Dữ liệu quẻ và số tương ứng
const que_data = {
  Kiền: { code: "111", numbers: [1, 9] },
  Trạch: { code: "011", numbers: [2] },
  Hoả: { code: "101", numbers: [3] },
  Lôi: { code: "001", numbers: [4] },
  Phong: { code: "110", numbers: [5] },
  Thuỷ: { code: "010", numbers: [6] },
  Sơn: { code: "100", numbers: [7] },
  Địa: { code: "000", numbers: [0, 8] },
}

// Danh sách số tốt
const so_tot = {
  "ĐỊA LÔI PHỤC": [4, 84],
  "THIÊN TRẠCH LÝ": [12, 92],
  "TRẠCH ĐỊA TỤY": [20, 28],
  "HỎA ĐỊA TẤN": [30, 38],
  "HỎA THIÊN ĐẠI HỮU": [31, 39],
  "THỦY THIÊN NHU": [61, 69],
  "THIÊN HỎA ĐỒNG NHÂN": [13, 93],
  "PHONG TRẠCH TRUNG PHU": [52],
  "HỎA PHONG ĐỈNH": [35],
  "LÔI THIÊN ĐẠI TRÁNG": [41, 49],
  "LÔI PHONG HẰNG": [45],
  "LÔI HỎA PHONG": [43],
  "THUẦN KIỀN": [11, 99, 91, 19],
  "PHONG LÔI ÍCH": [54],
  "PHONG HỎA GIA NHÂN": [53],
  "PHONG SƠN TIỆM": [57],
  "ĐỊA THỦY SƯ": [6, 86],
  "THUẦN KHÔN": [0, 88, 8, 80],
  "ĐỊA THIÊN THÁI": [1, 9, 81, 89],
  "ĐỊA TRẠCH LÂM": [2, 82],
  "THUẦN CHẤN": [44],
  "TRẠCH SƠN HÀM": [27],
  "SƠN THIÊN ĐẠI SÚC": [71, 79],
  "THỦY HỎA KÝ TẾ": [63],
  "SƠN LÔI DI": [74],
  "THỦY ĐỊA TỶ": [60, 68],
}

// Danh sách số xấu
const so_xau = {
  "THIÊN ĐỊA BĨ": [10, 18, 90, 98],
  "THIÊN LÔI VÔ VỌNG": [14, 94],
  "THIÊN PHONG CẤU": [15, 95],
  "THIÊN THỦY TỤNG": [16, 96],
  "THIÊN SƠN ĐỘN": [17, 97],
  "TRẠCH THIÊN QUẢI": [21, 29],
  "THUẦN ĐOÀI": [22],
  "TRẠCH HỎA CÁCH": [23],
  "TRẠCH LÔI TÙY": [24],
  "TRẠCH PHONG ĐẠI QUÁ": [25],
  "TRẠCH THỦY KHỐN": [26],
  "HỎA TRẠCH KHUỂ": [32],
  "THUẦN LY": [33],
  "HỎA LÔI PHỆ HẠP": [34],
  "HỎA THỦY VỊ TẾ": [36],
  "HỎA SƠN LỮ": [37],
  "LÔI ĐỊA DỰ": [40, 48],
  "LÔI TRẠCH QUI MUỘI": [42],
  "LÔI THỦY GIẢI": [46],
  "LÔI SƠN TIỂU QUÁ": [47],
  "PHONG ĐỊA QUAN": [50, 58],
  "PHONG THIÊN TIỂU SÚC": [51, 59],
  "THUẦN TỐN": [55],
  "PHONG THỦY HOÁN": [56],
  "THỦY TRẠCH TIẾT": [62],
  "THỦY LÔI TRUÂN": [64],
  "THỦY PHONG TỈNH": [65],
  "THUẦN KHẢM": [66],
  "THỦY SƠN KIỂN": [67],
  "SƠN ĐỊA BÁC": [70, 78],
  "SƠN TRẠCH TỔN": [72],
  "SƠN HỎA BÍ": [73],
  "SƠN PHONG CỔ": [75],
  "SƠN THỦY MÔNG": [76],
  "THUẦN CẤN": [77],
  "ĐỊA HỎA MINH SẢNG": [3, 83],
  "ĐỊA PHONG THĂNG": [5, 85],
  "ĐỊA SƠN KHIÊM": [7, 87],
}

// Danh sách ý dịch
const y_dich = {
  "THIÊN TRẠCH LÝ": [
    "LỘ HÀNH",
    "Tượng hổ lang đón đường",
    "Nghi lễ, có chừng mực, khuôn phép, dẫm lên, không cho đi sai, có ý chận đường sái quá, hệ thống, pháp lý…",
  ],
  "THIÊN HỎA ĐỒNG NHÂN": [
    "THÂN THIỆN",
    "Tượng cùng người hiệp lực",
    "Trên dưới cùng lòng, cùng người ưa thích, cùng một bọn người…",
  ],
  "THIÊN LÔI VÔ VỌNG": [
    "XÂM LẤN",
    "Tượng kẻ mạnh từ ngoài đến",
    "Tai vạ, lỗi bậy bạ, không lề lối, không quy củ, càn đại, chống đối, khứng chịu…",
  ],
  "THIÊN PHONG CẤU": [
    "TƯƠNG NGỘ",
    "Gặp gỡ thình lình, ít khi",
    "Gặp gỡ, cấu kết, liên kết, kết hợp, móc nối, mềm gặp cứng…",
  ],
  "THIÊN THỦY TỤNG": ["BẤT HÒA", "lớn nhỏ không hòa", "Bàn cãi, kiện tụng, bàn tính, cãi vã, tranh luận, bàn luận…"],
  "THIÊN SƠN ĐỘN": [
    "ẨN TRÁ",
    "Tượng con báo ẩn ở núi nam",
    "Lui, ẩn khuất, tránh đời, lừa dối, trá hình, có ý trốn tránh, trốn cái mặt đưa thấy cái lưng…",
  ],
  "THIÊN ĐỊA BĨ": [
    "GIÁN CÁCH",
    "Trên dưới lôi thôi",
    "Bế tắc, không thông, không tương cảm nhau, xui xẻo, dèm pha, chê bai lẫn nhau, mạnh ai nấy theo ý riêng…",
  ],
  "THUẦN KIỀN": [
    "CHÍNH YẾU",
    "Vạn vật có khởi đầu, lớn lên, toại chí, hóa thành",
    "Cứng mạnh, khô, lớn, khỏe mạnh, đức không nghỉ…",
  ],
  "TRẠCH HỎA CÁCH": [
    "CẢI BIẾN",
    "Tượng vực trời xa thẳm",
    "Bỏ lối cũ, cải cách, hoán cải, cách tuyệt, cánh chim thay lông…",
  ],
  "TRẠCH LÔI TÙY": [
    "DI ĐỘNG",
    "Loại không ở",
    "Cùng theo, mặc lòng, không có chí hướng, chỉ chìu theo, đại thể chủ việc di động, thuyên chuyển như chiếc xe…",
  ],
  "TRẠCH PHONG ĐẠI QUÁ": [
    "CẢ QUÁ",
    "Tượng cỏ non bị sương tuyết",
    "Cả quá ắt tai họa, quá mực thường, quá nhiều, giàu cương nghị ở trong…",
  ],
  "TRẠCH THỦY KHỐN": [
    "NGUY LO",
    "Tượng giữ mình đợi thời",
    "Cùng quẫn, bị người làm ách, lo lắng, cùng khổ, mệt mỏi, nguy cấp, lo hiểm nạn…",
  ],
  "TRẠCH SƠN HÀM": ["THỤ CẢM", "tượng nam nữ có tình ý", "Cảm xúc, thọ nhận, cảm ứng, nghĩ đến, nghe thấy, xúc động…"],
  "TRẠCH ĐỊA TỤY": [
    "TRƯNG TẬP",
    "Tượng rồng mây giao hội",
    "Nhóm họp, biểu tình, dồn đống, quầng tụ nhau lại, kéo đến, kéo thành bầy…",
  ],
  "TRẠCH THIÊN QUẢI": [
    "DỨT KHOÁT",
    "Lợi đã cùng ắt thôi",
    "Dứt hết, biên cương, ranh giới, thành phần, thành khoảnh, quyết định, quyết nghị, cổ phần, thôi, khai lề lối…",
  ],
  "THUẦN ĐOÀI": [
    "HIỆN ĐẸP",
    "Tượng vui hiện trên mặt, khẩu khí",
    "Đẹp đẽ, ưa thích, vui hiện trên mặt, không buồn chán, cười nói, khuyết mẻ…",
  ],
  "HỎA LÔI PHỆ HẠP": [
    "CẮN HỢP",
    "Tượng yếu đuối không chạy được",
    "Cẩu hợp, bấu vấu, bấu quào, dày xéo, đay nghiến, phỏng vấn, hỏi han (học hỏi)…",
  ],
  "HỎA PHONG ĐỈNH": [
    "NUNG ĐÚC",
    "Tượng luyện thuốc thành linh đơn",
    "Đứng được, cặm đứng, trồng, nung nấu, rèn luyện, vững chắc, ước hẹn…",
  ],
  "HỎA THỦY VỊ TẾ": [
    "THẤT CÁCH",
    "Tượng trong cái lo có cái mừng",
    "Thất bác, mất, thất bại, dở dang, chưa xong, nửa chừng…",
  ],
  "HỎA SƠN LỮ": [
    "THỨ YẾU",
    "Nhờ người mai mối",
    "Đỗ nhờ, khách, ở đậu, tạm trú, kê vào, gá vào, ký ngụ bên ngoài, tính cách lang thang, ít người thân, không chính…",
  ],
  "HỎA ĐỊA TẤN": [
    "HIỂN HIỆN",
    "Tượng rồng hiện điềm lành",
    "Đi hoặc tới, tiến tới gần, theo mực thường, lửa đã hiện trên đất, trưng bày…",
  ],
  "HỎA THIÊN ĐẠI HỮU": [
    "CẢ CÓ",
    "Vàng bạc đầy nhà",
    "Thong dong, dung dưỡng nhiều, độ lượng rộng, có đức dầy, chiếu sáng lớn…",
  ],
  "HỎA TRẠCH KHUỂ": [
    "HỖ TRỢ",
    "Con hồ nhờ oai con hổ",
    "Trái lìa, lìa xa, hai bên lợi dụng lẫn nhau, cơ biến quai xảo, như cung tên…",
  ],
  "THUẦN LY": [
    "SÁNG CHÓI",
    "Tượng nhà cửa không yên",
    "Sáng sủa, trống trải, trống trơn, tỏa ra, bám vào, phụ bám, phô trương ra ngoài…",
  ],
  "LÔI PHONG HẰNG": [
    "TRƯỜNG CỬU",
    "Tượng lâu bền như đạo nghĩa",
    "Lâu dài, chậm chạp, đạo lâu bền như vợ chồng, kéo dài câu chuyện, thâm giao, nghĩa cố tri, xưa, cũ…",
  ],
  "LÔI THỦY GIẢI": [
    "NƠI NƠI",
    "Tượng sấm động mưa bay",
    "Làm cho tan đi, như làm tan sự nguy hiểm, giải phóng, giải tán, loan truyền, tuyên truyền, phân phát, lưu thông, ban rải, ân xá…",
  ],
  "LÔI SƠN TIỂU QUÁ": [
    "BẤT TÚC",
    "Trên dưới gian nan, vất vả, buồn thảm",
    "Thiểu lý, thiểu não, hèn mọn, nhỏ nhặt, bẩn thiểu, thiếu cường lực…",
  ],
  "LÔI ĐỊA DỰ": ["THUẬN ĐỘNG", "tượng trên dưới vui vẻ", "Dự bị, dự phòng, canh chừng, sớm, vui vầy…"],
  "LÔI THIÊN ĐẠI TRÁNG": [
    "TỰ CƯỜNG",
    "Tượng phượng đậu trên núi",
    "Ý riêng, bụng nghĩ, hướng thượng, ý định, vượng sức, thịnh đại, trên cao, chót vót, lên trên, chí khí, có lập trường…",
  ],
  "LÔI TRẠCH QUY MUỘI": [
    "XÔN XAO",
    "Tượng ma quái làm rối",
    "Tai nạn, rối ren, lôi thôi, nữ chi chung, gái lấy chồng…",
  ],
  "LÔI HỎA PHONG": ["HÒA MỸ", "tượng cùng đồng tâm hiệp lực", "Thịnh đại, được mùa, nhiều người góp sức…"],
  "THUẦN CHẤN": [
    "ĐỘNG DỤNG",
    "Khắp cùng dấy động",
    "Rung động, sợ hãi do chấn động, phấn phát, nổ vang, chấn khởi, chấn kinh…",
  ],
  "PHONG THỦY HOÁN": [
    "LY TÁN",
    "Nước gặp gió thì phải tan, phải chạy",
    "Lan ra tràn lan, tán thất, trốn đi xa, lánh xa, thất nhân tâm, hao hớt…",
  ],
  "PHONG SƠN TIỆM": [
    "TUẦN TỰ",
    "Phúc lộc cùng đến",
    "Từ từ, thong thả đến, lần lần, bò tới, chậm chạp, nhai nhỏ nuốt vào…",
  ],
  "PHONG ĐỊA QUAN": [
    "QUAN SÁT",
    "Tượng bèo mây tan hợp",
    "Xem xét, trông coi, cảnh tượng xem thấy, thanh tra, lướt qua, sơ qua, sơn phết, quét nhà…",
  ],
  "PHONG THIÊN TIỂU SÚC": [
    "DỊ ĐỒNG",
    "Tiếng đờn không hòa điệu",
    "Lúc bế tắc, không đồng ý nhau, cô quả, súc oán, chứa mối oán giận, có ý trái lại, không hòa hợp, nhỏ nhen…",
  ],
  "PHONG TRẠCH TRUNG PHU": [
    "TRUNG THẬT",
    "Tượng âm ở bên trong mà được giữa",
    "Tín thật, không ngờ vực, có uy tín cho người tin tưởng, tín ngưỡng, ở trong…",
  ],
  "PHONG HỎA GIA NHÂN": [
    "NẨY NỞ",
    "Trổ bông sinh trái, nẩy mầm",
    "Người nhà, gia đinh, cùng gia đình, đồng chủng, đồng nghiệp, cùng xóm, sinh sôi, khai thác mở mang thêm…",
  ],
  "PHONG LÔI ÍCH": [
    "TIẾN ÍCH",
    "Chim hồng, chim hộc bay qua mây mù",
    "Thêm được lợi, giúp dùm, tiếng dội xa, vượt lên, phóng mình tới…",
  ],
  "THUẦN TỐN": [
    "THUẬN NHẬP",
    "Khí âm dương lên xuống giao hợp",
    "Theo lên theo xuống, theo tới theo lui, có sự dấu diếm ở trong…",
  ],
  "THỦY SƠN KIỂN": ["TRỞ NGẠI", "không năng đi", "Cản ngăn, chận lại, chậm chạp, què, khó khăn…"],
  "THỦY ĐỊA TỶ": [
    "CHỌN LỌC",
    "Bỏ nịnh dụng trung",
    "Thân liền, gạn lọc, mật thiết, tư hữu riêng, trưởng đoàn, trưởng toán, chọn lựa…",
  ],
  "THỦY THIÊN NHU": [
    "TƯƠNG HỘI",
    "Quân tử vui vẻ hội họp, ăn uống chờ thời",
    "Chờ đợi vì hiểm đằng trước, thuận theo, quây quầng, hội tụ, vui hội, cứu xét, chầu về…",
  ],
  "THỦY TRẠCH TIẾT": [
    "GIẢM CHẾ",
    "Trên đầm có nước",
    "Ngăn ngừa, tiết độ, kềm chế, giảm bớt, chừng mực, nhiều thì tràn…",
  ],
  "THỦY HỎA KÝ TẾ": [
    "HIỆN HỢP",
    "Việc nhỏ thì thành",
    "Gặp nhau, cùng nhau, đã xong, việc xong, hiện thực, ích lợi nhỏ…",
  ],
  "THỦY LÔI TRUÂN": [
    "GIAN LAO",
    "Trước dữ sau lành",
    "Yếu đuối, chưa đủ sức, ngần ngại, do dự, vất vả, phải nhờ sự giúp đỡ…",
  ],
  "THỦY PHONG TỈNH": [
    "TRẦM LẶNG",
    "Trời Đất phối hợp lại",
    "Ở chỗ nào cứ ở yên chỗ đó, xuống sâu, vực thẳm có nước, dưới sâu, cái giếng…",
  ],
  "THUẦN KHẢM": [
    "HÃM HIỂM",
    "Tượng hết khổ mới đến sướng",
    "Hãm vào ở trong, xuyên sâu vào trong, đóng cửa lại, gập ghềnh, trắc trở, bắt buộc, kềm hãm, thắng…",
  ],
  "SƠN ĐỊA BÁC": [
    "TIÊU ĐIỀU",
    "Tượng bà con thân thích xa lìa nhau",
    "Đẽo gọt, lột cướp đi, không có lợi, rụng rớt, đến rồi lại đi, tản lạc, lạt lẽo nhau, xa lìa nhau, hoang vắng, buồn thảm…",
  ],
  "SƠN THIÊN ĐẠI SÚC": [
    "TÍCH TỤ",
    "Đồng loại hội họp vui vẻ, cục bộ",
    "Chứa tụ, súc tích, lắng tụ một chỗ, dự trữ, đựng, để dành…",
  ],
  "SƠN TRẠCH TỔN": [
    "TỔN HẠI",
    "Tượng đề phòng sự ngầm hại, hao tổn",
    "Hao mất, thua thiệt, bớt kém, bớt phần dưới cho phần trên là tổn hại…",
  ],
  "SƠN HỎA BÍ": [
    "QUANG MINH",
    "Quang minh, sáng sủa, thấu suốt",
    "Trang sức, sửa sang, trang điểm, thấu suốt, rõ ràng…",
  ],
  "SƠN LÔI DI": [
    "DUNG DƯỠNG",
    "Rồng vào vực nghỉ ngơi",
    "Chăm lo, tu bổ, càng thêm, ăn uống, bổ dưỡng, bồi dưỡng, ví như trời nuôi muôn vật, thánh nhân nuôi người…",
  ],
  "SƠN PHONG CỔ": [
    "SỰ BIẾN",
    "Điều hại cùng có liên hệ",
    "Có sự không yên trong lòng, làm ngờ vực, khua, đánh, mua chuốc cái hại, đánh trống, làm cho sợ sệt, sửa lại cái lỗi trước đã làm…",
  ],
  "SƠN THỦY MÔNG": [
    "BẤT MINH",
    "Tượng lưới trời giăng bốn mặt",
    "Tối tăm, mờ ám, không minh bạch, che lấp, bao trùm, phủ chụp, ngu dại, ngờ nghệch…",
  ],
  "THUẦN CẤN": [
    "NGƯNG NGHỈ",
    "Giữ mức cũ đợi thời",
    "Ngăn giữ, ở, thôi, dừng lại, đậy lại, gói ghém, ngăn cấm, vừa đúng chỗ…",
  ],
  "ĐỊA THIÊN THÁI": [
    "ĐIỀU HÒA",
    "Tượng trời đất giao hòa",
    "Thông hiểu, am tường, hiểu biết, thông suốt, quen biết, quen thuộc…",
  ],
  "ĐỊA TRẠCH LÂM": [
    "BAO QUẢN",
    "Người quân tử dạy dân, che chở, bảo bọc dân vô bờ bến",
    "Việc lớn, người lớn, cha nuôi, vú nuôi, giáo học, nhà sư, kẻ cả, dạy dân, nhà thầu…",
  ],
  "ĐỊA HỎA MINH SẢNG": [
    "HẠI ĐAU",
    "Gai góc đầy đường",
    "Thương tích, bịnh hoạn, buồn lo, đau lòng, ánh sáng bị thương…",
  ],
  "ĐỊA LÔI PHỤC": ["TÁI HỒI", "tượng ngoài núi lại còn có núi", "Lại có, trở về, bên ngoài, phản phục…"],
  "ĐỊA PHONG THĂNG": [
    "TIẾN THỦ",
    "Chòi đạp để ngoi lên trên",
    "Thăng tiến, trực chỉ, tiến mau, bay lên, vọt tới trước, bay lên không trung, thăng chức, thăng hà…",
  ],
  "ĐỊA THỦY SƯ": [
    "CHÚNG TRỢ",
    "Tượng chúng ủng hộ nhau",
    "Đông chúng, vừa làm thầy, vừa làm bạn, học hỏi lẫn nhau, níu nắm nhau qua truông, nâng đỡ…",
  ],
  "ĐỊA SƠN KHIÊM": [
    "CÁO THOÁI",
    "Tượng trên dưới hoang mang",
    "Khiêm tốn, nhún nhường, khiêm từ, cáo thoái, từ giã, lui vào trong, giữ gìn, nhốt vào trong, bế cửa…",
  ],
  "THUẦN KHÔN": [
    "NHU THUẬN",
    "Vạn vật có khởi đầu, lớn lên, toại chí, hóa thành",
    "Thuận tòng, mềm dẻo, theo đường mà được lợi, hòa theo lẽ, chịu lấy…",
  ],
}

// Hàm phân tích số điện thoại
export function analyzePhoneNumber(phoneNumber: string) {
  // Tách số điện thoại thành từng chữ số
  const digits = phoneNumber.split("").map((digit) => Number.parseInt(digit, 10))

  // Tạo các cặp số
  const pairs = []
  for (let i = 0; i < digits.length; i += 2) {
    if (i + 1 < digits.length) {
      pairs.push("" + digits[i] + digits[i + 1])
    }
  }

  // Phân tích từng cặp số
  const results = pairs.map((pair) => {
    const pairNumber = Number.parseInt(pair, 10)

    // Tìm tên quẻ
    let hexagramName = "Không xác định"
    let quality = "Trung bình"

    // Kiểm tra số tốt
    for (const name in so_tot) {
      if (Object.prototype.hasOwnProperty.call(so_tot, name)) {
        const numbers = so_tot[name]
        if (numbers.indexOf(pairNumber) !== -1) {
          hexagramName = name
          quality = "Tốt"
          break
        }
      }
    }

    // Kiểm tra số xấu nếu chưa tìm thấy trong số tốt
    if (hexagramName === "Không xác định") {
      for (const name in so_xau) {
        if (Object.prototype.hasOwnProperty.call(so_xau, name)) {
          const numbers = so_xau[name]
          if (numbers.indexOf(pairNumber) !== -1) {
            hexagramName = name
            quality = "Xấu"
            break
          }
        }
      }
    }

    // Lấy ý nghĩa từ y_dich
    let meaning = "Không xác định"
    let symbol = "Không xác định"
    let detail = "Không xác định"

    if (y_dich[hexagramName]) {
      meaning = y_dich[hexagramName][0] || "Không xác định"
      symbol = y_dich[hexagramName][1] || "Không xác định"
      detail = y_dich[hexagramName][2] || "Không xác định"
    }

    return {
      pair: pair,
      name: hexagramName,
      meaning: meaning,
      symbol: symbol,
      detail: detail,
      quality: quality,
    }
  })

  // Tính toán số ở dòng thứ 6 theo công thức
  const sumFirstHalf = digits.slice(0, 5).reduce((sum, digit) => sum + digit, 0)
  const sumSecondHalf = digits.slice(5).reduce((sum, digit) => sum + digit, 0)

  const calculatedNumber = (sumFirstHalf % 8) * 10 + (sumSecondHalf % 8)
  const formattedNumber = calculatedNumber < 10 ? "0" + calculatedNumber : "" + calculatedNumber

  // Tìm quẻ tương ứng với số được tính toán
  let hexagramName = "Không xác định"
  let quality = "Trung bình"

  // Kiểm tra số tốt
  for (const name in so_tot) {
    if (Object.prototype.hasOwnProperty.call(so_tot, name)) {
      const numbers = so_tot[name]
      if (numbers.indexOf(calculatedNumber) !== -1) {
        hexagramName = name
        quality = "Tốt"
        break
      }
    }
  }

  // Kiểm tra số xấu nếu chưa tìm thấy trong số tốt
  if (hexagramName === "Không xác định") {
    for (const name in so_xau) {
      if (Object.prototype.hasOwnProperty.call(so_xau, name)) {
        const numbers = so_xau[name]
        if (numbers.indexOf(calculatedNumber) !== -1) {
          hexagramName = name
          quality = "Xấu"
          break
        }
      }
    }
  }

  // Lấy ý nghĩa từ y_dich
  let meaning = "Không xác định"
  let symbol = "Không xác định"
  let detail = "Không xác định"

  if (y_dich[hexagramName]) {
    meaning = y_dich[hexagramName][0] || "Không xác định"
    symbol = y_dich[hexagramName][1] || "Không xác định"
    detail = y_dich[hexagramName][2] || "Không xác định"
  }

  // Thêm kết quả tính toán vào mảng kết quả
  results.push({
    pair: formattedNumber,
    name: hexagramName,
    meaning: meaning,
    symbol: symbol,
    detail: detail,
    quality: quality,
  })

  // Tính toán cặp số thứ 7
  // Ánh xạ từ chữ số sang tên trong que_data
  const soAnhXaQue = {
    "1": "Kiền",
    "2": "Trạch",
    "3": "Hoả",
    "4": "Lôi",
    "5": "Phong",
    "6": "Thuỷ",
    "7": "Sơn",
    "0": "Địa",
    "8": "Địa",
    "9": "Kiền",
  }

  // Tạo ánh xạ ngược từ mã quẻ sang tên
  const maQueAnhXaTen: Record<string, string> = {}
  for (const key in que_data) {
    if (Object.prototype.hasOwnProperty.call(que_data, key)) {
      maQueAnhXaTen[que_data[key].code] = key
    }
  }

  // Tính tổng các số của sim_number
  const tongSimNumber = digits.reduce((sum, digit) => sum + digit, 0)
  const phanDu = tongSimNumber % 6
  const indexToChange = phanDu === 0 ? 6 : phanDu > 6 ? phanDu - 6 : phanDu

  // Lấy cặp số thứ 6
  const capSo6Str = formattedNumber

  // Tạo mã quẻ ban đầu từ cặp số thứ 6
  let newQueCode = ""
  for (let i = 0; i < capSo6Str.length; i++) {
    const num = capSo6Str[i]
    const queName = soAnhXaQue[num]
    if (queName) {
      const queCode = que_data[queName].code
      newQueCode += queCode
    }
  }

  // Đảo ngược chuỗi để chạy từ phải qua trái
  let newQueCodeReversed = newQueCode.split("").reverse().join("")

  // Thay đổi mã quẻ tại vị trí xác định bởi indexToChange
  let indexInReversed = -1
  for (let i = 1; i <= newQueCodeReversed.length; i++) {
    if (i === indexToChange) {
      indexInReversed = i - 1
      break
    }
  }

  if (indexInReversed >= 0 && indexInReversed < newQueCodeReversed.length) {
    const charToChange = newQueCodeReversed[indexInReversed]
    const newChar = charToChange === "0" ? "1" : "0"
    newQueCodeReversed =
      newQueCodeReversed.substring(0, indexInReversed) + newChar + newQueCodeReversed.substring(indexInReversed + 1)
  }

  // Đảo ngược lại để có chuỗi kết quả cuối cùng
  newQueCode = newQueCodeReversed.split("").reverse().join("")

  // Chuyển mã quẻ mới thành cặp số mới
  let capSo7Str = ""
  let hexagramName7 = "Không xác định"
  let quality7 = "Trung bình"
  let meaning7 = "Không xác định"
  let symbol7 = "Không xác định"
  let detail7 = "Không xác định"

  if (newQueCode.length === 6) {
    const tenQue1 = maQueAnhXaTen[newQueCode.substring(0, 3)]
    const tenQue2 = maQueAnhXaTen[newQueCode.substring(3, 6)]

    if (tenQue1 && tenQue2 && que_data[tenQue1] && que_data[tenQue2]) {
      const num1 = que_data[tenQue1].numbers[0]
      const num2 = que_data[tenQue2].numbers[0]
      capSo7Str = "" + num1 + num2

      // Tìm quẻ tương ứng với cặp số thứ 7
      const pairNumber7 = Number.parseInt(capSo7Str, 10)

      // Kiểm tra số tốt
      for (const name in so_tot) {
        if (Object.prototype.hasOwnProperty.call(so_tot, name)) {
          const numbers = so_tot[name]
          if (numbers.indexOf(pairNumber7) !== -1) {
            hexagramName7 = name
            quality7 = "Tốt"
            break
          }
        }
      }

      // Kiểm tra số xấu nếu chưa tìm thấy trong số tốt
      if (hexagramName7 === "Không xác định") {
        for (const name in so_xau) {
          if (Object.prototype.hasOwnProperty.call(so_xau, name)) {
            const numbers = so_xau[name]
            if (numbers.indexOf(pairNumber7) !== -1) {
              hexagramName7 = name
              quality7 = "Xấu"
              break
            }
          }
        }
      }

      // Lấy ý nghĩa từ y_dich
      if (y_dich[hexagramName7]) {
        meaning7 = y_dich[hexagramName7][0] || "Không xác định"
        symbol7 = y_dich[hexagramName7][1] || "Không xác định"
        detail7 = y_dich[hexagramName7][2] || "Không xác định"
      }
    }
  }

  // Thêm kết quả cặp số thứ 7 vào mảng kết quả
  results.push({
    pair: capSo7Str,
    name: hexagramName7,
    meaning: meaning7,
    symbol: symbol7,
    detail: detail7,
    quality: quality7,
  })

  return results
}
