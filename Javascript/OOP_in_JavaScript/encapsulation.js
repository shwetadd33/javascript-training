class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = []; // decalaring data private to the class. so it can not be accessed from outside the class
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //this.movements = [];
    //  this.locale = navigator.language;

    console.log(`Thanks for opening an account , ${owner}`);
  }

  //public interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // To make method private to the class use # before method name.
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved...');
    }
  }
}

const acc1 = new Account('Jonas', 'Dollar', 1111);
acc1.deposit(300);
acc1.withdraw(100);
//acc1.movements = [];
console.log(acc1);
//acc1.#approveloan(1);
