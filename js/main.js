$(document).ready(function() {
  var json = ['你竟然点开了!','哈哈哈','恭喜你，你被骗了','知道今天是什么时间吗？','今天是4月1号','愚人节','愚人节快乐','写这么多就是想让你开心一下','开不开心',
              '惊不惊喜','意不意外','额，我感觉我班门弄斧了','再来一遍'];
  function foo(){
      for(var i = 0; i < 100; i++)
      {
        json.push(json[i]);
        alert(json[i]);
      }
  } 
  //foo();
  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 2000) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '320px', 'width': '22%'}, 400, swing = 'swing', function() {} );
    }

    
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    // 导航按钮被点击
    // this.style.backgroundColor = '#fff'; 设置颜色后会自动消失
  });  
});
