# Phaser 游戏引擎中场景的生命周期



init -> preload -> create -> update -> render



* init()

  最早执行的方法, 每次跳转到该场景执行

* preload()

  一般用于资源加载, 每次跳转到该场景执行

* create()
  
  preload() 运行完毕执行, 每次跳转到该场景执行

* update()
  
  每帧执行

* render()
  
  每个渲染周期执行

  