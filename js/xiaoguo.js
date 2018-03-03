/**
 * Created by Yuejiaqun on 2018/3/2.
 */

$(document).ready(function () {


    //轮播图
    let n=0;
    let lis=$(".img_box li");
    let box=$(".banner");
    let left=$(".banner_left");
    let right=$(".banner_right");
    let btnbox=$(".btn_box li");
    function move() {
      n++;
      if(n>=lis.length){
          n=0;
      }
      lis.eq(n).addClass("active").siblings().removeClass("active");
      btnbox.eq(n).addClass("active").siblings(btnbox).removeClass("active");
    }
    let t=setInterval(move,3000);
    box.on("mouseover",function () {
        clearInterval(t);
    }).on("mouseout",function () {
        t=setInterval(move,3000);
    })
    left.on('click',function () {
        n--;
        if (n<0){
            n=lis.length-1;
        }
        lis.eq(n).addClass("active").siblings().removeClass("active");
        btnbox.eq(n).addClass("active").siblings(btnbox).removeClass("active");
    })
    right.on("click",function () {
        move();
    })
    btnbox.on("click",function () {
        n=$(this).index()-1;
        move();
    })

    //banner测展示
    let tab=$(".tab");
    let is_active=false;
    tab.on("mouseover",function () {
        if(is_active){
            return
        }
        is_active=true;
        $(this).children('.chil').attr('class','chil tab_active');

    }).on("mouseout",function () {
        is_active=false;
        $(this).children('.chil').attr('class','chil');
    })

    //楼层选项卡
    function tabs(arr,brr) {
        arr.find(".rm").mouseover(function () {
            let index=$(this).index();
            $(this).addClass("rm_active").siblings().removeClass("rm_active");
            brr.find(".bottom_right").eq(index).show().siblings().hide();
        })
    }
    let jd=$("#jiadian");  let jdmenu=$("#jiadian .jdbt");
    let zn=$("#zhineng");  let znmenu=$("#zhineng .jdbt");
    let dp=$("#dapei");    let dpmenu=$("#dapei .jdbt");
    let pj=$("#peijian");   let pjmenu=$("#peijian .jdbt");
    let zb=$("#zhoubian");   let zbmenu=$("#zhoubian .jdbt");
    tabs(jd,jdmenu);
    tabs(zn,znmenu);
    tabs(dp,dpmenu);
    tabs(pj,pjmenu);
    tabs(zb,zbmenu);

    //图书轮播
    // function nnlb(cc) {
    //     let box=$("cc");
    //     let neis=$(".neirong_list li");
    //     let width=box.width;
    //     let circle=$(".tushu_bodian .dian");
    //     let now=0;
    //     let next=0;
    //     function move() {
    //         next=now+1;
    //         if(next>=neis.length){
    //             next=0;
    //         }
    //
    //     }
    //
    // }

    //购物车
    $(".nk_rightRight").on("mouseenter.f",function () {
        $(".cart").css("padding","15px 0 0").slideDown("slow");
    }).on("mouseleave",function () {
        $(".cart").slideUp("slow");
    })

    //nav
    $(".nav").on("mouseenter",function () {
        $(this).find(".navbox").slideDown("slow");
    }).on("mouseleave",function () {
        $(this).find(".navbox").slideUp("slow");
    });
    $(".nav").find(".navtab").mouseover(function () {
        let nvaindex=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".navmenu").eq(nvaindex).show().siblings().hide();
    });

    $(".linlei").mouseover(function () {
        $(this).siblings(".navbox").slideUp("slow");
    }).mouseout(function () {
        $(this).siblings(".navbox").slideDown("slow");
    })

    //小米明星单品
    let xmdpbox=$(".danpin");
    let xmwidth=xmdpbox.width;
    let xmdp=$(".danpin_bottom");
    let now1=0;
    let next1=0
    function move2() {
        next1=now1+1;
        if(next1>=xmdp.length){
            next1=0;
        }
        xmdp[next1].style.left='100%';
        animate(xmdp[now1],{left:-xmwidth});
        animate(xmdp[next1],{left:0});
    };
    let dpt=setInterval(move2,5000)




















})