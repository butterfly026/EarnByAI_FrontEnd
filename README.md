## 3-5

- [ ] 提现成功后没关闭窗口
- [ ] 个人信息审核的时候，WAITING 的状态要显示在前端

## 3-3

- [x] web3 错误提示，大概率是没拿到地址信息。

  - 已完成，需要多测试一下

- [x] jackpot 拆分目标和发放值，加到后台配置参数里

  - 已完成，发放空投要再测试一下

- [] jackpot 列表的用户信息弹窗
  隐藏

- [x] 个人 yield 进出账?再对一下需求

  - 缺一些统计的入口

- [x] UnLock bonus 要刷新

- [x] 转介要 staking 才发

  - 已完成，需要测试一下

- [x] 语言包

  - 前端的文件做好了，等翻译
  - 后端的文件做好了，等翻译

- [x] 身份认证审核不通过的理由，并发站内信/后台改加填驳回原因
  - [x]后台增加了审核的字段
  - [x] 前端 3 个卡片，显示对应的状态
- [x] support 后台

- [x] support 后台

  - [x] 加关闭按钮
  - [x] 表格加状态字段，加是否未处理 backend_is_new
  - [x] 加一个更新时间，加排序

- [ ] 手动兑换，可能会有问题，手动后币价没变？

- [x] 手动兑换，点完要刷新页面

- [ ] 发放空投，未测试

- [ ] 可能问题，试用结束没刷新 jackpot 的余额

  - [ ] 测试一下不开启自动空投

- [ ] 后台 api：定时任务跑收益时，处理自动 staking（逐仓已完成，未测试）（全仓未完成）

- [ ] 默认语言包极小概率导致错误，清空缓存可以解决

- [ ] 后台任务的一些日志要详细一点

- [x] assets->wallet 点击 staking 要 loading，web3 交易金额为 0

- [ ] exchange airdrop 完成后刷新，检查一下

测试 Nginx
在 cb-customer 根目录下执行: sh build.sh
在 cb-nginx 项目下，切换到 local-dev 的分支，然后根目录下运行：sh build.sh
