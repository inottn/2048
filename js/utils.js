const rondomBetweenNumbers = (start, end, floor = false) => {
  let t = Math.random() * (end - start) + start
  if(floor) 
    return Math.floor(t)
  return t
}

const storage = (key, data) => {
  if(data) localStorage.setItem(key, data)
  else return localStorage.getItem(key)
}

const detectMob = () => {  
  if(navigator.userAgent.match(/Android/i)  
  || navigator.userAgent.match(/webOS/i)  
  || navigator.userAgent.match(/iPhone/i)  
  || navigator.userAgent.match(/iPad/i)  
  || navigator.userAgent.match(/iPod/i)  
  || navigator.userAgent.match(/BlackBerry/i)  
  || navigator.userAgent.match(/Windows Phone/i)
  ) 
    return true  
  else
    return false
}

const isStorageSupported = () => {
  let testKey = 'test',
      storage = window.localStorage
  try {
      storage.setItem(testKey, 'testValue')
      storage.removeItem(testKey)
      return true
  } catch (error) {
      return false
  }
}

const fillRectByCenter = (ctx, centerX, centerY, horizontalSideLength, verticalSideLength = horizontalSideLength) => {
  ctx.fillRect(centerX - horizontalSideLength / 2, centerY - verticalSideLength / 2, horizontalSideLength, verticalSideLength)
}

const scaleByCenter = (ctx, centerX, centerY, scaleX, scaleY = scaleX) => {
  ctx.translate(centerX * (1 - scaleX), centerY * (1 - scaleY))
  ctx.scale(scaleX, scaleY)
}

const easeOut = (time, form, to, duration) => {
  return -(to - form) * (time /= duration) * (time - 2) + form
}

let test = {}

test.id = 1

test.t = () => {
  let a = [], b = [], c = [], d = []
  for (let i = 0; i < 4; i++) {
    const element = test.box.blocks.blocksArray[i][0] === null ? null : 2 ** test.box.blocks.blocksArray[i][0].level
    a.push(element)
  }
  for (let i = 0; i < 4; i++) {
    const element = test.box.blocks.blocksArray[i][1] === null ? null : 2 ** test.box.blocks.blocksArray[i][1].level
    b.push(element)
  }
  for (let i = 0; i < 4; i++) {
    const element = test.box.blocks.blocksArray[i][2] === null ? null : 2 ** test.box.blocks.blocksArray[i][2].level
    c.push(element)
  }
  for (let i = 0; i < 4; i++) {
    const element = test.box.blocks.blocksArray[i][3] === null ? null : 2 ** test.box.blocks.blocksArray[i][3].level
    d.push(element)
  }

  return [a, b, c, d]
}

test.b = () => {
  let a = [], b = [], c = [], d = []
  for (let i = 0; i < 4; i++) {
    const element = test.box.blocks.blocksArray[i][0] === null ? null : test.box.blocks.blocksArray[i][0]
    a.push(element)
  }
  for (let i = 0; i < 4; i++) {
    const element = test.box.blocks.blocksArray[i][1] === null ? null : test.box.blocks.blocksArray[i][1]
    b.push(element)
  }
  for (let i = 0; i < 4; i++) {
    const element = test.box.blocks.blocksArray[i][2] === null ? null : test.box.blocks.blocksArray[i][2]
    c.push(element)
  }
  for (let i = 0; i < 4; i++) {
    const element = test.box.blocks.blocksArray[i][3] === null ? null : test.box.blocks.blocksArray[i][3]
    d.push(element)
  }

  return [a, b, c, d]
}
