var myModule = (function($){

  // cache dom
  let $newsWeekModule = $('#newsWeekModule');
  let $linksnav = $newsWeekModule.find('#links-nav');
  let $search = $newsWeekModule.find('#search');

  // bind events
  $newsWeekModule.delegate($search, 'focusin', _hideNavBar);
  $newsWeekModule.delegate($search, 'focusout', _showNavBar);

  // behavior - private funcs
  function _hideNavBar() {
    $search.addClass('w-100');
    $linksnav.hide(1000, 'swing');
  }

  function _showNavBar () {
    $search.removeClass('w-100');
    $linksnav.show();
  }

  // can pass more stuff into the init - public func
  const init = () => {
    console.log('initializing module');
  }

  return {
    init
  }
})(jQuery);