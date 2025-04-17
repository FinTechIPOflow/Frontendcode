// API endpoint for IPO data
// In a real application, you would use an actual API endpoint
const API_BASE_URL = 'https://api.example.com/v1';
const UPCOMING_IPOS_ENDPOINT = '/ipos/upcoming';

// DOM elements
const ipoGridContainer = document.getElementById('ipo-grid');
const faqQuestions = document.querySelectorAll('.faq-question');

// Fetch IPO data from API with error handling
async function fetchIPOData() {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return mock data
        return mockIPOData;
    } catch (error) {
        console.error('Error fetching IPO data:', error);
        throw error;
    }
}

// Format currency
function formatCurrency(value, currency = '₹') {
    if (value === null || value === undefined) return 'Not Issued';
    
    // Format large numbers with abbreviations
    if (value >= 10000000) {
        return `${currency}${(value / 10000000).toFixed(2)} Cr.`;
    } else if (value >= 100000) {
        return `${currency}${(value / 100000).toFixed(2)} Lac`;
    } else {
        return `${currency}${value.toLocaleString('en-IN')}`;
    }
}

// Format date
function formatDate(dateString) {
    if (!dateString) return 'Not Issued';
    
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-IN', options).replace(/\//g, '-');
}

// Render IPO cards
async function renderIPOCards() {
    try {
        const data = await fetchIPOData();
        
        if (!data || data.length === 0) {
            ipoGridContainer.innerHTML = '<div class="error-message">No upcoming IPOs available at this time.</div>';
            return;
        }
        
        const iposHTML = data.map(ipo => `
            <div class="ipo-card">
                <div class="card-header">
                    <div class="company-info">
                        <div class="company-logo">
                            <img src="${ipo.logoUrl || '/placeholder.svg?height=50&width=50'}" alt="${ipo.companyName} logo">
                        </div>
                        <div class="company-name">${ipo.companyName}</div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="ipo-details">
                        <div class="detail-group">
                            <div class="detail-label">PRICE BAND</div>
                            <div class="detail-value price-band">${ipo.priceBand ? ipo.priceBand : 'Not Issued'}</div>
                        </div>
                        <div class="detail-group">
                            <div class="detail-label">OPEN</div>
                            <div class="detail-value">${formatDate(ipo.openDate)}</div>
                        </div>
                        <div class="detail-group">
                            <div class="detail-label">CLOSE</div>
                            <div class="detail-value">${formatDate(ipo.closeDate)}</div>
                        </div>
                        <div class="detail-group">
                            <div class="detail-label">ISSUE SIZE</div>
                            <div class="detail-value">${formatCurrency(ipo.issueSize)}</div>
                        </div>
                        <div class="detail-group">
                            <div class="detail-label">ISSUE TYPE</div>
                            <div class="detail-value">${ipo.issueType || 'Not Issued'}</div>
                        </div>
                        <div class="detail-group">
                            <div class="detail-label">LISTING DATE</div>
                            <div class="detail-value">${formatDate(ipo.listingDate)}</div>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="#" class="action-btn buy-btn">BUY</a>
                        <a href="#" class="action-btn notify-btn">NOTIFY</a>
                    </div>
                </div>
            </div>
        `).join('');
        
        ipoGridContainer.innerHTML = iposHTML;
    } catch (error) {
        ipoGridContainer.innerHTML = '<div class="error-message">Failed to load IPO data. Please try again later.</div>';
    }
}

// Toggle FAQ answers
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answerId = question.getAttribute('data-toggle');
        const answer = document.getElementById(answerId);
        const icon = question.querySelector('.toggle-icon i');
        
        // Toggle answer visibility
        if (answer.style.display === 'none' || !answer.style.display) {
            answer.style.display = 'block';
            icon.className = 'fas fa-minus';
        } else {
            answer.style.display = 'none';
            icon.className = 'fas fa-plus';
        }
    });
});

// Mock IPO data
const mockIPOData = [
    {
        id: 1,
        companyName: "Nova Agritech Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=NOVA",
        priceBand: "₹39 - 42",
        openDate: "2025-01-23",
        closeDate: "2025-01-25",
        issueSize: 14300000,
        issueType: "Book Built",
        listingDate: "2025-01-30"
    },
    {
        id: 2,
        companyName: "EPACK Durable Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=EPACK",
        priceBand: "₹218 - 230",
        openDate: "2025-01-19",
        closeDate: "2025-01-23",
        issueSize: 32000000,
        issueType: "Book Built",
        listingDate: "2025-01-28"
    },
    {
        id: 3,
        companyName: "BK Sweeney Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=BKS",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: null,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 4,
        companyName: "Oyo Rooms Stays Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=OYO",
        priceBand: null,
        openDate: "2025-02-15",
        closeDate: null,
        issueSize: 84300000,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 5,
        companyName: "Imagine Marketing Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=BOAT",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: 20000000,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 6,
        companyName: "Kids Clinic India Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=KIDS",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: null,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 7,
        companyName: "OLA Electric Mobility Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=OLA",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: null,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 8,
        companyName: "One MobiKwik Systems Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=MOBI",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: 6500000,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 9,
        companyName: "Le Travenues Technology Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=IXIGO",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: 18500000,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 10,
        companyName: "CMR Green Technologies",
        logoUrl: "/placeholder.svg?height=50&width=50&text=CMR",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: null,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 11,
        companyName: "Wellness Forever Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=WELL",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: null,
        issueType: "Book Built",
        listingDate: null
    },
    {
        id: 12,
        companyName: "PKH Ventures Ltd.",
        logoUrl: "/placeholder.svg?height=50&width=50&text=PKH",
        priceBand: null,
        openDate: null,
        closeDate: null,
        issueSize: 8000000,
        issueType: "Book Built",
        listingDate: null
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderIPOCards();
});