
function boxify(selector){
  $(selector).each(function(){

    var w       = $(this).outerWidth();
    var h       = $(this).outerHeight();

    var s, border, box, pt, pr, pb, pl, dir;


    if(!$(this).data('boxify-s')){
      bt      = parseInt($(this).css('border-top-width'));
      br      = parseInt($(this).css('border-right-width'));
      bb      = parseInt($(this).css('border-bottom-width'));
      bl      = parseInt($(this).css('border-left-width'));

      dir = false;
      if(!bt && br && bb && !bl){
        dir = 'se';
        s   = parseInt($(this).css('border-bottom-width'));
      }else if(!bt && !br && bb && bl){
        dir = 'sw';
        s   = parseInt($(this).css('border-bottom-width'));
      }

      border  = $(this).css('border-bottom-color');
      box     = $(this).css('background-color');
      pt      = parseInt($(this).css('padding-top')) + bt;
      pr      = parseInt($(this).css('padding-right')) + br;
      pb      = parseInt($(this).css('padding-bottom')) + bb;
      pl      = parseInt($(this).css('padding-left')) + bl;

      $(this).data('boxify-dir', dir);
      $(this).data('boxify-s', s);
      $(this).data('boxify-border', border);
      $(this).data('boxify-box', box);
      $(this).data('boxify-pt', pt);
      $(this).data('boxify-pr', pr);
      $(this).data('boxify-pb', pb);
      $(this).data('boxify-pl', pl);

    }else{
      dir     = $(this).data('boxify-dir');
      s       = $(this).data('boxify-s');
      border  = $(this).data('boxify-border');
      box     = $(this).data('boxify-box');
      pt      = $(this).data('boxify-pt');
      pr      = $(this).data('boxify-pr');
      pb      = $(this).data('boxify-pb');
      pl      = $(this).data('boxify-pl');
    }

    if(dir){
      switch(dir){
        case 'se':
          svg = '';
          svg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' + w + ' ' + h +'" style="enable-background:new 0 0 ' + w + ' ' + h +';" xml:space="preserve">';
          
          svg += '<path style="fill:' + box + '" d="M';
          svg += (0)    + ',' + (0)   + ' ';
          svg += (w-s)  + ',' + (0)   + ' ';
          svg += (w-s)  + ',' + (h-s) + ' ';
          svg += (0)    + ',' + (h-s) + '';
          svg += 'z"/>';

          svg += '<path style="fill:' + border + '" d="M';
          svg += (0)    + ',' + (h-s) + ' ';
          svg += (w-s)  + ',' + (h-s) + ' ';
          svg += (w-s)  + ',' + (0)   + ' ';
          svg += (w)    + ',' + (s)   + ' ';
          svg += (w)    + ',' + (h)   + ' ';
          svg += (s)    + ',' + (h)   + '';
          svg += 'z"/>';
          svg += '</svg>';
          break;
        case 'sw':
          svg = '';
          svg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' + w + ' ' + h +'" style="enable-background:new 0 0 ' + w + ' ' + h +';" xml:space="preserve">';
          
          svg += '<path style="fill:' + box + '" d="M';
          svg += (s)    + ',' + (0)   + ' ';
          svg += (w)    + ',' + (0)   + ' ';
          svg += (w)    + ',' + (h-s) + ' ';
          svg += (s)    + ',' + (h-s) + '';
          svg += 'z"/>';

          svg += '<path style="fill:' + border + '" d="M';
          svg += (s)    + ',' + (0)   + ' ';
          svg += (s)    + ',' + (h-s) + ' ';
          svg += (w)    + ',' + (h-s) + ' ';
          svg += (w-s)  + ',' + (h)   + ' ';
          svg += (0)    + ',' + (h)   + ' ';
          svg += (0)    + ',' + (s)   + '';
          svg += 'z"/>';
          svg += '</svg>';
          break;
      }

      $(this).css({
        'background' : 'none',
        'border' : 'none',
        'background-repeat' : 'no-repeat',
        'background-position' : 'top left',
        'background-image' : 'url("' + IEencode(svg) + '")',
        'padding-top' : pt + 'px',
        'padding-right' : pr + 'px',
        'padding-bottom' : pb + 'px',
        'padding-left' : pl + 'px'
      })
    }
  
  });
}

//https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
function IEencode(svg) {
  return 'data:image/svg+xml,' + 

  svg.replace('<svg',(~svg.indexOf('xmlns')?'<svg':'<svg xmlns="http://www.w3.org/2000/svg"'))
  //
  //   Encode (may need a few extra replacements)
  //
  .replace(/"/g, '\'')
  .replace(/%/g, '%25')
  .replace(/&/g, '%26')
  .replace(/#/g, '%23')       
  .replace(/{/g, '%7B')
  .replace(/}/g, '%7D')         
  .replace(/</g, '%3C')
  .replace(/>/g, '%3E')

  .replace(/\s+/g,' ') 
  // 
  //    The maybe list (add on documented fail)
  // 
  //  .replace('|', '%7C')
  //  .replace('[', '%5B')
  //  .replace(']', '%5D')
  //  .replace('^', '%5E')
  //  .replace('`', '%60')
  //  .replace(';', '%3B')
  //  .replace('?', '%3F')
  //  .replace(':', '%3A')
  //  .replace('@', '%40')
  //  .replace('=', '%3D')          
}