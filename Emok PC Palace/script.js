// Sample laptop data
const laptops = [
    // Low Budget Laptops
    {
        id: 1,
        name: "Acer Aspire",
        price: 1850.00,
        image: "Assets/low1.jpg",
        description: "Acer Aspire laptop with strong battery and neat design",
        category: "Low Budget",
        specs: {
            processor: "Intel Celeron 6th Generation",
            ram: "4GB RAM",
            storage: "500GB Hard Drive",
            gpu: "Intel HD Graphics",
            display: "15\" HD",
            speed: "2.0 GHz",
            ports: "USB, HDMI, LAN",
            battery: "Strong Battery Life"
        }
    },
    {
        id: 2,
        name: "Budget Plus",
        price: 499.99,
        image: "images/budget-plus.jpg",
        description: "Enhanced budget laptop with better performance",
        category: "Low Budget",
        specs: {
            processor: "AMD Athlon Silver 3050U",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            gpu: "AMD Radeon Graphics",
            display: "15.6\" HD"
        }
    },
    {
        id: 3,
        name: "Budget Pro",
        price: 599.99,
        image: "images/budget-pro.jpg",
        description: "Professional budget laptop with good features",
        category: "Low Budget",
        specs: {
            processor: "Intel Pentium Gold 7505",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            gpu: "Intel UHD Graphics",
            display: "14\" FHD"
        }
    },
    {
        id: 4,
        name: "Budget Compact",
        price: 349.99,
        image: "images/budget-compact.jpg",
        description: "Compact and lightweight budget laptop",
        category: "Low Budget",
        specs: {
            processor: "Intel Celeron N4020",
            ram: "4GB DDR4",
            storage: "64GB eMMC",
            gpu: "Intel UHD Graphics 600",
            display: "11.6\" HD"
        }
    },

    // Student Laptops
    {
        id: 5,
        name: "Student Essential",
        price: 599.99,
        image: "images/student-essential.jpg",
        description: "Affordable laptop perfect for students",
        category: "Student",
        specs: {
            processor: "AMD Ryzen 5 5500U",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            gpu: "AMD Radeon Graphics",
            display: "15.6\" HD"
        }
    },
    {
        id: 6,
        name: "Student Pro",
        price: 799.99,
        image: "images/student-pro.jpg",
        description: "Enhanced student laptop with better performance",
        category: "Student",
        specs: {
            processor: "Intel Core i5-1135G7",
            ram: "8GB DDR4",
            storage: "512GB SSD",
            gpu: "Intel Iris Xe Graphics",
            display: "14\" FHD"
        }
    },
    {
        id: 7,
        name: "Student Premium",
        price: 899.99,
        image: "images/student-premium.jpg",
        description: "Premium student laptop with touch screen",
        category: "Student",
        specs: {
            processor: "Intel Core i7-1165G7",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            gpu: "Intel Iris Xe Graphics",
            display: "13.3\" FHD Touch"
        }
    },
    {
        id: 8,
        name: "Student Compact",
        price: 499.99,
        image: "images/student-compact.jpg",
        description: "Compact and lightweight student laptop",
        category: "Student",
        specs: {
            processor: "Intel Pentium Gold 7505",
            ram: "4GB DDR4",
            storage: "128GB SSD",
            gpu: "Intel UHD Graphics",
            display: "11.6\" HD"
        }
    },

    // Gaming Laptops
    {
        id: 9,
        name: "Gaming Laptop Pro",
        price: 1299.99,
        image: "images/gaming-pro.jpg",
        description: "High-performance gaming laptop with RTX 3080, 32GB RAM, 1TB SSD",
        category: "Gaming",
        specs: {
            processor: "Intel Core i9-12900H",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            gpu: "NVIDIA RTX 3080",
            display: "15.6\" 165Hz QHD"
        }
    },
    {
        id: 10,
        name: "Gaming Beast X",
        price: 1499.99,
        image: "images/gaming-beast.jpg",
        description: "Ultimate gaming machine with RTX 3090 and liquid cooling",
        category: "Gaming",
        specs: {
            processor: "AMD Ryzen 9 5950X",
            ram: "64GB DDR4",
            storage: "2TB NVMe SSD",
            gpu: "NVIDIA RTX 3090",
            display: "17.3\" 240Hz QHD"
        }
    },
    {
        id: 11,
        name: "Gaming Elite",
        price: 999.99,
        image: "images/gaming-elite.jpg",
        description: "Mid-range gaming laptop with excellent performance",
        category: "Gaming",
        specs: {
            processor: "Intel Core i7-11800H",
            ram: "16GB DDR4",
            storage: "512GB NVMe SSD",
            gpu: "NVIDIA RTX 3060",
            display: "15.6\" 144Hz FHD"
        }
    },
    {
        id: 12,
        name: "Gaming Ultra",
        price: 1799.99,
        image: "images/gaming-ultra.jpg",
        description: "Premium gaming laptop with advanced cooling system",
        category: "Gaming",
        specs: {
            processor: "Intel Core i9-13900K",
            ram: "32GB DDR5",
            storage: "2TB NVMe SSD",
            gpu: "NVIDIA RTX 4080",
            display: "17.3\" 4K 144Hz"
        }
    }
];

// DOM Elements
const featuredLaptopsContainer = document.getElementById('featuredLaptops');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.querySelector('.newsletter-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    loadLaptops();
    initializeSmoothScroll();
    initializeFormHandlers();
    initializeCategoryFilters();
});

// Load laptops into the featured laptops section
function loadLaptops(category = null) {
    featuredLaptopsContainer.innerHTML = ''; // Clear existing content
    
    const filteredLaptops = category 
        ? laptops.filter(laptop => laptop.category === category)
        : laptops;
    
    filteredLaptops.forEach(laptop => {
        const laptopCard = createLaptopCard(laptop);
        featuredLaptopsContainer.appendChild(laptopCard);
    });
}

// Create a laptop card element
function createLaptopCard(laptop) {
    const col = document.createElement('div');
    col.className = 'col-md-3 mb-4';
    
    col.innerHTML = `
        <div class="card laptop-card h-100">
            <img src="${laptop.image}" class="card-img-top" alt="${laptop.name}">
            <div class="card-body">
                <h5 class="card-title">${laptop.name}</h5>
                <p class="card-text">${laptop.description}</p>
                <p class="price">₵${laptop.price}</p>
                <button class="btn btn-primary w-100" onclick="showLaptopDetails(${laptop.id})">
                    View Details
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Show laptop details
function showLaptopDetails(laptopId) {
    const laptop = laptops.find(l => l.id === laptopId);
    if (laptop) {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = 'laptopModal';
        
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${laptop.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${laptop.image}" class="img-fluid" alt="${laptop.name}">
                            </div>
                            <div class="col-md-6">
                                <h3>${laptop.name}</h3>
                                <p class="price">₵${laptop.price}</p>
                                <p>${laptop.description}</p>
                                <h4>Specifications:</h4>
                                <ul class="specs-list">
                                    <li><strong>Processor:</strong> ${laptop.specs.processor}</li>
                                    <li><strong>RAM:</strong> ${laptop.specs.ram}</li>
                                    <li><strong>Storage:</strong> ${laptop.specs.storage}</li>
                                    <li><strong>Graphics:</strong> ${laptop.specs.gpu}</li>
                                    <li><strong>Display:</strong> ${laptop.specs.display}</li>
                                </ul>
                                <button class="btn btn-primary" onclick="addToCart(${laptop.id})">
                                    Send DM
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
        
        modal.addEventListener('hidden.bs.modal', () => {
            modal.remove();
        });
    }
}

// Initialize category filters
function initializeCategoryFilters() {
    document.querySelectorAll('.category-card .btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.closest('.category-card').querySelector('h3').textContent.replace(' Laptops', '');
            loadLaptops(category);
        });
    });
}

// Initialize smooth scrolling for navigation links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize form handlers
function initializeFormHandlers() {
    // Contact form handler
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }
    
    // Newsletter form handler
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            showNotification('Subscribed to newsletter!', 'success');
            newsletterForm.reset();
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '1000';
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add to cart functionality
function addToCart(laptopId) {
    const laptop = laptops.find(l => l.id === laptopId);
    if (laptop) {
        // Create WhatsApp message with laptop details
        const message = `Hello, I'm interested in purchasing the ${laptop.name}.\n\nDetails:\n- Price: ₵${laptop.price}\n- Processor: ${laptop.specs.processor}\n- RAM: ${laptop.specs.ram}\n- Storage: ${laptop.specs.storage}\n- Graphics: ${laptop.specs.gpu}\n- Display: ${laptop.specs.display}`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp URL with the phone number and message
        const whatsappUrl = `https://wa.me/233594564356?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Show notification
        showNotification(`Opening DM to discuss ${laptop.name}`, 'success');
    }
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 