$(document).ready(function(){	
   var KolMin = $('img.photo').length, NoImg; // количество картинок
   var ImgMas=[];
   for(i=0;i<KolMin;i++)
    {
	ImgMas[i]= new Image();
	ImgMas[i].src=$('img.photo').eq(i).parent().attr('href');
	//alert("<img src='"+ImgMas[i].src+"'>");
	ImgMas[i].id='ImgMas_'+i;
	}
   
   //alert(KolMin);
 $('.photo').live('click', function(){ // нажатие на миниатюру
  if((!$('div#g_fon').length)&&(!$('dix#g_frame').length))
   {  
   $('body').css('overflow', 'hidden'); // типа хорошо
   title=$(this).next('span').text();
   NoImg=($(this).index('img.photo'));
   // alert(NoImg);
   // alert(title);
   var popHREF=$(this).closest("a").attr('href'); // адрес большой фотки
   //alert(popHREF);
   $('body').append("<div id='g_fon' class='no_select'></div>"); //появение фона
   $('div#g_fon').fadeIn('200');
   
   $('div#g_fon').append("<div id='g_pos' class='no_select'><div id='g_frame' class='no_select'></div></div>"); //появление рамки
	
	// загрузка предзагруженного
	var pic = new Image();    // создаем объект "изображение"
	pic.src=ImgMas[NoImg].src;
	//alert(NoImg)
	pic.id = "g_img";
	$('#g_frame').append(pic);
     $('#g_frame').append("<div id='g_f_title'>Изображение "+(NoImg+1)+"/"+KolMin+"<br>"+title+"</div>");
	 width=$('#g_img').width();
	 $('#g_img').attr('class', 'no_select');
	 $('div#g_f_title').css('width', width);	
     //выравнивание окна по центу
     var popWidth = ($('#g_img').width()+30)/2;
     var popHeight = ($('#g_img').height()+30)/2;
	 var bottomHeight = ($('#g_frame').height()+30);
     //alert('Ширина = '+popWidth+" Высота = "+popHeight);
     $('#g_pos').css({
      'margin-left' : -popWidth,
	  'margin-top' : -popHeight,
	  'height' : bottomHeight
     });
	 
   // конец загрузки
   
   //$('div#g_pos').css('overflow', 'scroll');//&#8592 
   $('div#g_frame').fadeIn('200');
   $('div#g_fon').append("<div id='g_prev' class='no_select'></div>");
   }  
  return false;
 });
 
 $('div#g_fon').live('click', function(){ // нажатие / закрытие
  
   $('div#g_fon').fadeOut('slow').remove();  
   $('div#g_frame').remove();
   $('div#g_pos').remove();
   $('div#g_close').remove();
   $(this).remove();
   $('body').css('overflow', 'auto'); 
   
 }); 
 
 $('img#g_img').live('click', function(){ // следующая фотка
  //alert(NoImg);
  if(KolMin==NoImg+1)
   NoImg=0;
  else 
   NoImg+=1; //берем следующее изображение
  
   title=$('span.g_p_title').eq(NoImg).text();
   $('#g_frame').empty();
   $('#g_frame').append(ImgMas[NoImg]).append("<div id='g_f_title'>Изображение "+(NoImg+1)+"/"+KolMin+"<br>"+title+"</div>");
   //alert();
   ImgMas[NoImg].id = "g_img";
   width=$('#g_img').width();   
   $('#g_img').attr('class', 'no_select');
  //alert();
   $('div#g_f_title').css('width', width);	
   //alert();
   popWidth = ($('#g_img').width()+30)/2;
   popHeight = ($('#g_img').height()+30)/2;
   bottomHeight = ($('#g_frame').height()+30);
   $('#g_pos').css({
      'margin-left' : -popWidth,
	  'margin-top' : -popHeight,
	  'height' : bottomHeight
     });	
   //alert();	 
  //alert(popHREF); 
 return false; 
 });
 
 $('div#g_prev').live('click', function(){ // предыдущая фотка
 
  if(NoImg==0)
   NoImg=KolMin-1;
  else
   NoImg-=1;  
  
   title=$('span.g_p_title').eq(NoImg).text();
   $('#g_frame').empty();
   $('#g_frame').append(ImgMas[NoImg]).append("<div id='g_f_title'>Изображение "+(NoImg+1)+"/"+KolMin+"<br>"+title+"</div>");
   //alert();
   ImgMas[NoImg].id = "g_img";
   width=$('#g_img').width();
   $('#g_img').attr('class', 'no_select');
  //alert();
   $('div#g_f_title').css('width', width);	
   //alert();
   popWidth = ($('#g_img').width()+30)/2;
   popHeight = ($('#g_img').height()+30)/2;
   bottomHeight = ($('#g_frame').height()+30);
   $('#g_pos').css({
      'margin-left' : -popWidth,
	  'margin-top' : -popHeight,
	  'height' : bottomHeight
     });	
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
});