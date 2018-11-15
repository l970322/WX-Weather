var bmap = require('../../lib/bmap-wx.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    weatherData: '',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){
    var that = this;
    var BMap = new bmap.BMapWX({
      ak:'7DMueVKix5iOBGZti1FSNbHdxzCpz61s'
    });
    var fail = function(data){
      console.log(data)
    };
    var success = function(data){
      var weatherWind = data.currentWeather[0];
      var weatherTemperature = data.currentWeather[0];
      var weatherCity = data.currentWeather[0];
      var weatherDesc = data.currentWeather[0];
      var weatherPM = data.originalData.results[0].index;
      var weatherDate = data.currentWeather[0]
      
      var weatherOneDate = data.originalData.results[0].weather_data[1]
      var weatherOneTemperature = data.originalData.results[0].weather_data[1]
      var weatherOneWeather = data.originalData.results[0].weather_data[1]
      var weatherOneWind = data.originalData.results[0].weather_data[1]
      
      var weatherTwoDate = data.originalData.results[0].weather_data[2]
      var weatherTwoTemperature = data.originalData.results[0].weather_data[2]
      var weatherTwoWeather = data.originalData.results[0].weather_data[2]
      var weatherTwoWind = data.originalData.results[0].weather_data[2]
      
      var weatherThreeDate = data.originalData.results[0].weather_data[3]
      var weatherThreeTemperature = data.originalData.results[0].weather_data[3]
      var weatherThreeWeather = data.originalData.results[0].weather_data[3]
      var weatherThreeWind = data.originalData.results[0].weather_data[3]
      
      console.log(data)
      
      weatherCity = weatherCity.currentCity   //城市
      weatherWind = weatherWind.wind         //风向
      weatherDesc = weatherDesc.weatherDesc  //天气
      weatherTemperature =  weatherTemperature.temperature  //温度
      weatherPM = weatherPM[0].des       //PM
      weatherDate = (weatherDate.date.substring(3,9))
      
      weatherOneDate =  weatherOneDate.date
      weatherOneTemperature = weatherOneTemperature.temperature
      weatherOneWeather = weatherOneWeather.weather
      weatherOneWind = weatherOneWind.wind
      
      weatherTwoDate = weatherTwoDate.date
      weatherTwoTemperature = weatherTwoTemperature.wind
      weatherTwoWeather = weatherTwoWeather.weather
      weatherTwoWind = weatherTwoWind.temperature
      
      weatherThreeDate = weatherThreeDate.date 
      weatherThreeTemperature = weatherThreeTemperature.temperature
      weatherThreeWeather = weatherThreeWeather.weather
      weatherThreeWind = weatherThreeWind.wind
      
      that.setData({
        weatherWind,
        weatherTemperature,
        weatherCity,
        weatherDesc,
        weatherPM,
        weatherDate,
        
        weatherOneTemperature,
        weatherOneWeather,
        weatherOneWind,
        weatherOneDate,
        
        weatherTwoTemperature,
        weatherTwoWeather,
        weatherTwoWind,
        weatherTwoDate,
        
        weatherThreeTemperature,
        weatherThreeWeather,
        weatherThreeWind,
        weatherThreeDate   
      })
    };
    BMap.weather({
      fail,
      success
    })
  },
    
  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
})