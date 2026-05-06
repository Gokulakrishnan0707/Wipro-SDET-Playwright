// 1) Comments API
async function getCommentEmails() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const arr = await res.json();
    const data = arr
      .filter(c => c.postId <= 2)
      .map(c => c.email);
    console.log("Comment Emails:", data);
  } catch (err) {
    console.error(err);
  }
}

// 2) Albums API
async function getAlbums() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const arr = await res.json();
    const data = arr
      .filter(a => a.userId === 1)
      .map(a => a.title);
    console.log("Albums:", data);
  } catch (err) {
    console.error(err);
  }
}

// 3) Photos API
async function getPhotos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const arr = await res.json();
    const data = arr
      .filter(p => p.id <= 10)
      .map(p => p.url);
    console.log("Photo URLs:", data);
  } catch (err) {
    console.error(err);
  }
}

// 4) Users Cities
async function getCities() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const arr = await res.json();
    const data = arr
      .filter(u => u.id <= 5)
      .map(u => u.address.city);
    console.log("Cities:", data);
  } catch (err) {
    console.error(err);
  }
}

// 5) Products
async function getTopProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const dataObj = await res.json();
    const data = dataObj.products
      .filter(p => p.rating > 4.5)
      .map(p => p.title);
    console.log("Top Rated Products:", data);
  } catch (err) {
    console.error(err);
  }
}

// 6) Countries (Europe)
async function getEuropeanCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,region");
    const arr = await res.json();
    const data = arr
      .filter(c => c.region === "Europe")
      .map(c => c.name.common);
    console.log("European Countries:", data);
  } catch (err) {
    console.error(err);
  }
}

// 7) Random Users (phone numbers)
async function getUSPhones() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=8");
    const dataObj = await res.json();
    const data = dataObj.results
      .filter(u => u.nat === "US")
      .map(u => u.phone);
    console.log("US Phones:", data);
  } catch (err) {
    console.error(err);
  }
}

// 8) Dog Breeds List
async function getDogBreedsB() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const obj = await res.json();
    const data = Object.keys(obj.message)
      .filter(b => b.startsWith("b"))
      .map(b => b.toUpperCase());
    console.log("Dog Breeds (B):", data);
  } catch (err) {
    console.error(err);
  }
}

// 9) Cat Facts
async function getShortCatFacts() {
  try {
    const res = await fetch("https://catfact.ninja/facts");
    const dataObj = await res.json();
    const data = dataObj.data
      .filter(f => f.length < 60)
      .map(f => f.fact);
    console.log("Short Cat Facts:", data);
  } catch (err) {
    console.error(err);
  }
}

// 10) Universities (USA)
async function getUSUniversities() {
  try {
    const res = await fetch("http://universities.hipolabs.com/search?country=United+States");
    const arr = await res.json();
    const data = arr
      .filter(u => u.name.includes("University"))
      .map(u => u.name);
    console.log("US Universities:", data);
  } catch (err) {
    console.error(err);
  }
}

// Call all functions
getCommentEmails();
getAlbums();
getPhotos();
getCities();
getTopProducts();
getEuropeanCountries();
getUSPhones();
getDogBreedsB();
getShortCatFacts();
getUSUniversities();