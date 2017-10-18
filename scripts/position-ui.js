$(document).ready(function(){
  var image={
    radius:100,
    left:30,
    top:20,
    padding:10
  }
  $("#image").offset(image);
  $("#image").width(image.radius*2);
  $("#image").height(image.radius*2);
  $("#image-wrapper").offset({top:image.top-image.padding,left:0});
  $("#image-wrapper").width(image.left+image.radius+image.radius+image.padding);
  $("#image-wrapper").height((image.radius+image.padding)*2);

  var content={padding:50}
  content.left=$("#image-wrapper").width()+content.padding;
  content.top=content.padding;
  $("#content").offset(content);
  $("#content").css({right:content.padding+$("#sideline").width()});

  sizeContent();
});
$(window).resize(function(){
  sizeContent();
});
function sizeContent(){
  var threshold=1444;
  var width=1089;
  if($(window).width()>=threshold){
    $("#content").addClass("container");
    $("#content").width(width+"px");
    $("#content").removeClass("container-fluid");
  }else{
    $("#content").addClass("container-fluid");
    $("#content").width("auto");
    $("#content").removeClass("container");
  }

  var bottom=$("#content").offset().top+$("#content").height()+50;
  if(bottom>$(window).height()){
    bottom+=parseInt($("body").css("--margin"));
    $("#signature").css("top",bottom+"px");
    $("#signature").css("bottom","auto");
  }else{
    $("#signature").css("bottom","5px");
    $("#signature").css("top","auto");
  }
}
