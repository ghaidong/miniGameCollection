
const canvas = wx.createCanvas()
const context = canvas.getContext('2d')
context.fillStyle = '#1aad19'
context.fillRect(canvas.width / 2 - 50, 0, 100, 100)

const image = wx.createImage()
let imgX = canvas.width / 2 - 75
let imgY = 500

image.onload = function () { }

image.src = 'images/hero.png'

wx.onTouchMove(res => {
  imgX = res.changedTouches[0].clientX - 75
  imgY = res.changedTouches[0].clientY
})

const { windowWidth, windowHeight } = wx.getSystemInfoSync()
const rectX = canvas.width / 2 - 75
let rectY = 0
var intervHero1 = setInterval(function () {
  if (distoryImg()) {
    explode(intervHero1)
  } else if(gameOver()){
    crash(intervHero1)
  }
  drawRect(rectX, rectY++)
  context.drawImage(image, imgX, imgY)
}, 16)

function drawRect(x, y) {
  context.clearRect(0, 0, windowWidth, windowHeight)
  context.fillRect(x, y, 100, 100)
}
function distoryImg() {
  // if (imgX >= rectX - 100 && imgX < rectX + 100 && imgY >= rectY - 100 && imgY <= rectY + 100) {
  if (imgX >= rectX - 100 && imgX < rectX + 100 && imgY === rectY + 100) {
    console.log("rectX:", rectX, "rectY:", rectY, "imgY:", imgY)
    return true
  } else {
    return false
  }
}
function gameOver(){
  if(imgY === rectY) return true 
  else return false
}
function explode() {
  console.log("image:",image)
  console.log("explode!!!")
  image.src = 'images/explosion19.png'
}
function crash(intervalId){
  clearInterval(intervalId)
}