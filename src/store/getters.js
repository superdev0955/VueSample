const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  token: state => state.user.token,
  user_id: state => state.user.user_id,
  avatar: state => state.user.avatar,
  nickname: state => state.user.nickname,
  vip_expire_time: state => state.user.vip_expire_time,
  balance: state => state.user.balance,
  balance_draw: state => state.user.balance_draw,
  balance_gpt4: state => state.user.balance_gpt4,
  hasModel4: state => state.user.hasModel4,
  model4Name: state => state.user.model4Name,
  theme: state => state.user.theme,
  logo: state => state.user.logo,
  logo_mini: state => state.user.logo_mini,
  page_title: state => state.user.page_title,
  copyright: state => state.user.copyright,
  copyright_link: state => state.user.copyright_link,
  icp: state => state.user.icp,
  login_phone: state => state.user.login_phone,
  routes: state => state.permission.routes
}
export default getters
