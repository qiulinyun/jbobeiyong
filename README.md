# jbobeiyong
JBO备用网址（Fallback URL）相关的完整设计示例，包含设计思路 + JSON 数据结构 + Java 示例代码
##一、业务场景说明

>当JBO主域名或主接口不可用时，系统自动切换到备用网址（备用域名 / 备用接口），保证[会员登录中心](https://sites.google.com/view/jbotiyu)服务可用性。

**常见使用场景：**

* 多 CDN / 多机房容灾
*接口高可用（主备域名）
* 客户端动态切换后端地址
## 二、备用网址 JSON 设计

*字段	说明
*primaryUrl	主网址
*backupUrls	备用网址列表
*timeoutMillis	单次请求超时时间
*retryCount	主网址失败重试次数

> 支持的切换策略

*FAILOVER：主失败切备
*ROUND_ROBIN：轮询
*WEIGHTED：按权重
三、Java 实体类设计

## 可扩展方向（可选）

*✅ 自动探测网址健康状态

*✅ 结合 Nacos / Apollo 动态配置

*✅ 客户端 SDK 内置备用域名

*✅ DNS 级别容灾（多 CNAME）
