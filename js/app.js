
$(document).ready(function() {
  var html = $('html'),
    hbody  = $('html,body'),
    keywords_list = $('.keywords-list');

  var scrollUp = function() {
    hbody.animate({ scrollTop: 0 }, 'slow');
  };

  var updateSelectedKeywords = function(id) {

  }


  // INIT (chrome moddafaca)
  $(window).load(function() {
    setTimeout(function() {
      html.addClass('home-transition-in');
    }, 100);
  });




  var genders = $('.gender');
  genders.click(function() {
    var g = $(this).data('type');
    html
      .removeClass('woman-selected man-selected')
      .addClass(g + '-selected');
  });

  $('.city').click(function() {
    html.removeClass('show-home home-transition-in');
    scrollUp();

    setTimeout(function() {
      html.addClass('show-list');
    }, 1300);

    setTimeout(function() {
      html.addClass('list-transition-in');
    }, 1500);

    var city = $(this).find('h3').text().toLowerCase();
      city = '#' + city.replace(' ', '-');
    keywords_list.find('li[data-type="city"]').text(city);
  });


  $('.list-step .keyword-detail .item-detail').click(function() {
    html.addClass('list-transition-out');
    scrollUp();

    var parent = $(this).closest('keyword-detail'),
      id = parent.data('id');

    updateSelectedKeywords(id);

    setTimeout(function() {
      html.removeClass('show-list list-transition-in list-transition-out')
        .addClass('show-detail');
    }, 1000);

    setTimeout(function() {
      html.addClass('detail-transition-in');
    }, 1100);
  });
});
