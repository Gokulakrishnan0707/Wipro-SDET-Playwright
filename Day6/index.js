// Code Practice  

// 1) Flight booking data cleaner
const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

// parsing and destructuring
const travelFlights = rawFlights.map(item => {

  const [path, amountValue] = item.split(":");

  const [source, destination] = path.split("-");


// validation and coercion
  let amount = Number(amountValue);

  if (isNaN(amount)) {
    amount = 0;
  }


// Object creation
  return {
    from: source,
    to: destination,
    price: amount
  };
});


// filtering
const validFlights = travelFlights.filter(item => {
  return item.price >= 100 && item.price <= 500;
});


// sorting
validFlights.sort((first, second) => first.price - second.price);


// return
const outputFlights = JSON.stringify(validFlights);

console.log(outputFlights);



// 2) E-commerce discount applicator
const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];


// The Pipeline
function applyPromo(cart, promoCallback) {

  let itemCount = 0;

  let savingsAmount = 0;


// Transformation
  const updatedProducts = cart.map(item => {

    // Use callback to identify eligible items
    if (promoCallback(item)) {

      const reducedPrice = item.price * 0.10;

      itemCount++;

      savingsAmount += reducedPrice;

      return {
        name: item.name,
        price: item.price - reducedPrice,
        category: item.category,
        isDiscounted: true
      };
    }

    return {
      name: item.name,
      price: item.price,
      category: item.category,
      isDiscounted: false
    };
  });


// Final Summary
  console.log(
    `Promotion applied! ${itemCount} items were discounted for a total saving of $${savingsAmount}.`
  );


// Delayed Return
  setTimeout(() => {
    console.log(updatedProducts);
  }, 1000);
}


// The Callback (isEligible)
function isEligible(product) {

  if (!product) {
    return false;
  }

  return (
    product.category === "Electronics" &&
    product.price > 200
  );
}

applyPromo(cart, isEligible);



// 3) Movie stream analytics
const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];


// Parsing, Object Creation and Validation
const cinemaMovies = rawMovies.map(film => {

  const [movieName, movieGenre, totalViews] = film.split("|");


// Convert views into Number
  let viewCount = Number(totalViews);


// If views is invalid, set to 0
  if (isNaN(viewCount)) {
    viewCount = 0;
  }


// Return object
  return {
    name: movieName,
    genre: movieGenre,
    views: viewCount
  };
});


// Filtering
const topMovies = cinemaMovies.filter(film => {

  return (
    (film.genre === "Action" ||
     film.genre === "Sci-Fi") &&
     film.views > 5000
  );
});


// Sorting
topMovies.sort((first, second) => {
  return second.views - first.views;
});


// Return Final JSON String
const movieResult = JSON.stringify(topMovies);

console.log(movieResult);



// 4) Automated payroll processor
const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];


// Callback Function
function taxLogic(employee) {

  if (!employee) {
    return 0;
  }

  if (employee.salary > 5000) {
    return 0.20;
  }

  return 0.10;
}


// calculatePayroll Function
function calculatePayroll(employees, taxCallback) {

  let payoutAmount = 0;


// Process Each Employee
  const payrollData = employees.map(worker => {

    const taxPercent = taxCallback(worker);

    const taxValue = worker.salary * taxPercent;


// Calculate net salary
    const finalSalary = worker.salary - taxValue;

    payoutAmount += finalSalary;

    let employeeStatus;

    if (finalSalary > 4000) {
      employeeStatus = "Premium";
    } else {
      employeeStatus = "Standard";
    }

    return {
      id: worker.id,
      name: worker.name,
      salary: worker.salary,
      netSalary: finalSalary,
      status: employeeStatus
    };
  });


// Template Literals
  console.log(
    `Payroll Processed: Total Net Payout is $${payoutAmount} for ${employees.length} employees.`
  );


// setTimeout
  setTimeout(() => {
    console.log(payrollData);
  }, 2000);
}

calculatePayroll(employees, taxLogic);