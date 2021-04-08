import $ from 'jquery';

$(document).ready(() => {
  // set initial title
  document.title = 'Dear Mom';

  // set favicon as heart
  $('link[rel="shortcut icon"]').attr('href', './favicon-heart.ico');
});

$('#cta').click(() => {
  // change title
  document.title = 'I love you mom!!';

  // start css lift animation
  $('#cover').addClass('lift');

  // reset the display to CSS provided value
  $('#content').css('display', '');

  // remove from page after lift transition is complete
  const transitionEvents = [
    'transitionend',
    'webkitTransitionEnd',
    'oTransitionEnd',
    'otransitionend',
    'MSTransitionEnd'
  ];
  $('#cover').on(transitionEvents.join(' '), function () {
    $(this).css('display', 'none');
  });
});
