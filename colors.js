var Links = {
  SetColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    $('a').css('color',color);
    // 이 웹페이지의 모든 a 태그를 jquery로 제어하겠다는 의미
  }
}

var Body = {
  SetColor:function(color){
    //document.querySelector('body').style.color=color;
    $('body').css('color',color);
  },
  SetBackgroundColor(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}


function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'day';

    Links.SetColor('powderblue');

  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';

    Links.SetColor('blue');
  }
}
