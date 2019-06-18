// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  return copy = [...drivers,name]
}

function prependDriver(name){
  return copy = [name,...drivers]
}

function removeLastDriver(){
  return copy = drivers.slice(0,2)
}

function removeFirstDriver(){
  return copy = drivers.slice(1)
}
