//Código fonte de Loiane Groner,
//disponível em https://github.com/PacktPublishing/Learning-JavaScript-Data-Structures-and-Algorithms-Third-Edition
export class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}
export class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
