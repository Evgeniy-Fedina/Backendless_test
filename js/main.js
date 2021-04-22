(function($) {
    $(document).ready(function () {
        console.log('jQuery ready')
        switchTheme()
        themeDefault()
    });

    function switchTheme() {
        $('.switcher-small__theme').on('change', function () {
            window.localStorage.setItem('theme', this.value)
            themeDefault()
        })
        $('.switcher-middle button').on('click', function () {
            let val = $(this).attr('class')
            window.localStorage.setItem('theme', val)
            themeDefault()
        })
        $('.switcher-hard input').on('click', function () {
            window.localStorage.setItem('theme', this.value)
            themeDefault()
        })
    }

    function themeDefault() {
        let theme = window.localStorage.getItem('theme')
        if (theme) {
            $('body').attr('class', theme)
            $('.switcher-small__theme option').each((a,b) => {
                if (b.value === theme) b.selected = true
            })
            $('.switcher-middle button').each((a,b) => {
                if ($(b).hasClass(theme)) $(b).addClass('active')
                else if (!$(b).hasClass(theme)) $(b).removeClass('active')
            })
            $('.switcher-hard input').each((a,b) => {
                if (b.value === theme) b.checked = true
            })
        } else {
            window.localStorage.setItem('theme', 'backendless')
            themeDefault()
        }
    }


})(jQuery);