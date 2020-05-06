/*
 * @Author: isboyjc
 * @Date: 2020-02-18 16:13:15
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-03-01 02:14:53
 * @Description: 配置项
 */

module.exports = {
  // puppet_padplus Token
  token: "puppet_padplus_fbf6e47116acb02c",
  // 机器人名字
  name: "圈子",
  // 房间/群聊
  room: {
    // 管理群组列表
    roomList: {
      // 群名(用于展示，最好是群名，可随意) : 群id(这个可不能随意)
      test群: "22962086309chatroom", //测试群
      高效互粉小分队1群: "21792766877@chatroom" //互粉群
    },
    // 加入房间回复
    roomJoinReply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流！ \n\n Hello, welcome to join, please consciously abide by the group rules, civilized communication, finally, please introduce yourself to everyone！😊`
  },
  // 私人
  personal: {
    // 好友验证自动通过关键字
    addFriendKeywords: ["加群", "前端", "高效", "微信公众号", "豆瓣"],
    // 是否开启加群
    addRoom: true
  }
}
