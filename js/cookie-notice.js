(function() {
    const cookieNoticeAlert = document.getElementById('cookieNotice'),
        cookieNoticeName = 'accepted_cookie_notice';

        if (cookieNoticeAlert) {
            if (!getCookie(cookieNoticeName)) {
                cookieNoticeAlert.classList.remove('d-none');
            }
        
            cookieNoticeAlert.querySelectorAll('button').forEach(function (el) {
                el.addEventListener('click', function() {
                    document.cookie = cookieNoticeName + '=true;' + setCookieExpirationNever() + 'path=/;';
                }, false);
            });
        }
})();