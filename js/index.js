/**
 * Created by Ibokan on 2015/10/10.
 */
'use strict'
$(function(){
    function allinit(){
        for(var i = 0 ;i<6;i++){
            $('.div1').css({'display':'none'});
        }
    }
  $('.yuyue').bind('click',function(){
     allinit();
      $('.A0').css({'display':'block'});
  })
    $('.mingdan').bind('click',function(){
        allinit();
        $('.A1').css({'display':'block'});
        $.ajax({
            url:'http://sjz.bokanedu.com/tgr/api/?day=52-2&type=zj',
            dataType:'json',
            success:function(data){
                function all(p){
                    $('#gifts').append('<li><span>' +data.data[p].gift+'</li></span>');
                    $('#names').append('<li><span>' +data.data[p].name+'</li></span>');
                    var sub = data.data[p].tele.substr(5,4);
                    var tel = data.data[p].tele.replace(sub,'***');
                    $('#teles').append('<li><span>' +tel+'</li></span>')
                }
                function init(){
                    $('#nums').children("li").remove();
                    $('#names').children("li").remove();
                    $('#gifts').children("li").remove();
                    $('#teles').children("li").remove();
                }
                for(var i=0;i<data.data.length;i++){
                   all(i);
                    var j = i+1;
                    $('#nums').append('<li>'+0+j+'<span>期<span>'+'</li>');
                }
               $('#next').bind('click',function(){
                   init();
                   for(var i=0;i<data.data.length;i++){
                       all(i);
                       var j = i+1;
                       $('#nums').append('<li>'+0+j+'<span>期<span>'+'</li>');
                   }
               })
                $('#last').bind('click',function(){
                    init();
                    for(var i=9;i<data.data.length;i++){
                        all(i);
                        var j = i+1;
                        $('#nums').append('<li>'+j+'<span>期<span>'+'</li>');
                    }

                })
            }
        })
    })
    $('.xiangqing').bind('click',function(){
        allinit();
        $('.A2').css({'display':'block'});
    })
    $('.fenxiang').bind('click',function(){
        allinit();
        $('.A4').css({'display':'block'});
    })
    $('.shouye').bind('click',function(){
        allinit();
        $('.A5').css({'display':'block'});
    })

    $('.btn2').bind('click',function(){
        var $text = $("#name").val();
        var $pass = $('#tel').val();
        $.ajax({
            url:'http://sjz.bokanedu.com/tgr/api/?day=52&type=og',
            dataType:'json',
            data:{name:$text,mobile:$pass},
            type:"POST",
            success:function(data){
                if(data.code==0){
                    $('.A0').css({'display':'none'});
                    $('.A3').css({'display':'block'});
                }
            }
        })
    })

})


