new Vue({
    el:"#main-list",
    data: {
        item1list1:[
              {img:"images/class/weinituijian/pic1.jpg",name:"荣耀Play"},
              {img:"images/class/weinituijian/pic2.jpg",name:"HUAWEI P20"},
              {img:"images/class/weinituijian/pic3.jpg",name:"荣耀9i"},
              {img:"images/class/weinituijian/pic4.jpg",name:"HUAWEI nova 3e"},
              {img:"images/class/weinituijian/pic5.jpg",name:"荣耀10"},
              {img:"images/class/weinituijian/pic6.jpg",name:"HUAWEI WATCH 2 Pro"},
              
             ],
        item1list2:[
              {img:"images/class/weinituijian/pic7.jpg",name:"荣耀V10"},
              {img:"images/class/weinituijian/pic8.jpg",name:"HUAWEI Mate 10"},
              {img:"images/class/weinituijian/pic9.jpg",name:"荣耀畅玩7X"},
              {img:"images/class/weinituijian/pic10.jpg",name:"华为畅享8"},
              {img:"images/class/weinituijian/pic11.jpg",name:"荣耀畅玩7C"},
              {img:"images/class/weinituijian/pic12.jpg",name:"华为畅享8 Plus"},
              
             ],
        item1list3:[
              {img:"images/class/weinituijian/pic13.jpg",name:"HUAWEI nova 2s"},
              {img:"images/class/weinituijian/pic14.jpg",name:"荣耀9青春版"},
              {img:"images/class/weinituijian/pic15.jpg",name:"荣耀V10"},
              {img:"images/class/weinituijian/pic16.jpg",name:"荣耀畅玩7X"},
              {img:"images/class/weinituijian/pic17.jpg",name:"华为畅享8"},
              
             ],
        item2list1:[
              {img:"images/class/huaweishouji/pic1.jpg",name:"HUAWEI Mate 10"},
              {img:"images/class/huaweishouji/pic2.jpg",name:"HUAWEI P20"},
              {img:"images/class/huaweishouji/pic3.jpg",name:"HUAWEI nova 3e"},
              {img:"images/class/huaweishouji/pic4.jpg",name:"HUAWEI nova 2s"},
              {img:"images/class/huaweishouji/pic5.jpg",name:"华为畅享8"},
              {img:"images/class/huaweishouji/pic6.jpg",name:"HUAWEI P20 Pro"},
             ],
        item2list2:[
              {img:"images/class/huaweishouji/pic7.jpg",name:"HUAWEI P系列"},
              {img:"images/class/huaweishouji/pic8.jpg",name:"HUAWEI Mate系列"},
              {img:"images/class/huaweishouji/pic9.jpg",name:"HUAWEI nova系列"},
              {img:"images/class/huaweishouji/pic10.jpg",name:"HUAWEI 麦芒系列"},
              {img:"images/class/huaweishouji/pic11.jpg",name:"华为畅享系列"},
              
             ],
        item3list1:[
              {img:"images/class/rongyaoshouji/pic1.jpg",name:"荣耀10"},
              {img:"images/class/rongyaoshouji/pic2.jpg",name:"荣耀9i "},
              {img:"images/class/rongyaoshouji/pic3.jpg",name:"荣耀V10"},
              {img:"images/class/rongyaoshouji/pic4.jpg",name:"荣耀Play"},
              {img:"images/class/rongyaoshouji/pic5.jpg",name:"荣耀9"},
              {img:"images/class/rongyaoshouji/pic6.jpg",name:"荣耀畅玩7X"},
             ],
        item3list2:[
              {img:"images/class/rongyaoshouji/pic7.jpg",name:"荣耀系列"},
              {img:"images/class/rongyaoshouji/pic8.jpg",name:"荣耀畅玩系列"},
             ],
        item4list1:[
              {img:"images/class/bijiben/pic1.jpg",name:"HUAWEI MateBook X Pro"},
              {img:"images/class/bijiben/pic2.jpg",name:"荣耀MagicBook"},
              {img:"images/class/bijiben/pic3.jpg",name:"HUAWEI MateBook D"},
             ],
        item4list2:[
              {img:"images/class/bijiben/pic4.jpg",name:"华为平板 M5 10.8英寸"},
              {img:"images/class/bijiben/pic5.jpg",name:"荣耀Waterplay"},
              {img:"images/class/bijiben/pic6.jpg",name:"华为平板 M5 8.4英寸"},
              {img:"images/class/bijiben/pic7.jpg",name:"荣耀畅玩平板2 9.6英寸"},
              {img:"images/class/bijiben/pic8.jpg",name:"华为平板M3 青春版 8英寸"},
              {img:"images/class/bijiben/pic9.jpg",name:"荣耀平板2"},
             ],
        item4list3:[
              {img:"images/class/bijiben/pic10.jpg",name:"平板电脑"},
              {img:"images/class/bijiben/pic11.jpg",name:"笔记本电脑"},
              {img:"images/class/bijiben/pic12.jpg",name:"笔记本配件"},
             ],
        item5list1:[
              {img:"images/class/zhinengchuandai/pic1.jpg",name:"HUAWEI WATCH 2 Pro"},
              {img:"images/class/zhinengchuandai/pic2.jpg",name:"华为手环B3 青春版"},
              {img:"images/class/zhinengchuandai/pic3.jpg",name:"荣耀手环3"},
              {img:"images/class/zhinengchuandai/pic4.jpg",name:"HUAWEI WATCH 2"},
              {img:"images/class/zhinengchuandai/pic5.jpg",name:"荣耀手表 S1"},
              {img:"images/class/zhinengchuandai/pic6.jpg",name:"荣耀畅玩手环A2"},
             ],
        item5list2:[
              {img:"images/class/zhinengchuandai/pic7.jpg",name:"手环"},
              {img:"images/class/zhinengchuandai/pic8.jpg",name:"手表"},
              {img:"images/class/zhinengchuandai/pic9.jpg",name:"VR"},
             ],
        item6list1:[
              {img:"images/class/zhinengjiaju/pic1.jpg",name:"华为子母路由 Q2"},
              {img:"images/class/zhinengjiaju/pic2.jpg",name:"华为随行WiFi 2"},
              {img:"images/class/zhinengjiaju/pic3.jpg",name:"荣耀路由2"},
              {img:"images/class/zhinengjiaju/pic4.jpg",name:"华为路由 A1 畅享版"},
              {img:"images/class/zhinengjiaju/pic5.jpg",name:"荣耀路由X1 增强版"},
              {img:"images/class/zhinengjiaju/pic6.jpg",name:"华为路由器 WS318 增强版"},
             ],
        item6list2:[
              {img:"images/class/zhinengjiaju/pic7.jpg",name:"路由器"},
              {img:"images/class/zhinengjiaju/pic8.jpg",name:"子母/分布式路由"},
              {img:"images/class/zhinengjiaju/pic9.jpg",name:"电力猫/wifi放大器"},
              {img:"images/class/zhinengjiaju/pic10.jpg",name:"随行wifi"},
              {img:"images/class/zhinengjiaju/pic11.jpg",name:"电视盒子"},
             ],
        item7list1:[
              {img:"images/class/zhuanshupeijian/pic1.jpg",name:"HUAWEI Mate RS 保时捷设计 智能视窗皮套"},
              {img:"images/class/zhuanshupeijian/pic2.jpg",name:"荣耀V10 TPU保护壳"},
              {img:"images/class/zhuanshupeijian/pic3.jpg",name:"HUAWEI P20智能视窗保护套"},
              {img:"images/class/zhuanshupeijian/pic4.jpg",name:"HUAWEI Mate RS 保时捷设计 真皮皮套"},
              {img:"images/class/zhuanshupeijian/pic5.jpg",name:"荣耀畅玩平板note 屏幕保护膜"},
              {img:"images/class/zhuanshupeijian/pic6.jpg",name:"HUAWEI WATCH 2 表带"},
             ],
        item7list2:[
              {img:"images/class/zhuanshupeijian/pic7.jpg",name:"保护壳"},
              {img:"images/class/zhuanshupeijian/pic8.jpg",name:"保护套"},
              {img:"images/class/zhuanshupeijian/pic9.jpg",name:"贴膜"},
              {img:"images/class/zhuanshupeijian/pic10.jpg",name:"盒子专属配件"},
              {img:"images/class/zhuanshupeijian/pic11.jpg",name:"表带"},
             ],
        item8list1:[
              {img:"images/class/tongyongpeijian/pic1.jpg",name:"华为智能体脂秤"},
              {img:"images/class/tongyongpeijian/pic2.jpg",name:"荣耀xSport 运动蓝牙耳机"},
              {img:"images/class/tongyongpeijian/pic3.jpg",name:"华为移动电源"},
              {img:"images/class/tongyongpeijian/pic4.jpg",name:"荣耀心晴耳机"},
              {img:"images/class/tongyongpeijian/pic5.jpg",name:"华为车载快速充电器"},
              {img:"images/class/tongyongpeijian/pic6.jpg",name:"荣耀体脂秤"},
             ],
        item8list2:[
              {img:"images/class/tongyongpeijian/pic7.jpg",name:"移动电源"},
              {img:"images/class/tongyongpeijian/pic8.jpg",name:"耳机"},
              {img:"images/class/tongyongpeijian/pic9.jpg",name:"充电器/线材"},
              {img:"images/class/tongyongpeijian/pic10.jpg",name:"自拍杆/支架"},
              {img:"images/class/tongyongpeijian/pic11.jpg",name:"音箱"},
              {img:"images/class/tongyongpeijian/pic12.jpg",name:"U盘/存储卡"},
              {img:"images/class/tongyongpeijian/pic13.jpg",name:"摄像机/镜头"},
              {img:"images/class/tongyongpeijian/pic14.jpg",name:"智能硬件"},
              {img:"images/class/tongyongpeijian/pic15.jpg",name:"生活周边"},
             ],
        item9list1:[
              {img:"images/class/shengtaichanpin/pic1.jpg",name:"海雀摄像头Q1"},
              {img:"images/class/shengtaichanpin/pic2.jpg",name:"科沃斯扫地机器人DG31"},
              {img:"images/class/shengtaichanpin/pic3.jpg",name:"博联智能排插"},
              {img:"images/class/shengtaichanpin/pic4.jpg",name:"55度智能降温杯"},
              {img:"images/class/shengtaichanpin/pic5.jpg",name:"品多智能指纹门锁M1"},
              {img:"images/class/shengtaichanpin/pic6.jpg",name:"720全智能净化器EP800"},
             ],
        item9list2:[
              {img:"images/class/shengtaichanpin/pic7.jpg",name:"照明"},
              {img:"images/class/shengtaichanpin/pic8.jpg",name:"清洁"},
              {img:"images/class/shengtaichanpin/pic9.jpg",name:"节能"},
              {img:"images/class/shengtaichanpin/pic10.jpg",name:"环境"},
              {img:"images/class/shengtaichanpin/pic11.jpg",name:"安防"},
              {img:"images/class/shengtaichanpin/pic12.jpg",name:"健康"},
              {img:"images/class/shengtaichanpin/pic13.jpg",name:"厨电"},
              {img:"images/class/shengtaichanpin/pic14.jpg",name:"影音"},
              {img:"images/class/shengtaichanpin/pic15.jpg",name:"卫浴"},
              {img:"images/class/shengtaichanpin/pic16.jpg",name:"其他"},
             ],
        item10list1:[
              {img:"images/class/zengzhiyewu/pic1.jpg",name:"HUAWEI Mate 10"},
              {img:"images/class/zengzhiyewu/pic2.jpg",name:"HUAWEI Mate 10 Pro"},
             ],
    }
});

var c3lists = document.querySelectorAll(".main>.row>.col-xs-3 .list ul li a");
var items = document.querySelectorAll(".main .col-xs-9 .main-list .item");
for(let i=0;i<c3lists.length;i++){
    items[i].style.display = "none";
    items[0].style.display = "block";
    c3lists[i].index = i;
    c3lists[i].onclick = function(){
        for(let j=0;j<c3lists.length;j++){
            c3lists[j].setAttribute("class","");
            items[j].style.display = "none";
        }
        this.setAttribute("class","active");
        items[this.index].style.display = "block";
    }
}


