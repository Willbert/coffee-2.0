export function read() {
  const value = window.localStorage.getItem('cards');
  return value ? JSON.parse(value) : [];
}
export function write(cards) {
  window.localStorage.setItem('cards', JSON.stringify(cards));
}
export function add(card) {
  write([...read(), card])
}
export function find(handle) {
  return read().find(object => object.handle === card.handle)
}