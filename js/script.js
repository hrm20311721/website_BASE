//フェードイン
$(function () {
  $(window).on('scroll load', function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.ani').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 100) {
        $(this).addClass('fadein');
      }
    });
  });
});

//ハンバーガーメニュー
$(function () {
  $('.drawer-hamburger').on('click', function () {
    $('header').toggleClass('open');
  })
})

//メニュー内カテゴリードロップダウン
$(function () {
  $('.menu-item.cnav').on('click', function () {
    $(this).children('.subnav').toggleClass('active');
  });
})

//fv用スライダー
$(document).on('ready', function () {
  $('.hero-pc').slick({
    arrows: true,
    dots: true,
    variableWidth: true,
    centerMode: true,
    slidesToShow: 3,
  });
});

//カテゴリーページにTOPページのコンテンツを表示しない
$(function () {
  if (document.URL.match("/categories/")) {
    document.getElementById("top_page").style.display = "none";
  }
});


//インスタ投稿取得
const api = 'https://graph.facebook.com/v14.0/';
const query = '/media?fields=id,media_url,permalink';
const account = '17841405829792963'; //InstagramビジネスID
const token = 'EAAPxGouPPzEBAMUxieMCrkgXj0a5lACS0swb5NZCFkBoMtcrGv3jyjKwlqaSuLnrJ88sZC4v0J6TAZA2Ead2H8p12mUgYMZCqn7OR1LRy4ZCZBFPmIFNTnFdonSwYlzDhVkVSlTM2lZBztImSHFb7X8ELvCCFd37FW20MnE1QknRbpGx3SHQ8ZAKqeUbUesxAnIZD';
const apiurl = api + account + query + '&access_token=' + token;
$.getJSON(apiurl, (response) => {
  const array = response.data;
  $.each(array, function (index, value) {
    if (index < 15) {
      let src = value.media_url;
      let link = value.permalink;
      $('.gallary-wrap').append('<li class="ani"><a href="' + link + '"><img src="' + src + '"></a></li>');
    }
  })
})

//商品ページ商品画像スライダ―
$(document).on('ready', function () {
  $('.item-photos').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  });
});

//商品説明カスタムAppスライダー
$(document).on('ready', function () {
  $('.baseCarouselItems').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
});