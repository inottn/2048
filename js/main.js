var __main = function () {
  if(detectMob()){
    config.canvasWidth = window.innerWidth
    config.canvasHeight = window.innerHeight
  }

  let imgsInfo = {}
  let imgs = new ImgsLoader(imgsInfo)
  let scene = new SceneMain(imgs)
  let game = Game.instance(scene)
  game.__start()
}

__main()