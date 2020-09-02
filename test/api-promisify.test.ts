import { expectType } from 'tsd'

// call with callback
wx.chooseImage({
  success(res) {
    expectType<wxNS.ChooseImageSuccessCallbackResult>(res)
  },
})
wx.canvasToTempFilePath({
  canvasId: '',
  success(res) {
    expectType<wxNS.CanvasToTempFilePathSuccessCallbackResult>(
      res,
    )
  },
})
wx.stopAccelerometer({
  fail(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})
wx.getClipboardData({
  success(res) {
    expectType<wxNS.GetClipboardDataSuccessCallbackOption>(res)
  },
})
wx.stopCompass({
  complete(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})
wx.addPhoneContact({
  firstName: '',
  complete(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})
wx.startLocalServiceDiscovery({
  serviceType: '',
  success(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})
wx.getSystemInfo({
  success(res) {
    expectType<wxNS.GetSystemInfoSuccessCallbackResult>(res)
  },
})
wx.chooseLocation({
  success(res) {
    expectType<wxNS.ChooseLocationSuccessCallbackResult>(res)
  },
})
wx.previewImage({
  urls: [],
  success(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})
wx.saveVideoToPhotosAlbum({
  filePath: '',
  success(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})
wx.removeSavedFile({
  filePath: '',
  success(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})

wx.createBLEConnection({
  deviceId: '',
  success(res) {
    expectType<wxNS.BluetoothError>(res)
  },
})

wx.startBluetoothDevicesDiscovery({
  success(res) {
    expectType<wxNS.BluetoothError>(res)
  },
})
wx.hideShareMenu({
  success(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})

wx.checkIsSupportSoterAuthentication({
  success(res) {
    expectType<
      wxNS.CheckIsSupportSoterAuthenticationSuccessCallbackResult
    >(res)
  },
})
wx.navigateBack({
  success(res) {
    expectType<wxNS.GeneralCallbackResult>(res)
  },
})

// call with Promise.prototype.then
wx.chooseImage({}).then(res => {
  expectType<wxNS.ChooseImageSuccessCallbackResult>(res)
})
wx.canvasToTempFilePath({
  canvasId: '',
}).then(res => {
  expectType<wxNS.CanvasToTempFilePathSuccessCallbackResult>(res)
})
wx.stopAccelerometer().then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})
wx.getClipboardData().then(res => {
  expectType<wxNS.GetClipboardDataSuccessCallbackOption>(res)
})
wx.stopCompass().then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})
wx.addPhoneContact({
  firstName: '',
}).then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})
wx.startLocalServiceDiscovery({ serviceType: '' }).then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})
wx.getSystemInfo().then(res => {
  expectType<wxNS.GetSystemInfoSuccessCallbackResult>(res)
})
wx.chooseLocation({}).then(res => {
  expectType<wxNS.ChooseLocationSuccessCallbackResult>(res)
})
wx.previewImage({ urls: [] }).then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})
wx.saveVideoToPhotosAlbum({ filePath: '' }).then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})
wx.removeSavedFile({ filePath: '' }).then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})
wx.createBLEConnection({ deviceId: '' }).then(res => {
  expectType<wxNS.BluetoothError>(res)
})
wx.startBluetoothDevicesDiscovery({}).then(res => {
  expectType<wxNS.BluetoothError>(res)
})
wx.hideShareMenu().then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})
wx.checkIsSupportSoterAuthentication().then(res => {
  expectType<
    wxNS.CheckIsSupportSoterAuthenticationSuccessCallbackResult
  >(res)
})
wx.navigateBack().then(res => {
  expectType<wxNS.GeneralCallbackResult>(res)
})

// call with await
async () => {
  expectType<wxNS.ChooseImageSuccessCallbackResult>(
    await wx.chooseImage({}),
  )
  expectType<wxNS.CanvasToTempFilePathSuccessCallbackResult>(
    await wx.canvasToTempFilePath({ canvasId: '' }),
  )
  expectType<wxNS.GeneralCallbackResult>(
    await wx.stopAccelerometer(),
  )
  expectType<wxNS.GetClipboardDataSuccessCallbackOption>(
    await wx.getClipboardData(),
  )
  expectType<wxNS.GeneralCallbackResult>(await wx.stopCompass())
  expectType<wxNS.GeneralCallbackResult>(
    await wx.addPhoneContact({ firstName: '' }),
  )
  expectType<wxNS.GeneralCallbackResult>(
    await wx.startLocalServiceDiscovery({ serviceType: '' }),
  )
  expectType<wxNS.GetSystemInfoSuccessCallbackResult>(
    await wx.getSystemInfo(),
  )
  expectType<wxNS.ChooseLocationSuccessCallbackResult>(
    await wx.chooseLocation({}),
  )
  expectType<wxNS.GeneralCallbackResult>(
    await wx.previewImage({ urls: [] }),
  )
  expectType<wxNS.GeneralCallbackResult>(
    await wx.saveVideoToPhotosAlbum({ filePath: '' }),
  )
  expectType<wxNS.GeneralCallbackResult>(
    await wx.removeSavedFile({ filePath: '' }),
  )
  expectType<wxNS.BluetoothError>(
    await wx.createBLEConnection({ deviceId: '' }),
  )
  expectType<wxNS.BluetoothError>(
    await wx.startBluetoothDevicesDiscovery({}),
  )
  expectType<wxNS.GeneralCallbackResult>(await wx.hideShareMenu())
  expectType<
    wxNS.CheckIsSupportSoterAuthenticationSuccessCallbackResult
  >(await wx.checkIsSupportSoterAuthentication())
  expectType<wxNS.GeneralCallbackResult>(await wx.navigateBack())
}
