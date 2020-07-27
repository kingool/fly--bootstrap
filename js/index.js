$(function(){
    
    // 导航条滑出事件
    $(".navBtn").click(function(){
        // console.log(123)
        $(".coverBox").css(
            {display: "block"}
        )
       $(".navMoveBox").animate({left:0},500)
    
    })

    $(".coverBox").click(function(){

        $(".navMoveBox").animate({left:-260},500)
        $(".coverBox").css(
            {display: "none"}
        )
    })


    // 页面打字机事件
    var str = "做一个响应式网站<br>让世界更好地了解您"

    var textArr = []
    var br = ""
    var brStart = false  // 换行标签开始标记
    var brEnd = false    // 换行标签结束标记
    var timer = null     // 定时器
    var index = 0
    var text = ""


    console.log(str.length)
    for(var i = 0; i < str.length;i++){
        if(str[i] == "<"){
            brStart = true
        }
        if(str[i] == ">"){
            brEnd = true
        }

        if(brStart){
            br += str[i]
            if(brEnd){
                textArr.push(br)
                brStart = false
            }

        }else{
            textArr.push(str[i])
        }

        

    }
    // console.log(textArr)

    timer = setInterval(function(){
        text += textArr[index]
        $(".infoText-1 .text-1").html(text + "<b>|</b>")

        index++

        if(index >= textArr.length){
           
            clearInterval(timer)
        }

    },300)


    // 模板轮播图的js
     // 获取li宽度
            // .width()  获取的宽度 不包括 padding， margin 和 border ，只是获取到width
            // .innerWidth()      width + padding
            // .outerWidth()      width + padding + border
            // .outerWidth(true)   width + padding + border + margin    
            var width = $(".bannerList li").innerWidth()
            // console.log(width)

            // 声明索引
            var bannerIndex = 0

            var timeId = setInterval(changeImg, 2000)


            function changeImg() {
                bannerIndex++
                // console.log(index)
                // 限定index 范围
                if(bannerIndex > $(".bannerList li").length - 4 ){
                    bannerIndex = 0
                }


                $(".bannerList").animate({marginLeft: -bannerIndex * width},500)

            }

            // 左边按钮的点击事件
            $(".prevBtn").click(function(){
                bannerIndex--
                if(bannerIndex < 0){
                    bannerIndex = $(".bannerList li").length - 4
                }
                $(".bannerList").animate({marginLeft: -bannerIndex * width},500) 
            })

            // 右边按钮的点击事件
            $(".nextBtn").click(function(){
                changeImg()
            })


            // 鼠标移入 清除定时器
            $(".bannerBox").mouseover(function(){
                clearInterval(timeId)
            })

            // 鼠标移出  定时器重启
            $(".bannerBox").mouseout(function(){
                timeId = setInterval(changeImg, 2000)
            })


            // 页面可见性改变事件  visibilitychange   js事件 
            document.addEventListener("visibilitychange",function(){
                
                if(document.hidden){  // 页面进行刷新 或 离开
                    // console.log("页面离开了")
                     clearInterval(timeId)
                }else{  // 回到当前页面
                    timeId = setInterval(changeImg, 2000) 
                }
            })


            // 页面滚动 文字动画

            // 获取浏览器高度
            var h = $(window).height()
            console.log(h)
            
            // 页面滚动事件
            $(window).scroll(function(){
                // 获取页面的滚动距离
                var top = $(this).scrollTop()
                console.log(top)
                // console.log($(".conTitle").offset().top)
                if(top + h >= $(".conTitle").offset().top){
                    $(".conTitle").addClass("dh1")
                    $(".fuTitle").addClass("dh1")
                }

                
            })


            // 右侧菜单 二维码提示框
            $('.box3').tooltip()







})