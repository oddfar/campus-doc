(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{388:function(v,_,e){"use strict";e.r(_);var o=e(8),a=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("欢迎大家补充解决方法，文件地址："),_("a",{attrs:{href:"https://github.com/oddfar/campus-doc/blob/master/docs/101.campus-imaotai/100.%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.md",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/oddfar/campus-doc/blob/master/docs/101.campus-imaotai/100.常见问题.md"),_("OutboundLink")],1)]),v._v(" "),_("ul",[_("li",[_("p",[v._v("第一次启动失败")]),v._v(" "),_("p",[v._v("第一次启动可能会失败，是因为 "),_("code",[v._v("mysql")]),v._v(" 服务还没启动完成，"),_("code",[v._v("campus-service")]),v._v(" 就启动了，等mysql启动完毕后，再启动一次即可 "),_("code",[v._v("docker-compose up -d")])])]),v._v(" "),_("li",[_("p",[v._v("默认账户")]),v._v(" "),_("p",[v._v("用户名 默认是 "),_("code",[v._v("admin")]),v._v(" ，密码 "),_("code",[v._v("admin123")])]),v._v(" "),_("p",[v._v("登录地址："),_("code",[v._v("/login")]),v._v("，注册地址："),_("code",[v._v("/register")])])]),v._v(" "),_("li",[_("p",[_("s",[v._v("系统密码")])]),v._v(" "),_("p",[_("s",[v._v("mysql：oddfar_imaotai，redis：oddfar_imaotai")])])]),v._v(" "),_("li",[_("p",[v._v("修改密码")]),v._v(" "),_("p",[v._v("登录后台，右上角"),_("code",[v._v("个人中心")]),v._v("->"),_("code",[v._v("修改密码")])])]),v._v(" "),_("li",[_("p",[v._v("日志提示预约成功，但进入i茅台app发现没有预约。")]),v._v(" "),_("p",[v._v("app的界面显示可以预约申购，实际已经预约了，需要在 app-"),_("code",[v._v("我的")]),v._v("->"),_("code",[v._v("申购记录")]),v._v("里查询。")])]),v._v(" "),_("li",[_("p",[v._v("关于 token")]),v._v(" "),_("p",[v._v("到期时间是 token 的到期时间，一次 token 管30天，到期了需要自己手动更改 token")])]),v._v(" "),_("li",[_("p",[v._v("ERROR [internal] load metadata for docker.io/library/java:8")]),v._v(" "),_("p",[v._v("修改 "),_("code",[v._v("campus-dockerfile")]),v._v(" 把 "),_("code",[v._v("FROM java:8")]),v._v(" 换成 "),_("code",[v._v("FROM openjdk:8")])]),v._v(" "),_("p",[v._v("然后删除镜像、容器重新启动试试。")]),v._v(" "),_("p",[v._v("如果是amr架构换成 "),_("code",[v._v("FROM 987846/jdk1.8")])])]),v._v(" "),_("li",[_("p",[v._v("端口被占用")]),v._v(" "),_("p",[v._v("修改 "),_("code",[v._v("docker-compose.yml")]),v._v(" 里的端口配置，例如 MySql：3306:3306 改成 "),_("code",[v._v("3307:3306")])])]),v._v(" "),_("li",[_("p",[v._v("推送token")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://www.pushplus.plus/",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.pushplus.plus/"),_("OutboundLink")],1)])]),v._v(" "),_("li",[_("p",[v._v("预约时间")]),v._v(" "),_("p",[v._v("预约时间在9点开始，根据设置的分钟（选择随机时间，则会在晚上自动修改时间1-50随机）")]),v._v(" "),_("p",[v._v("旅行会在每天11点开始")]),v._v(" "),_("p",[v._v("申购耐力会在预约10s之后")])]),v._v(" "),_("li",[_("p",[v._v("申购结果推送")]),v._v(" "),_("p",[v._v("申购结果中了后才会推送，没中不会推送")])]),v._v(" "),_("li",[_("p",[v._v("JDK的AES加密异常java.security.InvalidKeyException: Illegal key size")]),v._v(" "),_("p",[v._v("jdk 1.8 去 https://www.oracle.com/java/technologies/javase-jce8-downloads.html 下载jar包")]),v._v(" "),_("p",[v._v("将压缩包中的两个jar包放在 "),_("code",[v._v("%JDK_HOME%\\jre\\lib\\security")]),v._v(" 目录下")]),v._v(" "),_("p",[v._v("引用："),_("a",{attrs:{href:"https://github.com/oddfar/campus-imaotai/issues/69",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/oddfar/campus-imaotai/issues/69"),_("OutboundLink")],1)])])])])}),[],!1,null,null,null);_.default=a.exports}}]);