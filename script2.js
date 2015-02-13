$(document).ready(function(){  
var NoImg;
var KolMin;
/*/
IMAGE = "Изображение";
PREV  = "Предыдущее изображение";
NEXT  = "Следующее изображение";
CLOSE = "Закрыть";
/**/

IMAGE = "Pic";
PREV  = "Prev";
NEXT  = "Next";
CLOSE = "Close";

   var win_w = $(document).width();
   var win_h = $(document).height();
   var ImgMas=[];
       KolMin = $("img[rel^='gal_']").length; // количество картинок
   for(i=0;i<KolMin;i++)
    {
	ImgMas[i]= new Image();
	ImgMas[i].src=$("img[rel^='gal_']").eq(i).parent().attr('href');
	ImgMas[i].id='ImgMas_'+i;
	ImgMas[i].title=NEXT;
	
	}
   
 $("img[rel^='gal_']").live('click', function(){  // нажатие на миниатюру
  if((!$('div#g_fon').length)&&(!$('dix#g_frame').length))
   {  
   $('body').attr('style', 'overflow: hidden; margin:0');
   im_name=$(this).attr('title');       // имя
   a_p_f=$(this).parent().attr('rel');
   a_p='';
   if(a_p_f=='aga')
    a_p=a_panel+"<hr>";
   
   if(!im_name)
    im_name='';
   title=$(this).next('span').text();   // описание
   if(!title)
    title='';
   NoImg=($(this).index("img[rel^='gal_']"));
   
   nom=$(this).attr('nom');
   
   var popHREF=$(this).closest("a").attr('href'); // адрес большой фотки
   var close_cross="<div id='g_close_cross' title='"+CLOSE+"'>&times;</div>"; // кнопка закрытия
   var prev_but="<div id='g_prev_but'>&#9668;</div>";       // кнопка prev
   $('body').append("<div id='g_fon' class='no_select'></div>"); //появение фона
   $('div#g_fon').fadeIn('200');
   $('div#g_fon').append("<div id='g_pos' class='no_select'><div id='g_frame' class='no_select'>"+close_cross+"</div></div>"); //появление рамки 
   
   show_photo(NoImg);
   
   //$('div#g_frame').fadeIn('200');
   $('div#g_fon').append("<div id='g_prev' class='no_select' title='"+PREV+"'></div>");
   }  

  return false;
 });

 $('div#g_fon, #g_close_cross').live('click', function(){ // нажатие / закрытие
  
   close();
  return false;
 }); 
 
 $('img#g_img, #g_prev_but').live('click', function(){ // следующая фотка
  if(KolMin==NoImg+1)
   NoImg=0;
  else 
   NoImg+=1; //берем следующее изображение   
  show_photo(NoImg);
   
 return false; 
 });
 
 $('div#g_prev').live('click', function(){ // предыдущая фотка
 
  if(NoImg==0)
   NoImg=KolMin-1;
  else
   NoImg-=1; 
  
  show_photo(NoImg);
  return false;
 });
 $('div#g_prev').live('bdlclick', function(){
  return false;
 });
 $('#g_f_title').live('click', function(){
  return false;
 });
 $('div#g_frame').live('click', function(){
  return false;
 });
 
 ////////////// функции //////////////////////////////////////////////////////////////////
 
function show_photo(NoImg2)
 {
 im_name=$("img[rel^='gal_']").eq(NoImg2).attr('title');  
   if(!im_name)
    im_name=''
   else
	im_name="<b><span id='g_i_pht_name'>"+im_name+"</span></b><br>";
   title=$("img[rel^='gal_']").eq(NoImg2).next('span').html();
   if(!title)
    title='';
   else
	title="<span id='g_i_pht_title'>"+title+"</span>";
  g_i_num="<span class='g_i_num'>"+IMAGE +(NoImg2+1)+"/"+KolMin+"</span><br>";
  
    nom=$("img[rel^='gal_']").eq(NoImg2).attr('nom');	
	var alb=$("img[rel^='gal_']").eq(NoImg2).attr('alb');
	/*/
   $('#g_frame').empty();
   /**/
   $("#g_img").remove();   
   $("#g_f_title").remove();
   
   $('#g_frame').append(ImgMas[NoImg2]).append("<div id='g_f_title' nom='"+nom+"' alb='"+alb+"'>"+g_i_num+im_name+title+"</div>");
   /**/
   
   
   
   ImgMas[NoImg2].id = "g_img";
   width=$('#g_img').width();   
   $('#g_img').attr('class', 'no_select');
  
   $('div#g_f_title').css('width', width);	
   
   popWidth = ($('#g_img').width()+30)/2-15;
   popHeight = ($('#g_img').height()+30)/2;
   if(popHeight>320)
	  popHeight=320;
   bottomHeight = ($('#g_frame').height()+30);
   $('#g_pos').css({
      'margin-left' : -popWidth,
	  'margin-top' : -popHeight,
	  'height' : bottomHeight
     });	
 }
function close()
 {
 $('div#g_fon').fadeOut('slow').remove();  
   $('div#g_frame').remove();
   $('div#g_pos').remove();
   $('div#g_close').remove();
   $('div#g_fon').remove();
   $('body').attr('style', 'overflow: auto; margin: 0;');
   return false;
 }
function strip_tags( str ){ 
    return str.replace(/<\/?[^>]+>/gi, '');
} 
});