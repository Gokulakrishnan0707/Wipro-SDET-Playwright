// 1) Comments API
fetch("https://jsonplaceholder.typicode.com/comments")
  .then(res => res.json())
  .then(arr => arr.filter(c => c.postId <= 2))
  .then(arr => arr.map(c => c.email))
  .then(data => console.log("Comment Emails:", data))
  .catch(console.error);


// 2) Albums API
fetch("https://jsonplaceholder.typicode.com/albums")
  .then(res => res.json())
  .then(arr => arr.filter(a => a.userId === 1))
  .then(arr => arr.map(a => a.title))
  .then(data => console.log("Albums:", data));


// 3) Photos API
fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(arr => arr.filter(p => p.id <= 10))
  .then(arr => arr.map(p => p.url))
  .then(data => console.log("Photo URLs:", data));


// 4) Users Cities
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(arr => arr.filter(u => u.id <= 5))
  .then(arr => arr.map(u => u.address.city))
  .then(data => console.log("Cities:", data));


// 5) Products (different condition)
fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => data.products)
  .then(arr => arr.filter(p => p.rating > 4.5))
  .then(arr => arr.map(p => p.title))
  .then(data => console.log("Top Rated Products:", data));


// 6) Countries (Europe)
fetch("https://restcountries.com/v3.1/all?fields=name,region")
  .then(res => res.json())
  .then(arr => arr.filter(c => c.region === "Europe"))
  .then(arr => arr.map(c => c.name.common))
  .then(data => console.log("European Countries:", data));


// 7) Random Users (phone numbers)
fetch("https://randomuser.me/api/?results=8")
  .then(res => res.json())
  .then(data => data.results)
  .then(arr => arr.filter(u => u.nat === "US"))
  .then(arr => arr.map(u => u.phone))
  .then(data => console.log("US Phones:", data));


// 8) Dog Breeds List
fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(obj => Object.keys(obj.message))
  .then(arr => arr.filter(b => b.startsWith("b")))
  .then(arr => arr.map(b => b.toUpperCase()))
  .then(data => console.log("Dog Breeds (B):", data));


// 9) Cat Facts (short ones)
fetch("https://catfact.ninja/facts")
  .then(res => res.json())
  .then(data => data.data)
  .then(arr => arr.filter(f => f.length < 60))
  .then(arr => arr.map(f => f.fact))
  .then(data => console.log("Short Cat Facts:", data));


// 10) Universities (USA)
fetch("http://universities.hipolabs.com/search?country=United+States")
  .then(res => res.json())
  .then(arr => arr.filter(u => u.name.includes("University")))
  .then(arr => arr.map(u => u.name))
  .then(data => console.log("US Universities:", data));