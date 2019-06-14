//input
function Ipt(){
    var oDiv = document.getElementsByClassName('head-div')[0];
    var oIpt = oDiv.previousElementSibling;
    var oA = oDiv.firstElementChild;
    var oSpan = oA.getElementsByTagName('span')[0];
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('a');
    var timer = 0;
    oSpan.innerHTML = aLi[0].innerHTML;
    oA.onmouseover = function()
    {
        clearTimeout(timer);
        oUl.style.display = "block";
    }
    oA.onmouseout = function()
    {
        timer = setTimeout(function(){
            oUl.style.display = "none";
        },100);
        
    }
    oUl.onmouseover = function()
    {
        clearTimeout(timer);
        oUl.style.display = "block";
    }
    oUl.onmouseout = function()
    {
        oUl.style.display = "none";
    }
    for(var n=0; n<aLi.length; n++)
    {
        aLi[n].index = n;
        aLi[n].onclick = function()
        {
            clearTimeout(timer);
            oSpan.innerHTML = aLi[this.index].innerHTML;
            oUl.style.display = "none";
            return false;
        }
    }
    oIpt.onfocus = function()
    {
        if(!oIpt.value)
        {
            oIpt.placeholder = "";
        }
    }
    oIpt.onblur = function()
    {
        if(!oIpt.value)
        {
            oIpt.placeholder = "外套";
        }
    }
}
//banner
function Banner(){
    var oBanner = document.getElementsByClassName('banner')[0];
    var oBM = document.getElementsByClassName('banner-middle')[0];
    var oUl = oBM.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var aA = oBM.getElementsByClassName('banner-a');
    var backArr = ["rgb(212,191,160)", "rgb(255,178,172)"];
    var index = 0;
    var timer = 0;
    // clearInterval(timer);
    for (let n = 0; n < aLi.length; n++) {
        aLi[n].style.zIndex = "50";
        aLi[n].style.opacity = "0";
        aLi[n].style.transition = "opacity 0.5s";
    }
    aLi[0].style.zIndex = "51";
    aLi[0].style.opacity = "1";
    oBanner.style.background = backArr[0];
    oBanner.style.transition = "background 0.5s";

    function change() {
        index++;
        if (index >= aLi.length) {
            index = 0;
        }
        main();
    }

    function main() {
        for (var j = 0; j < aA.length; j++) {
            aA[j].style.backgroundPosition = "-100px -21px";
            aA[j].style.transform = "rotate(0deg)";
            aA[j].style.transition = "transform 3s";
        }
        aA[index].style.backgroundPosition = "-160px -21px";
        aA[index].style.transform = "rotate(360deg)";
        for (let n = 0; n < aLi.length; n++) {
            aLi[n].style.zIndex = "50";
            aLi[n].style.opacity = "0";
        }
        aLi[index].style.zIndex = "51";
        aLi[index].style.opacity = "1";
        oBanner.style.background = backArr[index];
    }
    for (var i = 0; i < aA.length; i++) {
        aA[i].num = i;
        aA[i].onmouseover = function () {
            index = this.num;
            main();
        }
    }
    oBM.onmouseover = function () {
        clearInterval(timer);
    }
    oBM.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(change, 3000);
    }
    timer = setInterval(change, 3000);
}
//倒计时
function Time(){
    var oFlashLeft = document.getElementsByClassName('flash-left')[0];
    var aSpan = oFlashLeft.getElementsByTagName('span');
    var timer = 0;
    function change() {
        var newTime = new Date();
        var Year = newTime.getFullYear();
        var Month = newTime.getMonth();
        var Dates = newTime.getDate();
        Dates += 1;
        if (Month == 0 || Month == 2 || Month == 4 || Month == 6 || Month == 7 || Month == 9 || Month == 11) {
            if (Dates > 31) {
                Dates = 1;
                Month += 1;
                if (Month > 11) {
                    Month = 0;
                }
            }
        } else {
            if (Dates > 30) {
                Dates = 1;
                Month += 1;
            }
        }
        var times = new Date(Year, Month, Dates, 0, 0, 0);
        var leftTime = times - newTime;
        var h = parseInt(leftTime / 1000 / 3600);
        var m = parseInt(leftTime / 1000 % 86400 % 3600 / 60);
        var s = parseInt(leftTime / 1000 % 60);
        aSpan[0].innerHTML = erTime(h);
        aSpan[1].innerHTML = erTime(m);
        aSpan[2].innerHTML = erTime(s);
    }

    function erTime(num) {
        return parseInt(num) < 10 ? num = "0" + num : num = "" + num;
    }
    timer = setInterval(change, 1000);
}
//无缝轮播-节点
function wufeng(thisNode, indexNum) {
    let LiNode = thisNode.lastElementChild.cloneNode(true);
    LiNode.style.left = -indexNum + "px";
    thisNode.insertBefore(LiNode, thisNode.firstElementChild);
    let aLi = thisNode.children;
    for (let n = 1; n < aLi.length; n++) {
        aLi[n].style.left = (n - 1) * indexNum + "px";
    }
}
function Next(thisNode, indexNum) {
    let aLi = thisNode.children;
    for (let i = 0; i < aLi.length; i++) {
        let leftNum = aLi[i].offsetLeft;
        aLi[i].style.left = leftNum - indexNum + "px";
    }
    thisNode.removeChild(thisNode.firstElementChild);
    LiNode = thisNode.firstElementChild.cloneNode(true);
    LiNode.style.left = (indexNum * (aLi.length - 1)) + "px";
    thisNode.appendChild(LiNode);
}
function Up(thisNode, indexNum) {
    let aLi = thisNode.children;
    for (let i = 0; i < aLi.length; i++) {
        let leftNum = aLi[i].offsetLeft;
        aLi[i].style.left = leftNum + indexNum + "px";
    }
    thisNode.removeChild(thisNode.lastElementChild);
    LiNode = thisNode.lastElementChild.cloneNode(true);
    LiNode.style.left = -indexNum + "px";
    thisNode.insertBefore(LiNode, thisNode.firstElementChild);
}
//轮播-flash
function Flash(){
    var oFlashRight = document.getElementsByClassName('flash-right')[0];
    var aFlashRightA = document.getElementsByClassName('flash-right-a');
    var oFlashRightUl = oFlashRight.firstElementChild;
    var Flashtimer = 0;
    wufeng(oFlashRightUl, 960);
    Flashtimer = setInterval(function(){
        Next(oFlashRightUl,960);
    }, 2000);
    oFlashRight.onmouseover = function () {
        clearInterval(Flashtimer);
    }
    oFlashRight.onmouseout = function () {
        Flashtimer = setInterval(function () {
            Next(oFlashRightUl, 960);
        }, 2000);
    }
    aFlashRightA[0].onclick = function () {
        clearTimeout(Flashtimer);
        Flashtimer = setTimeout(function(){
            Up(oFlashRightUl,960);
        }, 0);
        return false;
    }
    aFlashRightA[1].onclick = function () {
        clearTimeout(Flashtimer);
        Flashtimer = setTimeout(function(){
            Next(oFlashRightUl,960);
        }, 0);
        return false;
    }
}
//轮播-contentTop
function ContentTop(){
    var oContentTop = document.getElementsByClassName('content-top-right-top')[0];
    var oContentTopUl = oContentTop.firstElementChild;
    var aContentTopA = oContentTop.getElementsByClassName('content-top-a');
    var ContentTimer = 0;
    wufeng(oContentTopUl, 950);
    ContentTimer = setInterval(function(){
        Next(oContentTopUl, 950);
    }, 2000);
    oContentTop.onmouseover = function () {
        clearInterval(ContentTimer);
    }
    oContentTop.onmouseout = function () {
        ContentTimer = setInterval(function(){
            Next(oContentTopUl,950);
        }, 2000);
    }
    aContentTopA[0].onclick = function () {
        clearTimeout(ContentTimer);
        ContentTimer = setTimeout(function(){
            Up(oContentTopUl, 950);
        },0);
        return false;
    }
    aContentTopA[1].onclick = function () {
        clearTimeout(ContentTimer);
        ContentTimer = setTimeout(function(){
            Next(oContentTopUl, 950);
        },0);
        return false;
    }
}
//content-js
function conLeftChange(contentLeft) {
    if (contentLeft.firstElementChild.children.length == 0) {
        return;
    }
    var LiNode = contentLeft.firstElementChild.firstElementChild.cloneNode(true);
    contentLeft.firstElementChild.removeChild(contentLeft.firstElementChild.firstElementChild);
    contentLeft.firstElementChild.appendChild(LiNode);
}
function conRightChange(contentRight) {
    if (contentRight.children.length - 2 == 1) {
        return;
    }
    var LiNode = contentRight.children[2].cloneNode(true);
    contentRight.removeChild(contentRight.children[2]);
    contentRight.appendChild(LiNode);
}
function addANode(contentMiddle) {
    var aNum = contentMiddle.firstElementChild.children.length;
    for (var n = 0; n < aNum; n++) {
        var aNode = document.createElement('a');
        aNode.href = "";
        contentMiddle.children[1].appendChild(aNode);
    }
    contentMiddle.children[1].firstElementChild.className = "content-middle-active";
}
function conMiddleChange(contentMiddle, leftNum) {
    var indexArr = new Array();
    var aLi = contentMiddle.firstElementChild.children;
    var aA = contentMiddle.children[1].children;
    for (var i = 0; i < aA.length; i++) {
        aA[i].index = i;
        aA[i].onclick = function () {
            indexArr.push(this.index);
            if (indexArr.length > 2) {
                indexArr.shift();
            }
            if (indexArr.length > 1) {
                if (indexArr[0] < indexArr[1]) {
                    for (var j = 0; j < aLi.length; j++) {
                        var liNum = aLi[j].offsetLeft;
                        aLi[j].style.left = liNum - ((this.index - indexArr[0]) * leftNum) + "px";
                    }
                }
                if (indexArr[0] > indexArr[1]) {
                    for (var j = 0; j < aLi.length; j++) {
                        var liNum = aLi[j].offsetLeft;
                        aLi[j].style.left = liNum + ((indexArr[0] - this.index) * leftNum) + "px";
                    }
                }
            } else {
                for (var j = 0; j < aLi.length; j++) {
                    var liNum = aLi[j].offsetLeft;
                    aLi[j].style.left = liNum - (this.index * leftNum) + "px";
                }
            }
            for (var num = 0; num < aA.length; num++) {
                aA[num].className = "";
            }
            this.className = "content-middle-active";
            return false;
        }
    }
}
function conMiddleAdd(contentMiddle, leftNum) {
    var aLiMain = contentMiddle.firstElementChild.children;
    var LiNode = aLiMain[0].cloneNode(true);
    LiNode.style.left = leftNum * aLiMain.length + "px";
    contentMiddle.firstElementChild.appendChild(LiNode);
}
//content
function Content(){
    //左侧
    var aContentLeft = document.getElementsByClassName('content-left');
    for (let n = 0; n < aContentLeft.length; n++) {
        setInterval(function () {
            conLeftChange(aContentLeft[n]);
        }, 5000);
    }
    //生成控制节点 轮播
    var aContentMiddle = document.getElementsByClassName('content-middle');
    for (let n = 0; n < aContentMiddle.length; n++) {
        addANode(aContentMiddle[n]);
    }
    for (let n = 0; n < aContentMiddle.length; n++) {
        conMiddleChange(aContentMiddle[n], 630);
        conMiddleAdd(aContentMiddle[n], 630);
    }
    //右侧
    var aContentRight = document.getElementsByClassName('content-right');
    for (let n = 0; n < aContentRight.length; n++) {
        var aLink = aContentRight[n].children[1];
        aLink.onclick = function () {
            conRightChange(this.parentNode);
            return false;
        }
    }
}
//lovely
function Lovely(){
    var oLoveLy = document.getElementsByClassName('lovely-center')[0];
    var oP = oLoveLy.children[1];
    var aA = oP.children;
    for (var n = 0; n < aA.length; n++) {
        if ((n + 1) % 5 == 0) {
            aA[n].style.marginRight = "0";
            aA[n].children[2].style.cssText = "display:block;margin:0 auto;white-space:nowrap;width:calc(100% - 14px);padding:3px 0;";
        }
    }
}
//监听事件 滚轮事件
function Scroll(){
    var oHeader = document.getElementsByClassName('header')[0];
    var oBox = oHeader.parentNode;
    var oSidebar = document.getElementsByClassName('sidebar')[0];
    var oA = oSidebar.lastElementChild;
    var timer = 0;
    window.onscroll = function () {
        var ScrollTop = document.documentElement.scrollTop;
        if (ScrollTop > 0) {
            oA.style.display = "block";
        } else {
            oA.style.display = "none";
        }
        if (ScrollTop > oBox.firstElementChild.offsetHeight) {
            oBox.firstElementChild.className = "header-fixed";
        } else {
            oBox.firstElementChild.className = "header";
        }
    }
    oA.onclick = function () {
        clearInterval(timer);
        var ScrollTop = document.documentElement.scrollTop;
        timer = setInterval(function () {
            ScrollTop -= 50;
            if (ScrollTop <= 0) {
                ScrollTop = 0;
                clearInterval(timer);
            }
            document.documentElement.scrollTop = ScrollTop;
        }, 5)
        return false;
    }
}
//执行函数
Ipt();
Banner();
Time();
Flash();
ContentTop();
Content();
Lovely();
Scroll();