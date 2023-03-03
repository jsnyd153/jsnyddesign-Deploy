$("header").html(
  ' <nav class="initial_nav" id="initialNav"> <ul> <li> <div class="burger" id="mainNavToggle"> <span></span> <span></span> <span></span> </div> </li> <li><a href="work.html"><span>work</span></a></li> <li><a href="about.html"><span>about</span></a></li><li><a href="index.html"><span>home</span></a></li> </ul> </nav> <nav class="full_menu"> <div class="background_block"> <div class="background_fill" ></div> </div> <div class="external_link"> <ul> <li><a href="https://www.linkedin.com/in/jsnyd153/"><span>linkedin</span></a></li> <li><a href="https://open.spotify.com/user/123783919?si=7b40bf6a9990490d"><span>spotify</span></a></li><li><a href="https://www.instagram.com/jsnyd153/"><span>instagram</span></a></li> </ul> </div> <div class="page_links"> <ul class="core_nav"> <li><a href="work.html"><span>work</span></a></li> <li><a href="about.html"><span>about</span></a></li> <li><a href="services.html#contact"><span>contact</span></a> </li> </ul> <ul class="featured_nav"> <li><a href="beerolympics.html"><span>beer olympics</span></a></li> <li><a href="macro.html"><span>macro</span></a></li> <li><a href="arborcrest.html"><span>arborcrest</span></a></li> <li><a href="gap.html"><span>gap golf</span></a> </li> <li><a href="other.html"><span>other stuff</span></a> </li> </ul> </div> </nav>'
);

$(".initial_nav--burger").click(function () {
  $(".main_navigation--container").toggleClass("open-nav");
});

$("footer").html(
  ' <div class="background_block"> <div class="background_fill"></div> </div> <div class="social"> <a href="https://www.linkedin.com/in/jsnyd153/" class="social_link">linkedin</a> <a href="https://www.instagram.com/jsnyd153/" class="social_link">instagram</a> <a href="https://open.spotify.com/user/123783919?si=7b40bf6a9990490d" class="social_link">spotify</a> <a href="awkwardpropanesailboats.com/services.html#contact" class="social_link">contact</a> </div> <div class="copyright"> awkward propane sailboats — 2021 </div><div id="postfoot"><p>this site is launching in the middle of a giant update. please pardon any errors or hacky code.</p></div>'
);

$(".dropdown").each(function () {
  $(this)
    .parent()
    .prepend(
      '<svg class="carrot" viewBox="0 0 14.9 9.8"><polyline points="14.1,0.7 7.4,8.3 0.8,0.7 "/></svg>'
    );
});
å;

$("#nav_burger").click(function () {
  $("nav").toggleClass("open");
  $("#nav_search").removeClass("active");
});

$("#search").click(function () {
  $("#nav_search").toggleClass("active");
  $("#nav_search").parent().find(".menu").toggleClass("invisible");
});

$("nav .background_block").click(function () {
  $("#nav_search").removeClass("active");
  $("#nav_search").parent().find(".menu").removeClass("invisible");
});

$(".input_wrapper").click(function () {
  $("#nav_search").addClass("active");
});

$(".carrot").click(function () {
  $(this).parent().find(".dropdown").toggleClass("open");
});
