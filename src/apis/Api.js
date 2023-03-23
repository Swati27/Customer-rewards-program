/**
 * @returns customer data
 */
export function getCustomers() {
  return fetch("http://localhost:3000/customers");
}

/**
 * @returns transaction data
 */
export function getTransactions() {
  return fetch("http://localhost:3000/transactions");
}

/**
 * @param {integer} id
 * @returns transactions of a customer
 */
export function getACustomerTransactions(id) {
  return fetch(`http://localhost:3000/transactions/?custId=${id}`);
}
