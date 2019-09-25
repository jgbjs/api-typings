// https://github.com/wechat-miniprogram/api-typings/issues/11
wx.env.USER_DATA_PATH // $ExpectType string

// https://github.com/wechat-miniprogram/api-typings/issues/13
const ctx = wx.createCanvasContext('myCanvas')
ctx.drawImage('', 1, 1)
ctx.drawImage('', 0, 0, 150, 100)
ctx.drawImage('', 0, 0, 0, 0, 0, 0, 0, 0)

// https://github.com/wechat-miniprogram/api-typings/issues/15
wx.getSetting({
  success(res) {
    res.authSetting['scope.userInfo'] // $ExpectType boolean | undefined
  },
})

// https://github.com/wechat-miniprogram/api-typings/issues/25
// https://github.com/wechat-miniprogram/api-typings/issues/32
// https://github.com/wechat-miniprogram/api-typings/issues/42
wx.cloud.callFunction({
  name: 'add',
  data: {
    x: 1,
    y: 2,
  },
  success: res => {
    res.errMsg // $ExpectType string
  },
  fail: err => {
    err.errMsg // $ExpectType string
  },
})

wx.cloud.deleteFile({
  fileList: ['a7xzcb'],
  success: res => {
    res.fileList // $ExpectType DeleteFileResultItem[]
  },
})

// https://github.com/wechat-miniprogram/api-typings/issues/33
wx.addCard({
  cardList: [
    {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}',
    },
    {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}',
    },
  ],
  success(res) {
    res.cardList // $ExpectType AddCardResponseInfo[]
  },
})

// https://github.com/wechat-miniprogram/api-typings/issues/35
wx.chooseMessageFile({
  count: 10,
  type: 'image',
  success(res) {
    res.tempFiles // $ExpectType ChooseFile[]
  },
})

// https://github.com/wechat-miniprogram/api-typings/issues/43
wx.canvasGetImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success(res) {
    res.width // $ExpectType number
    res.height // $ExpectType number
    res.data // $ExpectType Uint8ClampedArray
    res.data.length // $ExpectType number
  },
})

// https://github.com/wechat-miniprogram/api-typings/issues/45
wx.onGyroscopeChange(res => {
  res.x // $ExpectType number
  res.y // $ExpectType number
  res.z // $ExpectType number
})

// https://github.com/wechat-miniprogram/api-typings/issues/47
wx.reportAnalytics('purchase', {
  price: 120,
  color: 'red',
})

// https://github.com/wechat-miniprogram/api-typings/issues/48
wx.navigateBack()
wx.navigateBack({})
wx.navigateBack({ delta: 1 })
wx.setTabBarStyle()
wx.setTabBarStyle({})
wx.setTabBarStyle({ color: '#111111' })
wx.setBackgroundColor({ backgroundColor: '#111111' })
wx.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#123456',
})

// https://github.com/wechat-miniprogram/api-typings/issues/59
wx.login({
  success(res) {
    res.errMsg // $ExpectType string
  },
})

// https://github.com/wechat-miniprogram/api-typings/issues/60
wx.loadFontFace({
  source: '',
  family: 'font',
  success(res) {
    res.status // $ExpectType string
  },
  fail(res) {
    res.status // $ExpectType string
  },
  complete(res) {
    res.status // $ExpectType string
  },
})

// https://github.com/wechat-miniprogram/api-typings/issues/65
wx.request({
  url: '',
  success(res) {
    const data: wxNS.IAnyObject = { res }
    data.customData // $ExpectType any
  },
})
interface IResponse {
  customData: string
}
wx.request({
  url: '',
  success(res) {
    const data = res.data as IResponse
    data.customData // $ExpectType string
  },
})

// https://github.com/wechat-miniprogram/api-typings/issues/73
{
  const task = wx.connectSocket({ url: '' })
  task.onClose(res => {
    res.code // $ExpectType number
    res.reason // $ExpectType string
  })
}

// https://github.com/wechat-miniprogram/api-typings/issues/75
{
  wx.onBluetoothDeviceFound(res => {
    res.devices.forEach(device => {
      device.name // $ExpectType string
      device.deviceId // $ExpectType string
    })
  })
}
