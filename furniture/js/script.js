// Products Data
const products = [
  {id:1,name:'Comfort Sofa',price:350,category:'sofa',image:'images/sofa1.jpg'},
  {id:2,name:'Luxury Sofa',price:450,category:'sofa',image:'images/sofa2.jpg'},
  {id:3,name:'Modern Chair',price:120,category:'chair',image:'images/chair1.jpg'},
  {id:4,name:'Wooden Table',price:200,category:'table',image:'images/table1.jpg'}
];

// Add to Cart
function addToCart(id){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart',JSON.stringify(cart));
  updateCartCount();
  alert('Product added to cart!');
}

// Update Cart Count
function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const countEls = document.querySelectorAll('#cart-count');
  countEls.forEach(el=>el.textContent = cart.length);
}

// Filter Products
function filterProducts(category){
  const container = document.getElementById('product-list');
  if(!container) return;
  container.innerHTML = '';
  let filtered = category==='all'?products:products.filter(p=>p.category===category);
  filtered.forEach(p=>{
    const div = document.createElement('div');
    div.className='product';
    div.innerHTML=`
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

// Display Cart Items
function displayCart(){
  const container = document.getElementById('cart-items');
  if(!container) return;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  container.innerHTML = '';
  let total=0;
  cart.forEach(id=>{
    const p = products.find(x=>x.id===id);
    total+=p.price;
    const div=document.createElement('div');
    div.textContent=`${p.name} - $${p.price}`;
    container.appendChild(div);
  });
  const totalEl=document.getElementById('cart-total');
  if(totalEl) totalEl.textContent=total;
}

// Hero Slider
let slideIndex=0;
function showSlides(){
  const slides=document.querySelectorAll('.hero-slider img');
  if(slides.length===0) return;
  slides.forEach(s=>s.style.display='none');
  slideIndex++;
  if(slideIndex>slides.length) slideIndex=1;
  slides[slideIndex-1].style.display='block';
  setTimeout(showSlides,4000);
}

// Initialize
document.addEventListener('DOMContentLoaded',()=>{
  updateCartCount();
  filterProducts('all');
  displayCart();
  showSlides();
});
