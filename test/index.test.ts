// 测试扩展wxNS方法

declare namespace wxNS {
  interface Wx {
    /**
     * add test method
     */
    test(): any
  }
}

wx.test()

getApp().asdf

getCurrentPages()[0].data
