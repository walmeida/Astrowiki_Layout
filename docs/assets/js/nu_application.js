$(document).ready(function() {
  
  $("a.detailsButton").click(function() {
      var $link = $(this);
      $link.parents('article.userContainer').find("div.details").toggleClass('show');
  });
  
  $("a.messageButton").click(function() {
      var $link = $(this);
      $link.parents('div.actionsContainer').find("ul.messagesList").toggleClass('show');
      $link.parents('div.actionsContainer').find('ul.mapaNatal').removeClass('show');
      $link.parents('li').toggleClass('active');
      $link.parent('li').removeClass('active');
  });
  
  $("a.mapButton").click(function() {
      var $link = $(this);
      $link.parents('div.actionsContainer').find("ul.mapaNatal").toggleClass('show');
      $link.parents('div.actionsContainer').find('ul.messagesList').removeClass('show');
      $link.parents('li').toggleClass('active');
      $link.parent('li').removeClass('active');
  });
  
});