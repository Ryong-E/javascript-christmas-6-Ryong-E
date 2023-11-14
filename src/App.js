import OrderController from './controllers/OrderController.js';

class App {
  constructor() {
    this.christmasPromotion = new OrderController();
  }

  async run() {
    await this.christmasPromotion.play();
  }
}

export default App;
