import { ShoppingCart } from './ShoppingCart';

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    // TODO: Maak hier een nieuwe ShoppingCart aan
       // Deze regel maakt een nieuwe cart aan voor elke test
    // Hint: cart = new ShoppingCart();
    cart = new ShoppingCart();
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: nieuwe cart is leeg', () => {
    cart = new ShoppingCart();
    expect(cart.getItemCount()).toBe(0);
  });

  test('addItem voegt product toe', () => {
    // TODO: Voeg een product toe: { id: 1, name: 'Laptop', price: 999 }
     cart.addItem({ id: 1, name: 'Laptop', price: 999 });
    // TODO: Check of getItemCount() nu 1 is
    
    expect(cart.getItemCount()).toBe(1); // Deze test faalt! Vervang met je eigen test
  });

  test('addItem met quantity voegt meerdere items toe', () => {
    // TODO: Voeg product toe met quantity 3
    // TODO: Check of getItemCount() 3 is
    cart.addItem({ id: 2, name: 'Muis', price: 25 }, 3);
    expect(cart.getItemCount()).toBe(3); // Deze test faalt! Vervang met je eigen test
  });

  test('getTotal berekent juiste totaal', () => {
    // TODO: Voeg product toe: { id: 1, name: 'Muis', price: 25 }, quantity 2
    cart.addItem({ id: 1, name: 'Muis', price: 25 }, 2);
    // TODO: Check of getTotal() 50 teruggeeft (2 x 25)
    expect(cart.getTotal()).toBe(50); // Deze test faalt! Vervang met je eigen test
  });

  test('removeItem verwijdert product', () => {
    // TODO: Voeg een product toe met id: 1
     cart.addItem({ id: 1, name: 'Laptop', price: 999 });
    // TODO: Roep removeItem(1) aan
     cart.removeItem(1);
    // TODO: Check of getItemCount() 0 is
    expect(cart.getItemCount()).toBe(0); // Deze test faalt! Vervang met je eigen test
  });

  test('clear maakt cart leeg', () => {
    // TODO: Voeg 2 producten toe
     cart.addItem({ id: 1, name: 'Laptop', price: 999 });
     cart.addItem({ id: 2, name: 'Muis', price: 25 }, 3);
    // TODO: Roep clear() aan
    cart.clear();
    // TODO: Check of getItemCount() 0 is
    expect(cart.getItemCount()).toBe(0);
    // Deze test faalt! Vervang met je eigen test
  });

});
