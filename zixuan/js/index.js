$(document).ready(function(){
            var nowimg=0;
            var timer=null;
            // 克隆第一张图片，并且放到最后
            $(".box-in li:first").clone().appendTo('.box-in')
            // 右按钮业务
            $(".you").click(rightFunc)
                function rightFunc(){
                if(nowimg<3){
                    nowimg++
                    $(".box-in").animate({"left":nowimg*-1280},1000)
                }else{
                    nowimg=0
                    $(".box-in").animate({"left":4*-1280},1000,function(){
                        $(".box-in").css("left",0)

                    })
                }
                $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')

            }
            // 左按钮业务
            $(".zuo").click(function(){
                if(nowimg>0){
                    nowimg--
                    $(".box-in").animate({"left":nowimg*-1280},1000)
                }else{
                    nowimg=3
                    $(".box-in").css({"left":4*-1280},1000)
                    $(".box-in").animate({"left":nowimg*-1280},1000)
                }
                $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')
            })
            // 小圆点业务
            $(".circle span").click(function(){
                 nowimg=$(this).index()
           $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')
                 $(".box-in").animate({"left":nowimg*-1280}, 1000)
            });

            // 自动轮播

            timer=setInterval(rightFunc,2000)

            $(".box").mouseenter(function(){
                clearInterval(timer)
            })
            $(".box").mouseout(function(){
                clearInterval(timer)
                timer=setInterval(rightFunc,2000)
            })
        })
