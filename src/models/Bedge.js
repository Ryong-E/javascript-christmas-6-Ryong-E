import { BEDGE_NAME } from '../constant.js';

class Bedge {
  #bedge;

  #GRADE;

  constructor() {
    this.#GRADE = {
      star: 5000,
      tree: 10000,
      santa: 20000,
    };
  }

  issuanceBedge(totalDiscountAmount) {
    const { star, tree, santa } = BEDGE_NAME;

    if (totalDiscountAmount >= this.#GRADE.star) this.#bedge = star;
    if (totalDiscountAmount >= this.#GRADE.tree) this.#bedge = tree;
    if (totalDiscountAmount >= this.#GRADE.santa) this.#bedge = santa;
  }

  getBedge() {
    if (!this.#bedge) return false;

    return this.#bedge;
  }
}
export default Bedge;
