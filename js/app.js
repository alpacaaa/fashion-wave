
$(document).ready(function() {
  var html = $('html'),
    hbody  = $('html,body'),
    keywords_list = $('.keywords-list');

  var scrollUp = function() {
    hbody.animate({ scrollTop: 0 }, 'slow');
  };

  var updateSelectedKeywords = function(id) {
    var el = keywords_list.find('li[data-id="' + id + '"]');
    el.addClass('selected active');

    keywords_list.removeClass('active');
  };


  // INIT (chrome moddafaca)
  $(window).load(function() {
    html.addClass('show-home');

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

    var self = $(this),
      parent = self.closest('.keyword-detail'),
      id = self.data('id') || 'merda';

    updateSelectedKeywords(parent.data('id'));

    $('.buyable_item .item-detail[data-id != "' + id + '"]').hide();

    setTimeout(function() {
      html.removeClass('show-list list-transition-in list-transition-out')
        .addClass('show-detail');
    }, 1000);

    setTimeout(function() {
      html.addClass('detail-transition-in');
    }, 1100);
  });
});
