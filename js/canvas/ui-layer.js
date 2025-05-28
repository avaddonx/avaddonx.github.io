// not need write canvas in html



const canvas = document.getElementById("noumenan-layer");
const ctx = canvas.getContext('2d'); // 拿到 2D 渲染的权限
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const img = new Image(); // 创建一个图片对象
// img.src = '../../assets/images/open_graph/og.png'; // 图片路径，换成你自己的

// // 关键：必须等图片“报到”完再开火
// img.onload = () => {
//   // 第一个参数是图片，后面两个是坐标 (x, y)
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
// };

// 1. 获取玩家显示器的设备像素比（对付 4K 屏和苹果视网膜屏的杀手锏）
const dpr = window.devicePixelRatio || 1;

// 2. 刺透浏览器，直接抓取物理显示器的绝对宽高，并乘以像素比
const targetWidth = window.screen.width * dpr;
const targetHeight = window.screen.height * dpr;

// 3. 把这台电脑的极值直接焊死在画布上
canvas.width = targetWidth;
canvas.height = targetHeight;

console.log(`当前火力全开：内部渲染分辨率已锁定为 ${targetWidth} x ${targetHeight}`);

const img = new Image();
img.src = "../../assets/images/open_graph/og.png"; 

img.onload = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 画满这块顶级画布
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
};








// const canvas = document.getElementById("main");
// const ctx = canvas.getContext('2d');

// // 1. 核心指令：这里必须跟你 CSS 里写的 width 和 height 一模一样！
// // 这是你的“逻辑底盘”，绝不能跟着物理屏幕乱跑
// const LOGICAL_WIDTH = 1920; 
// const LOGICAL_HEIGHT = 1080;

// // 2. 获取当前屏幕的“像素浓度” (DPR)
// const dpr = window.devicePixelRatio || 1;

// // 3. 【防线 1】在 JS 层面强行锁死 CSS 表现尺寸，防篡改
// canvas.style.width = LOGICAL_WIDTH + 'px';
// canvas.style.height = LOGICAL_HEIGHT + 'px';

// // 4. 【防线 2】将内部渲染分辨率翻倍，这才是真正给 WASM 引擎用的火力
// canvas.width = LOGICAL_WIDTH * dpr;
// canvas.height = LOGICAL_HEIGHT * dpr;

// console.log(`爷的底盘已锁死：外观 ${LOGICAL_WIDTH}x${LOGICAL_HEIGHT}，内部火力 ${canvas.width}x${canvas.height}`);

// const img = new Image();
// // 换回你自己的图片路径
// img.src = '../../assets/images/1.png'; 

// img.onload = () => {
//   // 每次重绘前，习惯性清场，保持干净
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//   // 5. 满火力输出：把图片拉伸铺满整个“内部高分缓冲区”
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
// };