/* Luxe Glow Cosmetics — cart.js | Gestión de carrito con localStorage, offcanvas y toast */
const Cart = {
  storageKey: 'luxe_cart',
  products: [
    {
      id: 101,
      name: "Sérum Facial Rose Radiance",
      category: "facial",
      categoryName: "Cuidado Facial",
      price: 49.99,
      originalPrice: 59.99,
      rating: 5.0,
      reviews: 124,
      badge: "Más Vendido",
      image: "assets/images/serum_rose.png",
      volume: "30 ml / 1.0 fl. oz.",
      skinType: "Todo tipo de piel / Opaca o deshidratada",
      description: "Sérum concentrado con extractos puros de rosas botánicas y ácido hialurónico para una piel luminosa e hidratada.",
      benefits: ["Ilumina el tono y revitaliza la piel opaca", "Hidratación profunda durante 24 horas", "Suaviza líneas de expresión y textura áspera"],
      ingredients: "Rosa Damascena Flower Extract, Sodium Hyaluronate, Niacinamide, Glycerin, Camellia Sinensis Leaf Extract.",
      howToUse: "Aplicar 3 a 4 gotas sobre la piel limpia de rostro y cuello, realizando suaves presiones con las yemas de los dedos por la mañana y noche."
    },
    {
      id: 102,
      name: "Labial Velvet Gold Matte",
      category: "maquillaje",
      categoryName: "Maquillaje",
      price: 29.50,
      originalPrice: 35.00,
      rating: 4.8,
      reviews: 89,
      badge: "Edición Lujo",
      image: "assets/images/lipstick_velvet.png",
      volume: "3.8 g / 0.13 oz.",
      skinType: "Apto para todo tipo de labios",
      description: "Labial mate de textura sedosa de larga duración en estuche dorado bañado con pigmentos intensos.",
      benefits: ["Acabado mate aterciopelado sin resecar", "Fórmula infusionada con aceites botánicos", "Duración de hasta 12 horas intactas"],
      ingredients: "Dimethicone, Synthetic Wax, Butyrospermum Parkii Butter, Tocopheryl Acetate, CI 77491, CI 15850.",
      howToUse: "Delinear el arco de cupido y rellenar con suavidad desde el centro hacia las comisuras para un impacto de color uniforme."
    },
    {
      id: 103,
      name: "Crema Hidratante Hydra Glow",
      category: "facial",
      categoryName: "Cuidado Facial",
      price: 58.00,
      originalPrice: 68.00,
      rating: 4.9,
      reviews: 96,
      badge: "Orgánico",
      image: "assets/images/cream_hydra.png",
      volume: "50 ml / 1.7 fl. oz.",
      skinType: "Seca, mixta o sensible",
      description: "Crema nutritiva ultra ligera que restaura la barrera cutánea con péptidos naturales y acabado sedoso.",
      benefits: ["Restaura la barrera lipídica y retiene humedad", "Acabado terciopelo no graso de rápida absorción", "Calma rojeces e irritaciones cutáneas"],
      ingredients: "Aqua, Squalane, Palmitoyl Tripeptide-5, Ceramide NP, Centella Asiatica Extract, Tocopherol.",
      howToUse: "Distribuir una pequeña cantidad sobre rostro, cuello y escote limpios mañana y noche tras tu sérum favorito."
    },
    {
      id: 104,
      name: "Perfume Éclat D'Or Luxury",
      category: "fragancias",
      categoryName: "Fragancias",
      price: 85.00,
      originalPrice: 105.00,
      rating: 5.0,
      reviews: 67,
      badge: "Exclusivo",
      image: "assets/images/perfume_luxe.png",
      volume: "100 ml / 3.4 fl. oz. Eau de Parfum",
      skinType: "Uso personal / Toda ocasión",
      description: "Fragancia envolvente con notas de jazmín real, ambar cálido y flor de azahar en frasco de cristal tallado.",
      benefits: ["Concentración Eau de Parfum de alta fijación", "Notas olfativas florales, ambaradas y elegantes", "Frasco de colección con detalles dorados"],
      ingredients: "Alcohol Denat., Parfum, Benzyl Salicylate, Linalool, Hydroxycitronellal, Limonene, Aqua.",
      howToUse: "Vaporizar a 15 cm de los puntos de pulso: muñecas, cuello y detrás del lóbulo de las orejas."
    },
    {
      id: 105,
      name: "Sérum Reparador Nocturno Elixir",
      category: "facial",
      categoryName: "Cuidado Facial",
      price: 54.00,
      originalPrice: 65.00,
      rating: 4.9,
      reviews: 82,
      badge: "Nuevo",
      image: "assets/images/serum_rose.png",
      volume: "30 ml / 1.0 fl. oz.",
      skinType: "Madura, desvitalizada o fatigada",
      description: "Elixir bifásico nocturno con escualano vegetal, rosa mosqueta y péptidos regeneradores para despertar con piel descansada.",
      benefits: ["Acelera el ciclo de renovación celular nocturna", "Nutrición intensa sin obstruir poros", "Elasticidad y tersura visibles desde la primera semana"],
      ingredients: "Rosa Canina Fruit Oil, Squalane, Bakuchiol, Tocopherol, Bisabolol, Helianthus Annuus Seed Oil.",
      howToUse: "Calentar 3 gotas en las palmas y masajear en movimientos ascendentes antes de dormir como último paso de tu ritual nocturno."
    },
    {
      id: 106,
      name: "Crema Nutritiva de Noche Peptidic",
      category: "facial",
      categoryName: "Cuidado Facial",
      price: 62.50,
      originalPrice: 75.00,
      rating: 4.8,
      reviews: 54,
      badge: "Recomendado",
      image: "assets/images/cream_hydra.png",
      volume: "50 ml / 1.7 fl. oz.",
      skinType: "Seca, deshidratada o madura",
      description: "Tratamiento intensivo de noche formulado con complejo de tripéptidos y ceramidas puras para una reparación celular profunda.",
      benefits: ["Reafirma y mejora la elasticidad dérmica", "Relleno óptico de líneas de expresión por hidratación", "Textura rica envolvente que no mancha almohada"],
      ingredients: "Aqua, Butyrospermum Parkii, Palmitoyl Tetrapeptide-7, Sodium Hyaluronate, Panthenol, Allantoin.",
      howToUse: "Aplicar generosamente sobre rostro y cuello limpios cada noche realizando un suave masaje circular ascendente."
    },
    {
      id: 107,
      name: "Labial Velvet Berry Royal",
      category: "maquillaje",
      categoryName: "Maquillaje",
      price: 32.00,
      originalPrice: 38.00,
      rating: 4.9,
      reviews: 41,
      badge: "Edición Limitada",
      image: "assets/images/lipstick_velvet.png",
      volume: "3.8 g / 0.13 oz.",
      skinType: "Apto para todo tipo de labios",
      description: "Tono borgoña profundo de inspiración barroca, con microesferas de ácido hialurónico para un volumen sedoso.",
      benefits: ["Pigmentación de alta cobertura en una sola pasada", "Microesferas de ácido hialurónico voluminizadoras", "Aroma sutil a vainilla natural"],
      ingredients: "Caprylic/Capric Triglyceride, Cera Alba, Ricinus Communis Seed Oil, Sodium Hyaluronate, CI 77499, CI 15850.",
      howToUse: "Deslizar directamente sobre los labios o aplicar con pincel para una definición milimétrica."
    },
    {
      id: 108,
      name: "Perfume Éclat D'Or Nuit Absolu",
      category: "fragancias",
      categoryName: "Fragancias",
      price: 92.00,
      originalPrice: 110.00,
      rating: 5.0,
      reviews: 38,
      badge: "Exclusivo",
      image: "assets/images/perfume_luxe.png",
      volume: "100 ml / 3.4 fl. oz. Extrait de Parfum",
      skinType: "Ocasiones especiales / Gala y Noche",
      description: "Extrait de parfum con acordes seductores de vainilla de Madagascar, sándalo blanco y pétalos de rosa nocturna.",
      benefits: ["Mayor concentración aromática (>25% esencia)", "Estela magnética y sofisticada de larga duración", "Frasco lacado de lujo con tapón labrado"],
      ingredients: "Alcohol Denat., Parfum, Benzyl Alcohol, Coumarin, Eugenol, Isoeugenol, Farnesol.",
      howToUse: "Rociar delicadamente sobre cuello, cabello y escote para una estela cautivadora todo el día."
    }
  ],
  cart: [],
  _load(){ try{ const raw=localStorage.getItem(this.storageKey); if(raw) this.cart=JSON.parse(raw);}catch(e){ this.cart=[]; } },
  _save(){ try{ localStorage.setItem(this.storageKey, JSON.stringify(this.cart)); }catch(e){} },
  _count(){ return this.cart.reduce((t,i)=>t+i.qty,0); },
  _subtotal(){ return this.cart.reduce((s,i)=>s+i.product.price*i.qty,0); },
  init(){
    this._load();
    this.updateBadge();
    this.renderOffcanvas();
  },
  updateBadge(){
    const el=document.getElementById('cart-count');
    if(el) el.textContent=this._count();
    const el2=document.getElementById('navbar-cart-count');
    if(el2) el2.textContent=this._count();
  },
  add(productId){
    const product=this.products.find(p=>p.id===productId);
    if(!product) return;
    const idx=this.cart.findIndex(i=>i.id===productId);
    if(idx>-1) this.cart[idx].qty+=1; else this.cart.push({id:productId, product, qty:1});
    this._save(); this.updateBadge(); this.renderOffcanvas();
    this.showToast(`¡<b>${product.name}</b> añadido al carrito!`);
    // abrir offcanvas si Bootstrap disponible
    const off=document.getElementById('cartOffcanvas');
    if(off && window.bootstrap){ try{ bootstrap.Offcanvas.getOrCreateInstance(off).show(); }catch(e){} }
  },
  remove(productId){
    this.cart=this.cart.filter(i=>i.id!==productId);
    this._save(); this.updateBadge(); this.renderOffcanvas();
  },
  updateQty(productId, delta){
    const item=this.cart.find(i=>i.id===productId);
    if(!item) return;
    item.qty+=delta;
    if(item.qty<=0) this.remove(productId);
    else { this._save(); this.updateBadge(); this.renderOffcanvas(); }
  },
  checkout(){
    this.showToast("¡Pedido simulado con éxito! Gracias por tu preferencia en Luxe Glow.");
    this.cart=[]; this._save(); this.updateBadge(); this.renderOffcanvas();
    const off=document.getElementById('cartOffcanvas');
    if(off && window.bootstrap){ try{ bootstrap.Offcanvas.getInstance(off)?.hide(); }catch(e){} }
  },
  renderOffcanvas(){
    const body=document.getElementById('cart-body');
    const footer=document.getElementById('cart-footer');
    if(!body || !footer) return;
    const count=this._count();
    if(count===0){
      body.innerHTML=`<div class="text-center py-5"><i class="fas fa-shopping-basket fs-1 text-muted mb-3 opacity-50"></i><p class="text-muted fw-500">Tu carrito está vacío actualmente.</p><button class="btn btn-luxe-outline btn-sm mt-2" data-bs-dismiss="offcanvas">Explorar Cosméticos</button></div>`;
      footer.innerHTML='';
      footer.classList.add('d-none');
    } else {
      footer.classList.remove('d-none');
      body.innerHTML=`<div class="list-group list-group-flush">${this.cart.map(item=>`
        <div class="list-group-item px-0 py-3 border-bottom">
          <div class="d-flex align-items-center">
            <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img me-3">
            <div class="flex-grow-1">
              <h6 class="mb-0 text-burgundy fw-bold fs-6">${item.product.name}</h6>
              <small class="text-gold fw-bold">$${item.product.price.toFixed(2)} c/u</small>
              <div class="d-flex align-items-center mt-2">
                <button class="btn btn-sm btn-outline-secondary py-0 px-2 rounded-circle" onclick="Cart.updateQty(${item.id},-1)">-</button>
                <span class="mx-2 fw-bold text-dark">${item.qty}</span>
                <button class="btn btn-sm btn-outline-secondary py-0 px-2 rounded-circle" onclick="Cart.updateQty(${item.id},1)">+</button>
              </div>
            </div>
            <div class="text-end">
              <span class="fw-bold text-burgundy fs-6">$${(item.product.price*item.qty).toFixed(2)}</span>
              <div><button class="btn btn-sm text-danger border-0 p-0 mt-1" onclick="Cart.remove(${item.id})"><i class="fas fa-trash-alt"></i></button></div>
            </div>
          </div>
        </div>`).join('')}</div>`;
      footer.innerHTML=`<div class="d-flex justify-content-between align-items-center mb-3"><span class="fw-bold text-muted">Subtotal:</span><span class="fs-4 fw-bold text-burgundy">$${this._subtotal().toFixed(2)}</span></div><button class="btn btn-luxe-primary w-100 py-2" onclick="Cart.checkout()">Procesar Compra <i class="fas fa-arrow-right ms-2"></i></button>`;
    }
  },
  showToast(message){
    const container=document.getElementById('toast-container');
    if(!container) return;
    const id='toast-'+Date.now();
    const html=`<div id="${id}" class="toast align-items-center text-white bg-burgundy border-0 show shadow-lg" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body"><i class="fas fa-check-circle text-gold me-2"></i> ${message}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div></div>`;
    container.insertAdjacentHTML('beforeend', html);
    const el=document.getElementById(id);
    setTimeout(()=>{ if(el) el.remove(); },4000);
  }
};
document.addEventListener('DOMContentLoaded', ()=> Cart.init());
