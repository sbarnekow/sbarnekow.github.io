$(document).ready(function(){
  mixpanel.track_links("#resume #philosophy #projects #contact", "div #tags click")

  $('a').on('click', function(){
    $('#sticky').sticky({ topSpacing: 0});
  });

  var userFeed = new Instafeed({
    get: 'user',
    userId: 16339435,
    accessToken: '16339435.467ede5.0e448942a22d4dc492b4e5b473114ef7',
    sortBy: 'random',
    limit: '55'
  });

  userFeed.run();

  function scrollAnchor(idName){
  var aTag = $("div[name='" + idName + "']");
    $('body').animate({ scrollTop: aTag.offset().top - 100}, 'slow');
    $('#tags').css('marginTop', 0);
  }

    $('#resume').click(function(){
      scrollAnchor('resumesec');
    });
    $('#philosophy').click(function(){
      scrollAnchor('philosec');
    });
    $('#projects').click(function(){
      scrollAnchor('projsec');
    });
    $('#contact').click(function(){
        scrollAnchor('contactsec');
    });

});

