// Write your solution
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers = [...drivers, name];
  return drivers;
}
