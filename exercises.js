// Question 1
var invoices = new Object();
invoices.foo = 130;
invoices.bar = 250;

// Question 2
var payments = {
  foo: 80,
  bar: 55
};

// Question 3
var payments_received = 0;
invoices.foo -= payments.foo;
invoices.bar -= payments.bar;
payments_received = payments.foo + payments.bar;

// Question 4
var remaining_due = 0;
for (var prop in invoices) {
  remaining_due += invoices[prop];
}
console.log(remaining_due);

// Question 5
var second_invoices = Object.create(invoices);
console.log(second_invoices.foo);
invoices.foo = 0;
console.log(second_invoices.foo);

// Question 6
var Invoices = {
  foo: 130,
  bar: 250
};

// Question 7
var outstanding_invoices = [];
outstanding_invoices.push(Object.create(Invoices));
outstanding_invoices.push(Object.create(Invoices));

// Question 8
Object.freeze(Invoices);
console.log(Invoices.foo);
Invoices.foo = 3000;
console.log(Invoices.foo);

// Question 9
outstanding_invoices[0].foo = 0;
console.log(outstanding_invoices[0].foo);

// Question 10
console.log(Object.isFrozen(Invoices));
console.log(Object.isFrozen(outstanding_invoices[0]));

// Question 11
function newInvoices() {
  return {
    foo: 130,
    bar: 250
  };
}

var outstanding_invoices = [];
outstanding_invoices.push(newInvoices());
outstanding_invoices.push(newInvoices());

// Question 12
outstanding_invoices[0].foo = 0;
console.log(outstanding_invoices[0].foo);
console.log(outstanding_invoices[1].foo);

// Question 13
function newInvoices(foo, bar) {
  return {
    foo: isNaN(foo) ? 130 : foo,
    bar: isNaN(bar) ? 250 : bar
  };
}
outstanding_invoices.push(newInvoices(undefined, 400));

// Question 14
function newInvoices(clients) {
  clients = clients || {};
  return {
    foo: clients.foo || 130,
    bar: clients.bar || 250
  };
}

// Question 15
function newInvoices(clients) {
  clients = clients || {};
  var invoices = {
    foo: clients.foo || 130,
    bar: clients.bar || 250
  };
  invoices.getTotal = function() {
    return invoices.foo + invoices.bar;
  };
  return invoices;
}
outstanding_invoices.push(newInvoices());
console.log(outstanding_invoices[0].getTotal());
