// pages/component/component.js
const normalCallout = {
  id: 1,
  latitude: 39.12,
  longitude: 117.2,
  iconPath: '/assets/image/location.png',
  callout: {
    content: '文本内容',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'ALWAYS',
    textAlign: 'center'
  },
  // label: {
  //   content: 'label 文本',
  //   fontSize: 24,
  //   textAlign: 'center',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   bgColor: '#fff',
  //   padding: 5
  // }
}

const customCallout1 = {
  id: 2,
  latitude: 39.097994,
  longitude: 117.323520,
  iconPath: '/image/location.png',
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: 'ALWAYS'
  },
}

const customCallout2 = {
  id: 3,
  latitude: 39.096994,
  longitude: 117.324520,
  iconPath: '/image/location.png',
  customCallout: {
    anchorY: 10,
    anchorX: 0,
    display: 'ALWAYS',
  },
}

const customCallout3 = {
  id: 4,
  latitude: 39.095994,
  longitude: 117.325520,
  iconPath: '/image/location.png',
  customCallout: {
    anchorY: 0,
    anchorX: 20,
    display: 'ALWAYS',
  },
}
//地图marker
const allMarkers = [normalCallout, customCallout1, customCallout2, customCallout3]

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    latitude: 23.096994,
    longitude: 113.324520,
    markers: [],
    customCalloutMarkerIds: [],
    num: 1
  },
  loadimg () {
    console.log('图片懒加载')
  },
  // swiper示例
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //关于地图
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },

  addMarker() {
    const markers = allMarkers
    this.setData({
      markers,
      customCalloutMarkerIds: [2,3,4],
    })
  },

  removeMarker() {
    this.setData({
      markers: [],
      customCalloutMarkerIds: []
    })
  },

  changeMarkerId() {
    const customCalloutMarkerIds = this.data.customCalloutMarkerIds.slice()
    const top = customCalloutMarkerIds.shift()
    customCalloutMarkerIds.push(top)

    this.setData({
      customCalloutMarkerIds
    })
  },
  markertap(e) {
    console.log('@@@ markertap', e)
  },
  callouttap(e) {
    console.log('@@@ callouttap', e)
  },
  labeltap(e) {
    console.log('@@@ labeltap', e)
  },
  translateMarker: function () {
    const length = this.data.markers.length
    if (length === 0) return

    const index = Math.floor(Math.random() * length)
    const markers = this.data.markers
    const marker = markers[index]
    marker.latitude = marker.latitude + 0.002
    marker.longitude = marker.longitude + 0.002
    const that = this
    this.mapCtx.translateMarker({
      markerId: marker.id,
      duration: 1000,
      destination: {
        latitude: marker.latitude,
        longitude: marker.longitude
      },
      animationEnd() {
        that.setData({markers})
        console.log('animation end')
      },
      complete(res) {
        console.log('translateMarker', res)
      }
    })
  },
  changeContent() {
    const num = Math.floor(Math.random() * 10)
    this.setData({num})
  }
})