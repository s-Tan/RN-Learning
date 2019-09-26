# RN-Learning
使用**ReactNative**实现app开发

#### 运行项目
##### 方式1
```
git clone https://github.com/s-Tan/RN-Learning.git
cd RN-Learning
npm install // 不可使用cnpm，cnpm会导致路径问题
react-native run-ios // 暂未配置安卓
```
##### 方式2
完成xcode配置后：
1. `npm install`
2. 打开xcode
3. 打开ios/RnProject.xcworkspace
4. comm + R

#### 项目概况

1. 项目导航及底部菜单
```json
"react-navigation": "^4.0.5","react-navigation-stack": "^1.8.0",
"react-navigation-tabs": "^2.5.4"
```

2. UI框架

[Ant Design Mobile RN](https://rn.mobile.ant.design/)

3. axios
```json
"axios": "^0.19.0",
```

axios实现service层封装为Fetch公用方法，全局调用

4. 扫描二维码
```json
"react-native-qrcode-scanner": "^1.2.1",
```

