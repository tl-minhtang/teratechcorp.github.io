; (function () {
  "use strict";

  const COOKIE_NAME = 'terabyte-labo-master-lang';

  $(function () {
    $('.js-set-language [lang]').on('click', function () {
      setLang($(this).prop('lang'));
      changeLang();
      showCurrentLang();
    });

    showCurrentLang();
    changeLang();
  });

  function showCurrentLang() {
    $('#js-current-lang').text($.cookie(COOKIE_NAME));
  }

  function changeLang() {
    $("[data-lang]").each(function (index, ele) {
      loadLangText();
      loadLangHolder();
    })
  }

  function loadLangText() {
    $("[data-lang-holder]").each(function (index, ele) {
      const $this = $(ele)
      const i18n = $this.data('lang-holder').split('.')
      const text = i18n.reduce(function (object, property) {
        return object[property];
      }, currentLang());

      if (text) $this.prop('placeholder', text)
    })
  }

  function loadLangHolder() {
    $("[data-lang]").each(function (index, ele) {
      const $this = $(ele)
      const i18n = $this.data('lang').split('.')
      const text = i18n.reduce(function (object, property) {
        return object[property];
      }, currentLang());

      if (text) $this.html(text.replace(/\n/g, "<br />"))
    })
  }

  function currentLang() {
    const lang = $.cookie(COOKIE_NAME)
    switch (lang) {
      case 'Tiếng Việt':
        return LANG_VI;
      case 'English':
        return LANG_EN;
      default:
        return LANG_JP
    }
  }

  function setLang(lang) {
    if (!lang) return;
    // 365 days
    $.cookie(COOKIE_NAME, lang, { expires: 365, path: '/' });
  }
})();
