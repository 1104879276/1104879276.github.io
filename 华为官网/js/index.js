new Vue({
    el:".main-list",
    data: {
        list1col:[
              {img:"images/home/main/shouji/pic1.jpg",p:"荣耀畅玩7C",span:"送100元读书劵",b:"￥899",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/shouji/pic2.jpg",p:"HUAWEI Mate 10",span:"限时优惠200元",b:"￥3999",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/shouji/pic3.jpg",p:"荣耀畅玩6",span:"限量赠保护壳",b:"￥599",icon:"images/home/baokuan.png"},
              {img:"images/home/main/shouji/pic4.jpg",p:"华为畅享8",span:"领券立减50元+赠超值配件",b:"￥1299",icon:"images/home/zhekoubtn.png"},
             ],
        list1swiper:[
              {img:"images/home/main/shouji/pic5.jpg",span:"荣耀畅玩7",p:"小巧全面屏",txt:"￥599",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/shouji/pic6.jpg",span:"华为畅享8e",p:"赠精美配件",txt:"￥1099",icon:"images/home/shoufa.png"},
              {img:"images/home/main/shouji/pic7.jpg",span:"荣耀9 ",p:"限时最高优惠500元",txt:"￥1899",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/shouji/pic8.jpg",span:"HUAWEI Mate 10 ",p:"保时捷设计",txt:"￥8999",icon:"images/home/mianxi.png"},
              {img:"images/home/main/shouji/pic9.jpg",span:"荣耀9青春版",p:"最高优惠350",txt:"￥999",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/shouji/pic10.jpg",span:"HUAWEI 麦芒6",p:"5.9''全面屏 出色四镜头",txt:"￥2199",icon:"images/home/zhekoubtn.png"},
              
             ],
        list2col:[
              {img:"images/home/main/bijiben/pic1.jpg",p:"荣耀MagicBook",span:"12小时长续航",b:"￥4988",icon:"images/home/xinpin.png"},
              {img:"images/home/main/bijiben/pic2.jpg",p:"HUAWEI MateBook D(2018)",span:"最高直降800",b:"￥5188",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/bijiben/pic3.jpg",p:"荣耀MagicBook 锐龙版",span:"10:08限时抢购",b:"￥3999",icon:"images/home/shoufa.png"},
              {img:"images/home/main/bijiben/pic4.jpg",p:"HUAWEI MateBook X Pro",span:"13.9英寸笔记本电脑",b:"￥7988",icon:"images/home/zhekoubtn.png"},
              
             ],
        list2swiper:[
              {img:"images/home/main/bijiben/pic5.jpg",span:"HUAWEI MateBook X",p:"尊享6期分期免息",txt:"￥7188",icon:"images/home/mianxi.png"},
              {img:"images/home/main/bijiben/pic6.jpg",span:"HUAWEI MateBook D",p:"最高直降800元",txt:"￥3788",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/bijiben/pic7.jpg",span:"荣耀MagicBook",p:"星云紫高颜值轻薄本",txt:"￥4988",icon:"images/home/xinpin.png"},
             ],
        list3col:[
              {img:"images/home/main/pingban/pic1.png",p:"华为平板 M5 8.4英寸",span:"8.4英寸2K屏开启高清视界",b:"￥2088",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/pingban/pic2.jpg",p:"荣耀WaterPlay ",span:"最高直降100元",b:"￥1599",icon:"images/home/zhijiang.png"},
              {img:"images/home/main/pingban/pic3.png",p:"华为平板 M5 10.8英寸",span:"10.8英寸2K屏开启高清视界",b:"￥2488",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/pingban/pic4.jpg",p:"荣耀畅玩平板2 9.6英寸",span:"最高直降100",b:"￥1199",icon:"images/home/zhijiang.png"},
             ],
        list3swiper:[
              {img:"images/home/main/pingban/pic5.jpg",span:"华为平板 M3 青春版 10.1英寸 ",p:"哈曼卡顿品质立体声",txt:"￥2199",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/pingban/pic6.jpg",span:"荣耀畅玩平板2 8英寸",p:"最高直降100元",txt:"￥999",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/pingban/pic7.jpg",span:"华为平板M3 青春版 8英寸",p:"阅读视频好搭档",txt:"￥1399",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/pingban/pic8.jpg",span:"荣耀平板2",p:"最高降200元 赠保护膜",txt:"￥1199",icon:"images/home/tehui.png"},
              {img:"images/home/main/pingban/pic9.jpg",span:"荣耀畅玩平板2 7英寸",p:"限时直降11元",txt:"￥588",icon:"images/home/zhekoubtn.png"},
             ],
        list4col:[
              {img:"images/home/main/zhinengchuandai/pic1.jpg",p:"HUAWEI WATCH 2",span:"华为第二代智能运动手表",b:"￥1638",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengchuandai/pic2.jpg",p:"荣耀手环3",span:"限时最高降30元",b:"￥139",icon:"images/home/baokuan.png"},
              {img:"images/home/main/zhinengchuandai/pic3.jpg",p:"华为手环B3 青春版",span:"多彩腕带 活动记录",b:"￥499",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengchuandai/pic4.jpg",p:"荣耀畅玩手环 A2",span:"限时优惠50元",b:"￥149",icon:"images/home/zhijiang.png"},
             ],
        list4swiper:[
              {img:"images/home/main/zhinengchuandai/pic5.jpg",span:"HUAWEI WATCH 2 Pro",p:"手机手表共享一个号码",txt:"￥2588",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengchuandai/pic6.jpg",span:"荣耀手表 S1",p:"限时直降50元",txt:"￥499",icon:"images/home/remai.png"},
              {img:"images/home/main/zhinengchuandai/pic7.jpg",span:"华为运动手环",p:"50米防水游泳",txt:"￥388",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengchuandai/pic8.jpg",span:"华为手环 B3 ",p:"蓝牙耳机与智能手环结合",txt:"￥999",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengchuandai/pic9.jpg",span:"HUAWEI VR 2",p:"适配HUAWEI Mate 10系列",txt:"￥1999",icon:"images/home/zhekoubtn.png"},
             ],
        list5col:[
              {img:"images/home/main/zhinengjiaju/pic1.jpg",p:"荣耀路由2",span:"限时直降20元",b:"￥179",icon:"images/home/remai.png"},
              {img:"images/home/main/zhinengjiaju/pic2.jpg",p:"华为子母路由 Q2",span:"套装尊享6期分期免息",b:"￥799",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengjiaju/pic3.jpg",p:"荣耀分布式路由",span:"限时直降50元",b:"￥849",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengjiaju/pic4.jpg",p:"华为随行WiFi 2",span:"4G全网通 3000mAh大电池",b:"￥499",icon:"images/home/zhekoubtn.png"},
             ],
        list5swiper:[
              {img:"images/home/main/zhinengjiaju/pic5.jpg",span:"华为子母路由器 Q1",p:"适合大户型和别墅型",txt:"￥599",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengjiaju/pic6.jpg",span:"荣耀盒子Pro （白色）",p:"限时直降20元",txt:"￥399",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengjiaju/pic7.jpg",span:"华为路由器WS5100",p:"支持5G信号智能优先选择",txt:"￥159",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengjiaju/pic8.jpg",span:"荣耀路由Pro",p:"限时直降14元",txt:"￥314",icon:"images/home/remai.png"},
              {img:"images/home/main/zhinengjiaju/pic9.jpg",span:"华为4G路由 2",p:"千兆网口 一机两用",txt:"￥389",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/zhinengjiaju/pic10.jpg",span:"荣耀路由X1 增强版",p:"限时直降20元",txt:"￥129",icon:"images/home/zhijiang.png"},
             ],
        list6col:[
              {img:"images/home/main/rexiaopeijian/pic1.jpg",p:"华为智能体脂秤",span:"关注你的每一克",b:"￥169",icon:"images/home/baokuan.png"},
              {img:"images/home/main/rexiaopeijian/pic2.jpg",p:"荣耀xSport 运动蓝牙耳机",span:"直降50元领券更优惠",b:"￥249",icon:"images/home/remai.png"},
              {img:"images/home/main/rexiaopeijian/pic3.png",p:"HUAWEI FreeBuds无线耳机",span:"现货速发",b:"￥799",icon:"images/home/xinpin.png"},
              {img:"images/home/main/rexiaopeijian/pic4.jpg",p:"荣耀智能体脂秤",span:"限时优惠50元",b:"￥149",icon:"images/home/remai.png"},
             ],
        list6swiper:[
              {img:"images/home/main/rexiaopeijian/pic5.jpg",span:"华为6700mAh 移动电源",p:"限时优惠20元",txt:"￥79",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/rexiaopeijian/pic6.jpg",span:"荣耀心晴耳机 心率智能耳机",p:"心率检测/高解析音频认证",txt:"￥129",icon:"images/home/xinpin.png"},
              {img:"images/home/main/rexiaopeijian/pic7.jpg",span:"华为10000mAh移动电源",p:"9V2A快充",txt:"￥159",icon:"images/home/baokuan.png"},
              {img:"images/home/main/rexiaopeijian/pic8.jpg",span:"荣耀移动电源10000mAh快充版",p:"直降30元领券更优惠",txt:"￥139",icon:"images/home/remai.png"},
              {img:"images/home/main/rexiaopeijian/pic9.jpg",span:"华为运动心率蓝牙耳机",p:"限时特惠399元！",txt:"￥399",icon:"images/home/zhijiang.png"},
              {img:"images/home/main/rexiaopeijian/pic10.jpg",span:"荣耀引擎耳机2代",p:"直降40元领券更优惠！",txt:"￥89",icon:"images/home/remai.png"},
             ],
        list7col:[
              {img:"images/home/main/shengtaichanpin/pic1.jpg",p:"九阳破壁调理机",span:"直降500元",b:"￥999",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/shengtaichanpin/pic2.jpg",p:"品多全自动智能指纹门锁",span:"直降200元 送海雀Q1",b:"￥2799",icon:"images/home/xinpin.png"},
              {img:"images/home/main/shengtaichanpin/pic3.jpg",p:"海雀摄像头Q1",span:"限时直降50元",b:"￥209",icon:"images/home/remai.png"},
              {img:"images/home/main/shengtaichanpin/pic4.jpg",p:"欧普 智清读写台灯",span:"限时直降40元",b:"￥219",icon:"images/home/zhekoubtn.png"},
             ],
        list7swiper:[
              {img:"images/home/main/shengtaichanpin/pic5.jpg",span:"科沃斯地宝 扫地机器人",p:"直降150元  送擦窗机",txt:"￥999",icon:"images/home/zhijiang.png"},
              {img:"images/home/main/shengtaichanpin/pic6.jpg",span:"Sleepace享睡-香薰助眠灯SA1001-2",p:"限时直降50元",txt:"￥299",icon:"images/home/tejia.png"},
              {img:"images/home/main/shengtaichanpin/pic7.jpg",span:"三思智能彩色球泡灯",p:"直降14元",txt:"￥85",icon:"images/home/baokuan.png"},
              {img:"images/home/main/shengtaichanpin/pic8.jpg",span:"55度moscup智能降温杯",p:"一分钟快速降温",txt:"￥238",icon:"images/home/xinpin.png"},
              {img:"images/home/main/shengtaichanpin/pic9.jpg",span:"耐翔 Type-C 手机电脑通用",p:"限时直降50元",txt:"￥99",icon:"images/home/zhekoubtn.png"},
              {img:"images/home/main/shengtaichanpin/pic10.jpg",span:"金士顿 高速存储卡",p:"限时直降24.1元",txt:"￥43.9",icon:"images/home/zhekoubtn.png"},
             ]
    }
});

new Vue({
    el:"#list",
    data: {
        list:[
              {name: "HUAWEI P20",img: 'images/shop-car/pic1.jpg',price:'￥ 4288'},
              {name: "荣耀10",img: 'images/shop-car/pic2.jpg',price:'￥ 2599'},
              {name: "HUAWEI Mate 10",img: 'images/shop-car/pic3.jpg',price:'￥ 3999'},
              {name: "荣耀V 10",img: 'images/shop-car/pic4.jpg',price:'￥ 2299'},
              {name: "HUAWEI nova 3e",img: 'images/shop-car/pic5.jpg',price:'￥ 2199'},
              {name: "荣耀9青春版",img: 'images/shop-car/pic6.jpg',price:'￥ 999'},
              {name: "HUAWEI P20",img: 'images/shop-car/pic1.jpg',price:'￥ 4288'},
              {name: "荣耀10",img: 'images/shop-car/pic2.jpg',price:'￥ 2599'},
              {name: "HUAWEI Mate 10",img: 'images/shop-car/pic3.jpg',price:'￥ 3999'},
              {name: "荣耀V 10",img: 'images/shop-car/pic4.jpg',price:'￥ 2299'},
              {name: "HUAWEI nova 3e",img: 'images/shop-car/pic5.jpg',price:'￥ 2199'},
              {name: "荣耀9青春版",img: 'images/shop-car/pic6.jpg',price:'￥ 999'},
              {name: "HUAWEI P20",img: 'images/shop-car/pic1.jpg',price:'￥ 4288'},
              {name: "荣耀10",img: 'images/shop-car/pic2.jpg',price:'￥ 2599'},
              {name: "HUAWEI Mate 10",img: 'images/shop-car/pic3.jpg',price:'￥ 3999'},
              {name: "荣耀V 10",img: 'images/shop-car/pic4.jpg',price:'￥ 2299'},
              {name: "HUAWEI nova 3e",img: 'images/shop-car/pic5.jpg',price:'￥ 2199'},
              {name: "荣耀9青春版",img: 'images/shop-car/pic6.jpg',price:'￥ 999'},
              {name: "HUAWEI P20",img: 'images/shop-car/pic1.jpg',price:'￥ 4288'},
              {name: "荣耀10",img: 'images/shop-car/pic2.jpg',price:'￥ 2599'},
            
             ]
    }
});

var list = document.querySelectorAll("#list .col-xs-6");
for(let i=0;i<list.length;i++){
    if(i%2==0){
        list[i].style.borderRight = "1px solid #eaeaea";
        console.log(i);
    }
}

setInterval(function(){
    $(".main .item3 .top-title .col-xs-8 ul li").css({"transform":"translateY(-2.3rem)","transition":"1s"});
//            console.log(1);
    setTimeout(function(){
        $(".main .item3 .top-title .col-xs-8 ul li").css({"transform":"translateY(0)","transition":"0s"});
        $(".main .item3 .top-title .col-xs-8 ul li").eq(0).appendTo($(".main .item3 .top-title .col-xs-8 ul"));
//                console.log(2);
    },1000)
},2000);

var gotop = document.querySelector(".gotop");
function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
};
gotop.onclick = function(){
    smoothscroll();
}

var search = document.querySelector(".search");
window.onscroll = function(){
    if(document.body.scrollTop>100){
        search.style.background = "#fff";
    }else{
        search.style.background = "-webkit-gradient(linear, 0% 100%, 0% 0%, from(rgba(255, 255, 255, 0)), color-stop(0.7, rgba(152, 152, 152, 0.7)))"
    }
}
