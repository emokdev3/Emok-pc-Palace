// Sample laptop data
const laptops = [
    // Low Budget Laptops
    {
        id: 1,
        name: "Acer Aspire",
        price: 1850.00,
        image: "images/low1.jpg",
        description: "Acer Aspire laptop with strong battery and neat design",
        category: "Low Budget",
        specs: {
            processor: "Intel Celeron 6th Generation",
            ram: "4GB RAM",
            storage: "500GB Hard Drive",
            speed: "2.0 GHz",
            display: "15\" Screen",
            ports: "USB, HDMI, LAN",
            battery: "Strong Battery Life",
            condition: "Neat"
        }
    },
    {
        id: 2,
        name: "Dell Laptop",
        price: 1850.00,
        image: "images/low2.jpg",
        description: "Very portable Dell laptop with neat design, comes with bag and charger",
        category: "Low Budget",
        specs: {
            processor: "Intel Celeron 6th Generation Dual Core",
            ram: "4GB RAM",
            storage: "64GB + 64GB SD Card",
            gpu: "Intel HD Graphics",
            display: "12.5\" HD",
            features: "Webcam, Bluetooth",
            ports: "HDMI, USB ports",
            accessories: "Laptop Bag, Charger"
        }
    },
    {
        id: 3,
        name: "HP Probook x360 11 G1",
        price: 2400.00,
        image: "images/Low3.jpg",
        description: "Convertible laptop with touch screen and strong battery life",
        category: "Low Budget",
        specs: {
            processor: "Intel Celeron N3350 Quadcore",
            ram: "4GB RAM",
            storage: "64GB SSD + 128GB SD Card",
            features: "Empty m.2 SSD slot, Touch Screen, Convertible",
            display: "12.5\" Touch Screen",
            ports: "USB, HDMI",
            battery: "Strong Battery Life"
        }
    },
    {
        id: 4,
        name: "HP Probook 11 G2",
        price: 2500.00,
        image: "images/Low4.jpg",
        description: "Professional laptop with fingerprint sensor and excellent battery life",
        category: "Low Budget",
        specs: {
            processor: "Intel Core i3 6th Generation",
            ram: "8GB RAM",
            storage: "128GB SSD",
            features: "Fingerprint Sensor, Tough Screen",
            display: "13\" Screen",
            battery: "Excellent Battery Life"
        }
    },

    // Student Laptops
    {
        id: 5,
        name: "HP Elitebook Folio 1040 G3",
        price: 300.00,
        image: "images/stud1.jpg",
        description: "Super slim laptop with backlit keyboard and fingerprint sensor",
        category: "Student",
        specs: {
            processor: "Intel Core i7 6th Generation",
            ram: "16GB DDR4",
            storage: "256GB SSD",
            speed: "2.40 GHz",
            display: "14\" FHD 1080p",
            features: "Backlit Keyboard, Fingerprint Sensor",
            design: "Super Slim, Extremely Neat"
        }
    },
    {
        id: 6,
        name: "Dell Vostro 5402",
        price: 4150.00,
        image: "images/stud2.jpg",
        description: "Professional laptop with backlit keyboard and fingerprint sensor",
        category: "Student",
        specs: {
            processor: "Intel Core i5 11th Generation",
            ram: "8GB RAM",
            storage: "256GB SSD",
            speed: "2.40 GHz",
            display: "14\" FHD 1080p",
            features: "Backlit Keyboard, Fingerprint Sensor"
        }
    },
    {
        id: 7,
        name: "HP Probook 640 G4",
        price: 3850.00,
        image: "images/stud3.jpg",
        description: "Professional laptop with fingerprint sensor and high-performance specs",
        category: "Student",
        specs: {
            processor: "Intel Core i5 7th Generation",
            ram: "8GB DDR4",
            storage: "256GB SSD M.2",
            speed: "2.6 GHz",
            display: "14\" FHD 1080p",
            features: "Fingerprint Sensor"
        }
    },
    {
        id: 8,
        name: "Dell Inspiron",
        price: 2600.00,
        image: "images/stud4.jpg",
        description: "X360 convertible touchscreen laptop, extremely neat",
        category: "Student",
        specs: {
            processor: "Intel Pentium Silver 7th Generation",
            ram: "4GB DDR4",
            storage: "128GB SSD",
            features: "Touchscreen, X360 Convertible, Webcam",
            display: "13\" Touchscreen",
            ports: "HDMI",
            condition: "Extremely Neat"
        }
    }
];

// DOM Elements
const featuredLaptopsContainer = document.getElementById('featuredLaptops');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.querySelector('.newsletter-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeApp();
    } catch (error) {
        console.error('Failed to initialize app:', error);
        showNotification('Failed to initialize the application. Please refresh the page.', 'danger');
    }
});

// Initialize all app components
function initializeApp() {
    loadLaptops();
    initializeSmoothScroll();
    initializeFormHandlers();
    initializeCategoryFilters();
    initializeIntersectionObserver();
}

// Load laptops into the featured laptops section
async function loadLaptops(category = null) {
    try {
        const featuredLaptopsContainer = document.getElementById('featuredLaptops');
        featuredLaptopsContainer.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"></div></div>';
        
        const filteredLaptops = category 
            ? laptops.filter(laptop => laptop.category === category)
            : laptops;
        
        featuredLaptopsContainer.innerHTML = '';
        
        filteredLaptops.forEach(laptop => {
            const laptopCard = createLaptopCard(laptop);
            featuredLaptopsContainer.appendChild(laptopCard);
        });
    } catch (error) {
        console.error('Error loading laptops:', error);
        showNotification('Failed to load laptops. Please try again.', 'danger');
    }
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
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.querySelector('.newsletter-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const formData = new FormData(contactForm);
                // Here you would typically send the form data to a server
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            } catch (error) {
                console.error('Error sending message:', error);
                showNotification('Failed to send message. Please try again.', 'danger');
            }
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const email = newsletterForm.querySelector('input[type="email"]').value;
                // Here you would typically send the email to a server
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
                showNotification('Subscribed to newsletter!', 'success');
                newsletterForm.reset();
            } catch (error) {
                console.error('Error subscribing to newsletter:', error);
                showNotification('Failed to subscribe. Please try again.', 'danger');
            }
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '1000';
    notification.style.minWidth = '300px';
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add to cart functionality
function addToCart(laptopId) {
    try {
        const laptop = laptops.find(l => l.id === laptopId);
        if (!laptop) {
            throw new Error('Laptop not found');
        }

        const message = `Hello, I'm interested in purchasing the ${laptop.name}.\n\nDetails:\n- Price: ₵${laptop.price.toFixed(2)}\n${Object.entries(laptop.specs).map(([key, value]) => `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`).join('\n')}`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/233594564356?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        showNotification(`Opening DM to discuss ${laptop.name}`, 'success');
    } catch (error) {
        console.error('Error adding to cart:', error);
        showNotification('Failed to open WhatsApp. Please try again.', 'danger');
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