$(document).ready(function() {

    // ===== MENU TOGGLE =====
    $('#menuToggle').on('click', function() {
        $('#mainMenu').toggleClass('open');
    });

    // ===== HERO SLIDER =====
    let currentSlide = 0;
    const totalSlides = 3;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentSlide = index;
        const offset = -index * 100;
        $('#heroSlides').css('transform', 'translateX(' + offset + '%)');
        $('.hero-dots span').removeClass('active');
        $('.hero-dots span[data-index="' + index + '"]').addClass('active');
    }

    $('#heroNext').on('click', function() { goToSlide(currentSlide + 1); });
    $('#heroPrev').on('click', function() { goToSlide(currentSlide - 1); });
    $('.hero-dots span').on('click', function() {
        goToSlide(parseInt($(this).data('index')));
    });

    // Auto slide
    let autoSlide = setInterval(function() { goToSlide(currentSlide + 1); }, 5000);
    $('#heroSlider').on('mouseenter', function() { clearInterval(autoSlide); });
    $('#heroSlider').on('mouseleave', function() {
        autoSlide = setInterval(function() { goToSlide(currentSlide + 1); }, 5000);
    });

    // ===== DATA =====
    const vnData = [{
        img: 'https://picsum.photos/seed/vn1/400/250',
        cat: 'V-League',
        title: 'CLB Hà Nội giành chức vô địch V-League 2025',
        desc: 'Đánh bại CLB TP.HCM 2-1 trong trận chung kết, Hà Nội lần thứ 6 lên ngôi.',
        hot: true
    }, {
        img: 'https://picsum.photos/seed/vn2/400/250',
        cat: 'ĐTQG',
        title: 'HLV Kim Sang-sik công bố danh sách U22 Việt Nam',
        desc: 'Những gương mặt trẻ triển vọng được triệu tập cho đợt tập trung tháng 7.',
        hot: false
    }, {
        img: 'https://picsum.photos/seed/vn3/400/250',
        cat: 'Chuyển nhượng',
        title: 'Tiền đạo Nguyễn Tiến Linh nhận đề nghị từ Thái Lan',
        desc: 'CLB Buriram United muốn có chữ ký của chân sút số 1 Việt Nam.',
        hot: false
    }, {
        img: 'https://picsum.photos/seed/vn4/400/250',
        cat: 'Cúp Quốc gia',
        title: 'Thanh Hóa vào bán kết Cúp Quốc gia sau loạt sút luân lưu',
        desc: 'Chiến thắng nghẹt thở trước Bình Định giúp Thanh Hóa tiến bước.',
        hot: false
    }];

    const intData = [{
        img: 'https://picsum.photos/seed/int1/400/250',
        cat: 'Premier League',
        title: 'Man City thắng Arsenal 3-1, giữ vững ngôi đầu',
        desc: 'Hat-trick của Haaland giúp Man City bỏ xa đối thủ trên BXH.',
        hot: true
    }, {
        img: 'https://picsum.photos/seed/int2/400/250',
        cat: 'La Liga',
        title: 'Barcelona đánh bại Real Madrid 2-1 trong El Clásico',
        desc: 'Bàn thắng phút 89 của Pedri mang về chiến thắng kịch tính.',
        hot: false
    }, {
        img: 'https://picsum.photos/seed/int3/400/250',
        cat: 'Champions League',
        title: 'Bayern Munich vào tứ kết sau chiến thắng 4-0',
        desc: 'Harry Kane ghi cú đúp giúp Hùm xám hủy diệt đối thủ.',
        hot: false
    }, {
        img: 'https://picsum.photos/seed/int4/400/250',
        cat: 'World Cup',
        title: 'Brazil thắng Argentina 2-0 tại vòng loại World Cup',
        desc: 'Vinicius và Neymar lập công trong trận siêu kinh điển Nam Mỹ.',
        hot: false
    }];

    const tennisData = [{
        img: 'https://picsum.photos/seed/ten1/400/250',
        cat: 'Grand Slam',
        title: 'Alcaraz vô địch Wimbledon sau trận chung kết 5 set',
        desc: 'Tay vợt trẻ người Tây Ban Nha đánh bại Djokovic trong trận đấu 4 giờ.',
        hot: true
    }, {
        img: 'https://picsum.photos/seed/ten2/400/250',
        cat: 'ATP',
        title: 'Sinner leo lên vị trí số 2 thế giới',
        desc: 'Thành tích ấn tượng trong mùa giải giúp tay vợt Italy thăng hạng.',
        hot: false
    }, {
        img: 'https://picsum.photos/seed/ten3/400/250',
        cat: 'WTA',
        title: 'Swiatek bảo vệ thành công danh hiệu tại Roland Garros',
        desc: 'Đánh bại Sabalenka trong trận chung kết, Swiatek khẳng định sức mạnh.',
        hot: false
    }, {
        img: 'https://picsum.photos/seed/ten4/400/250',
        cat: 'Davis Cup',
        title: 'Đội tuyển Úc vào chung kết Davis Cup',
        desc: 'Chiến thắng 3-1 trước Croatia giúp Úc gặp Italy ở trận cuối.',
        hot: false
    }];

    function renderGrid(containerId, data) {
        const $grid = $('#' + containerId);
        $grid.empty();
        data.forEach(function(item) {
            const card = `
                    <div class="news-card" onclick="window.location.href='chi-tiet-bai-viet.html'">
                        <div class="card-img" style="background-image: url('${item.img}');">
                            ${item.hot ? '<span class="hot-tag">🔥 HOT</span>' : ''}
                        </div>
                        <div class="card-body">
                            <div class="category">${item.cat}</div>
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                            <div class="meta">
                                <span><i>📅</i> 2 giờ trước</span>
                                <span><i>👁️</i> 1.2k</span>
                            </div>
                        </div>
                    </div>
                `;
            $grid.append(card);
        });
    }

    renderGrid('vnFootballGrid', vnData);
    renderGrid('intFootballGrid', intData);
    renderGrid('tennisGrid', tennisData);

    // ===== TOAST =====
    function showToast(msg) {
        const $t = $('#toast');
        $t.text(msg).addClass('show');
        clearTimeout($t.data('timer'));
        const timer = setTimeout(function() { $t.removeClass('show'); }, 3500);
        $t.data('timer', timer);
    }

    // ===== LOGIN (only if on login page) =====
    if (window.location.pathname.includes('login.html')) {
        $('#loginForm').on('submit', function(e) {
            e.preventDefault();
            const user = $('#username').val().trim();
            const pass = $('#password').val().trim();
            let valid = true;

            if (!user) {
                $('#username').css('border-color', '#e31837');
                $('#userError').show().text('Vui lòng nhập tên đăng nhập');
                valid = false;
            } else {
                $('#username').css('border-color', '#e0e4ea');
                $('#userError').hide();
            }
            if (!pass) {
                $('#password').css('border-color', '#e31837');
                $('#passError').show().text('Vui lòng nhập mật khẩu');
                valid = false;
            } else {
                $('#password').css('border-color', '#e0e4ea');
                $('#passError').hide();
            }
            if (valid) {
                showToast('✅ Đăng nhập thành công! Chào mừng bạn trở lại.');
                $('#loginForm')[0].reset();
            }
        });

        $('#username, #password').on('input', function() {
            $(this).css('border-color', '#e0e4ea');
            $(this).siblings('.error-msg').hide();
        });
    }

    // ===== COMMENTS (only if on detail page) =====
    if (window.location.pathname.includes('chi-tiet-bai-viet.html')) {
        // Load saved comments from localStorage
        let comments = JSON.parse(localStorage.getItem('sportsComments')) || [];
        const $list = $('#commentList');

        function renderComments() {
            $list.empty();
            if (comments.length === 0) {
                $list.append(
                    '<div style="color:#999;padding:16px 0;">Chưa có bình luận. Hãy là người đầu tiên!</div>'
                    );
                return;
            }
            comments.forEach(function(c, idx) {
                const div = `
                        <div class="comment-item">
                            <div>
                                <span class="cmt-name">${c.name}</span>
                                <span class="cmt-time">${c.time}</span>
                            </div>
                            <div class="cmt-text">${c.text}</div>
                        </div>
                    `;
                $list.append(div);
            });
        }
        renderComments();

        $('#commentForm').on('submit', function(e) {
            e.preventDefault();
            const name = $('#cmtName').val().trim();
            const text = $('#cmtText').val().trim();
            if (!name || !text) {
                showToast('⚠️ Vui lòng nhập đầy đủ họ tên và nội dung.');
                return;
            }
            const now = new Date();
            const timeStr = now.getHours().toString().padStart(2, '0') + ':' +
                now.getMinutes().toString().padStart(2, '0') + ' - ' +
                now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
            comments.unshift({ name: name, text: text, time: timeStr });
            localStorage.setItem('sportsComments', JSON.stringify(comments));
            renderComments();
            $('#commentForm')[0].reset();
            showToast('✅ Cảm ơn bạn đã bình luận!');
        });
    }

    // ===== ACTIVE MENU =====
    const path = window.location.pathname.split('/').pop() || 'index.html';
    $('#mainMenu a').each(function() {
        const href = $(this).attr('href');
        if (href === path) {
            $('#mainMenu a').removeClass('active');
            $(this).addClass('active');
        }
    });

});