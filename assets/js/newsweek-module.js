'use strict'

var myModule = (function($){

  let model = {};

  // cache dom
  let $newsWeekModule = $('#newsWeekModule');
  let $linksnav = $newsWeekModule.find('#links-nav');
  let $search = $newsWeekModule.find('#search');

  let $firstRow = $newsWeekModule.find('#first-row');
  // let $firstCol = $firstRow.children()


  // bind events
  // document.onscroll(evt)
  $newsWeekModule.delegate($search, 'focusin', _hideNavBar);
  $newsWeekModule.delegate($search, 'focusout', _showNavBar);

  // behavior - private funcs
  const _getSlidingDivHeights = () =>  [...$firstRow.children()].reduce((a, c, i) => {
      const height = [...$(c).children()].reduce((ca, cc) => ca + $(cc).height(), 0);
      a[i] = height;
      return a;
    }, [0, 0, 0]);

  const _handleSliders = () => [...$firstRow.children()].reduce((a, c, i) => {
      const height = [...$(c).children()].reduce((ca, cc) => ca + $(cc).height(), 0);
      a[i] = height;
      return a;
    }, [0, 0, 0]);

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
    model.firstRowHeight = $firstRow.height();
    model.slidingDivs = _getSlidingDivHeights();
    const x = _handleSliders();
  }

  return {
    init
  }
})(jQuery);