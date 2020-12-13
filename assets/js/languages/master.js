; (function () {
  "use strict";

  const COOKIE_NAME = 'terabyte-labo-master-lang';

  $(function () {
    $('.js-set-language [lang]').on('click', function () {
      setLang($(this).prop('lang'));
      changeLang();
    });

    changeLang();
  });

  function changeLang() {
    $("[data-lang]").each(function (index, ele) {
      loadLang();
    })
  }

  function loadLang() {
    $("[data-lang]").each(function (index, ele) {
      const $this = $(ele)
      const i18n = $this.data('lang').split('.')
      const text = i18n.reduce(function (object, property) {
        return object[property];
      }, currentLang());
      console.log(currentLang(), text)
      if (text) $this.text(text)
    })
  }

  function currentLang() {
    const lang = $.cookie(COOKIE_NAME)
    switch (lang) {
      case 'vi':
        return LANG_VI;
        break;
      case 'en':
        return LANG_EN;
      default:
        return LANG_JP
        break;
    }
  }

  function setLang(lang) {
    if (!lang) return;
    // 365 days
    $.cookie(COOKIE_NAME, lang, { expires: 365, path: '/' });
  }
})();
