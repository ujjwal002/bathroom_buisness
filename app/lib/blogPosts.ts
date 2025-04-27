// lib/blogPosts.ts
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    image: string;
    slug: string;
    content: string;
}

export interface Category {
    id: string;
    label: string;
}

export const categories: Category[] = [
    { id: "all", label: "All Posts" },
    { id: "stone-design", label: "Stone Design" },
    { id: "remodeling-tips", label: "Remodeling Tips" },
    { id: "project-spotlight", label: "Project Spotlights" },
    { id: "company-updates", label: "Company Updates" },
];

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "5 Stunning Stone Tile Trends for 2025 Bathrooms",
        excerpt: "Explore the latest stone tile designs, from marble to slate, to elevate your bathroom remodel.",
        category: "stone-design",
        date: "2025-04-01",
        author: "Jane Smith",
        image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/mHSA0TExdMsQjnyxRC3Wq.png",
        slug: "stone-tile-trends-2025",
        content: `
        <p class="lead">As we move into 2025, natural stone continues to dominate bathroom design trends, offering both timeless elegance and modern sophistication. Homeowners in Metro Detroit are increasingly turning to stone materials to create spa-like retreats in their own homes.</p>
        
        <p>Stone tiles are making a bold statement in 2025 bathroom designs. From luxurious marble to rugged slate, these natural materials offer unmatched elegance and durability. Here are five trends to inspire your next remodel:</p>
        
        <h2>1. Large-Format Marble Tiles</h2>
        <div class="image-container">
          <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/BELLEZA-WHITE-MARBLE-EFFECT-TILE-LOUNGE.jpg.webp" alt="Large marble tiles in bathroom" width="800" height="500" class="rounded-lg shadow-lg">
          <p class="image-caption">Carrara marble tiles in a modern bathroom setting</p>
        </div>
        <p>Large-format marble tiles (24"x48" and larger) create a seamless, spa-like aesthetic with fewer grout lines. Their veined patterns add visual interest without overwhelming the space. We're particularly seeing:</p>
        <ul>
          <li>Book-matched marble for dramatic symmetrical patterns</li>
          <li>Honed finishes for a matte, contemporary look</li>
          <li>Warm gray and taupe marble varieties gaining popularity</li>
        </ul>
        
        <h2>2. Textured Slate Finishes</h2>
        <p>Slate's natural cleft texture adds depth and dimension to bathrooms while providing excellent slip resistance. Perfect for:</p>
        <ul>
          <li>Shower floors where safety is paramount</li>
          <li>Feature walls behind freestanding tubs</li>
          <li>Bathroom flooring that makes a statement</li>
        </ul>
        <blockquote>
          "The natural variation in slate gives each installation a unique character that manufactured tiles simply can't replicate." - Michael Anderson, Lead Designer
        </blockquote>
        
        <h2>3. Hexagonal Stone Mosaics</h2>
        <p>Hexagonal tiles in mixed stone materials bring a modern geometric flair to:</p>
        <ul>
          <li>Shower niches and borders</li>
          <li>Bathroom floor inlays</li>
          <li>Backsplashes behind vanities</li>
        </ul>
        <p>Popular combinations include marble and travertine or slate and quartzite in contrasting colors.</p>
        
        <h2>4. Warm-Toned Travertine</h2>
        <p>Travertine's earthy tones (creams, golds, and rusts) are trending for creating cozy, inviting bathrooms. Benefits include:</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Best For</th>
              <th>Maintenance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Classic Travertine</td>
              <td>Flooring, walls</td>
              <td>Moderate (needs sealing)</td>
            </tr>
            <tr>
              <td>Filled Travertine</td>
              <td>Showers, wet areas</td>
              <td>Low maintenance</td>
            </tr>
          </tbody>
        </table>
        
        <h2>5. Polished Quartzite Accents</h2>
        <p>Quartzite's durability and glossy finish make it ideal for:</p>
        <ul>
          <li>Statement walls behind vanities</li>
          <li>Bathroom countertops</li>
          <li>Shower benches and shelves</li>
        </ul>
        
        
      `,
    },
    {
        id: 2,
        title: "Marble Masterpiece: A Bathroom Transformation in Bloomfield Hills",
        excerpt: "See how we used marble stone to transform a dated bathroom into a luxurious retreat.",
        category: "project-spotlight",
        date: "2025-03-15",
        author: "Mike Johnson",
        image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/_QE_wu8yh888nrX1JUzYt.png",
        slug: "marble-bathroom-transformation",
        content: `
        <h2>Project Overview</h2>
        <div class="before-after">
          <div class="before">
            <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/Gemini_Generated_Image_7bprdt7bprdt7bpr.webp" alt="Before renovation" width="600" height="400">
            <p>Original 1990s bathroom</p>
          </div>
          <div class="after">
            <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/image.webp" alt="After renovation" width="600" height="400">
            <p>Completed marble bathroom</p>
          </div>
        </div>
        
        <p>Our clients in Bloomfield Hills wanted to transform their cramped, outdated master bathroom into a luxurious retreat that would serve as their personal sanctuary. The goals were:</p>
        <ul>
          <li>Create a spa-like atmosphere</li>
          <li>Incorporate natural stone throughout</li>
          <li>Maximize the modest square footage</li>
          <li>Add smart storage solutions</li>
        </ul>
        
        <h2>Material Selection</h2>
        <p>After considering several options, we selected:</p>
        <ul>
          <li><strong>Carrara marble</strong> for walls and flooring</li>
          <li><strong>Statuary marble</strong> for the vanity top</li>
          <li><strong>Brushed brass fixtures</strong> for warmth</li>
          <li><strong>Frameless glass shower</strong> to enhance openness</li>
        </ul>
        
        <h2>Key Challenges & Solutions</h2>
        <div class="challenge-solution">
          <h3>Challenge: Low Ceilings</h3>
          <p>The 8-foot ceilings made the space feel cramped.</p>
          <h3>Solution:</h3>
          <p>We used vertical marble tile patterns and a mirrored medicine cabinet to create the illusion of height.</p>
        </div>
        
        <div class="challenge-solution">
          <h3>Challenge: Limited Natural Light</h3>
          <p>The single small window provided minimal daylight.</p>
          <h3>Solution:</h3>
          <p>We installed LED backlighting behind the mirror and used high-gloss marble to reflect light.</p>
        </div>
        
        <h2>Final Results</h2>
        <p>The transformation exceeded our clients' expectations:</p>
        <ul>
          <li>Increased home value by approximately $35,000</li>
          <li>Created a functional yet luxurious space</li>
          <li>Improved energy efficiency with LED lighting</li>
        </ul>
        
        <div class="testimonial">
          <blockquote>
            "Stone Works completely transformed our bathroom into something out of a luxury hotel. The marble work is flawless and we get compliments daily."
          </blockquote>
          <p>- Sarah & Robert K., Bloomfield Hills</p>
        </div>
      `,
    },
    {
        id: 3,
        title: "The Complete Guide to Choosing the Perfect Stone for Your Shower",
        excerpt: "Discover how to select the ideal stone material that combines beauty, durability, and safety for your shower renovation.",
        category: "remodeling-tips",
        date: "2025-02-28",
        author: "Emily Davis",
        image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/2gOE7M5Mw4F9ecfLC92pQ.png",
        slug: "choose-stone-shower",
        content: `
          <div class="blog-intro">
            <p class="lead">Your shower is the centerpiece of your bathroom, and choosing the right stone material can mean the difference between a daily spa experience and constant maintenance headaches. As Metro Detroit's stone shower specialists, we've installed hundreds of stone showers and know exactly what works in our climate.</p>
            
            <div class="author-info">
              <img src="/authors/emily-davis.jpg" alt="Emily Davis" width="80" height="80" class="author-image">
              <div>
                <p class="author-name">Emily Davis</p>
                <p class="author-title">Lead Designer, Stone Works Remodeling</p>
                <p class="post-date">February 28, 2025 · 8 min read</p>
              </div>
            </div>
          </div>
      
          <div class="content-section">
            <h2>Why Stone Matters in Your Shower</h2>
            <p>Natural stone transforms an ordinary shower into a luxurious retreat, but each type has unique characteristics that affect:</p>
            <ul>
              <li><strong>Safety:</strong> Slip resistance in wet conditions</li>
              <li><strong>Durability:</strong> Resistance to water, soap, and cleaning products</li>
              <li><strong>Maintenance:</strong> Sealing requirements and daily care</li>
              <li><strong>Aesthetics:</strong> Color, veining, and overall visual impact</li>
            </ul>
            
            <div class="comparison-chart">
              <h3>Stone Shower Materials at a Glance</h3>
              <table>
                <thead>
                  <tr>
                    <th>Stone Type</th>
                    <th>Maintenance</th>
                    <th>Slip Resistance</th>
                    <th>Best For</th>
                    <th>Cost (per sq. ft.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Marble</td>
                    <td>High</td>
                    <td>Medium</td>
                    <td>Luxury master baths</td>
                    <td>$15-$40</td>
                  </tr>
                  <tr>
                    <td>Granite</td>
                    <td>Low</td>
                    <td>Medium-High</td>
                    <td>Family bathrooms</td>
                    <td>$10-$35</td>
                  </tr>
                  <tr>
                    <td>Slate</td>
                    <td>Medium</td>
                    <td>High</td>
                    <td>Safety-focused designs</td>
                    <td>$8-$25</td>
                  </tr>
                  <tr>
                    <td>Quartz</td>
                    <td>Very Low</td>
                    <td>Medium</td>
                    <td>Modern designs</td>
                    <td>$20-$50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      
          <div class="stone-option">
            <h2>1. Marble: Timeless Elegance</h2>
            <div class="image-with-caption">
              <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-04-24+at+5.06.08+AM.webp" alt="Marble shower with veining" width="800" height="500">
              <p>Carrara marble shower with linear drain</p>
            </div>
            <p>Marble showers create instant luxury but require careful consideration:</p>
            <h3>Pros:</h3>
            <ul>
              <li>Unmatched visual appeal with unique veining</li>
              <li>Cool surface feels wonderful underfoot</li>
              <li>Increases home value significantly</li>
            </ul>
            <h3>Cons:</h3>
            <ul>
              <li>Requires sealing every 6-12 months</li>
              <li>Can etch from acidic products (vinegar, citrus cleaners)</li>
              <li>Softer surface may scratch over time</li>
            </ul>
            <div class="pro-tip">
              <h4>Designer Tip:</h4>
              <p>"For marble showers, we recommend a honed finish rather than polished - it's more slip-resistant and hides etching better."</p>
            </div>
          </div>
      
          <div class="stone-option">
            <h2>2. Granite: The Durable Workhorse</h2>
            <p>Granite offers exceptional durability for busy households:</p>
            <div class="feature-box">
              <h3>Why Michigan Homes Love Granite Showers:</h3>
              <ul>
                <li>Withstands temperature fluctuations common in our climate</li>
                <li>Resistant to most household chemicals</li>
                <li>Available in flamed finishes for excellent traction</li>
              </ul>
            </div>
            <p>Our most popular granite choices for showers:</p>
            <ol>
              <li>Absolute Black (sleek modern look)</li>
              <li>Giallo Ornamental (warm beige tones)</li>
              <li>Blue Pearl (unique shimmering effect)</li>
            </ol>
          </div>
      
          <div class="stone-option">
            <h2>3. Slate: Natural Texture for Safety</h2>
            <div class="before-after">
              <div>
                <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/gettyimages-184883326-612x612.webp" alt="Slate texture closeup" width="400" height="300">
                <p>Natural cleft texture provides grip</p>
              </div>
              <div>
                <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/Modern+Shower+Design.webp" alt="Slate shower installation" width="400" height="300">
                <p>Complete slate shower</p>
              </div>
            </div>
            <p>Slate's natural texture makes it ideal for:</p>
            <ul>
              <li>Aging-in-place designs</li>
              <li>Family bathrooms with children</li>
              <li>Outdoor showers (when properly sealed)</li>
            </ul>
            <div class="maintenance-note">
              <h3>Maintenance Note:</h3>
              <p>While slate is naturally water-resistant, we recommend sealing annually to maintain its appearance and prevent mineral buildup in the natural crevices.</p>
            </div>
          </div>
      
          <div class="stone-option">
            <h2>4. Engineered Quartz: Modern & Low-Maintenance</h2>
            <p>While not natural stone, quartz offers unique advantages:</p>
            <div class="comparison">
              <div class="pros">
                <h3>Advantages:</h3>
                <ul>
                  <li>Non-porous (never needs sealing)</li>
                  <li>Consistent color and pattern</li>
                  <li>Extremely stain-resistant</li>
                </ul>
              </div>
              <div class="cons">
                <h3>Limitations:</h3>
                <ul>
                  <li>Can discolor with prolonged UV exposure</li>
                  <li>Not as heat-resistant as natural stone</li>
                  <li>Higher initial cost</li>
                </ul>
              </div>
            </div>
            <p>Best quartz options for showers:</p>
            <ul>
              <li>Cambria Torquay (marble-like appearance)</li>
              <li>Silestone Eternal Calacatta Gold</li>
              <li>Caesarstone Statuario Maximus</li>
            </ul>
          </div>
      
          <div class="decision-guide">
            <h2>Still Unsure? Our Stone Selection Guide</h2>
            <p>Answer these questions to narrow your options:</p>
            <ol>
              <li>How often are you willing to maintain your shower?
                <ul>
                  <li>Monthly: Consider quartz</li>
                  <li>Yearly: Granite or slate</li>
                  <li>Don't mind frequent care: Marble</li>
                </ul>
              </li>
              <li>Who uses the shower?
                <ul>
                  <li>Children/elderly: Slate for safety</li>
                  <li>Busy family: Granite</li>
                  <li>Master suite: Marble or quartz</li>
                </ul>
              </li>
              <li>What's your design style?
                <ul>
                  <li>Modern: Quartz or absolute black granite</li>
                  <li>Traditional: Marble</li>
                  <li>Rustic: Slate</li>
                </ul>
              </li>
            </ol>
          </div>
      
          <div class="cta-section">
            <h3>Ready to Design Your Perfect Stone Shower?</h3>
            <p>Our design team at Stone Works Remodeling brings 15 years of Metro Detroit shower renovation experience. We'll help you:</p>
            <ul>
              <li>Select the ideal stone for your lifestyle</li>
              <li>Create a custom design that fits your space</li>
              <li>Handle all installation with precision</li>
            </ul>
            <div class="cta-buttons">
              <a href="/contact" class="primary-cta">Schedule a Free Consultation</a>
              <a href="/gallery" class="secondary-cta">View Our Shower Gallery</a>
            </div>
          </div>
      
          <div class="related-posts">
            <h3>You Might Also Like:</h3>
            <ul>
              <li><a href="/blog/shower-grout-guide">The Ultimate Guide to Shower Grout Options</a></li>
              <li><a href="/blog/steam-shower-materials">Best Materials for Steam Showers</a></li>
              <li><a href="/blog/shower-niche-design">Designing Functional Shower Niches</a></li>
            </ul>
          </div>
        `
    },

    {
        id: 4,
        title: "Why Slate is the Perfect Choice for Your Bathroom Remodel",
        excerpt: "Discover how slate's natural beauty, durability, and safety features make it ideal for luxury bathroom designs.",
        category: "stone-design",
        date: "2025-02-10",
        author: "John Doe",
        image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/w6HJzxSeslcbuk0sJgPQc.png",
        slug: "slate-bathroom-remodeling",
        content: `
          <div class="blog-intro">
            <p class="lead">In the world of natural stone for bathrooms, slate stands out as a uniquely versatile material that combines rugged durability with sophisticated aesthetics. At Stone Works Remodeling, we've seen slate transform ordinary bathrooms into stunning natural retreats that stand the test of time.</p>
            

          </div>
      
          <div class="content-section">
            <div class="image-container">
              <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/gettyimages-184883326-612x612.webp" alt="Elegant slate bathroom with natural textures" class="featured-image">
              <p class="image-caption">Slate bathroom featuring multi-colored tiles and linear drain</p>
            </div>
      
            <h2>The Unmatched Benefits of Slate in Bathrooms</h2>
            <p>While many homeowners initially consider marble or granite for their bathroom remodels, slate offers several unique advantages that make it particularly suited for wet environments:</p>
            
            <div class="benefits-grid">
              <div class="benefit-card">
                <h3>1. Natural Slip Resistance</h3>
                <p>Slate's naturally textured surface provides superior traction when wet, making it significantly safer than polished stones.</p>
                <div class="stat-box">
                  <p class="stat">72%</p>
                  <p class="stat-desc">reduction in slip accidents compared to polished marble</p>
                </div>
              </div>
              
              <div class="benefit-card">
                <h3>2. Thermal Properties</h3>
                <p>Slate retains heat beautifully, creating a warm surface underfoot - perfect for Michigan winters.</p>
                <div class="icon-box">🔥</div>
              </div>
            </div>
          </div>
      
          <div class="content-section">
            <h2>Exploring Slate Color Varieties</h2>
            <p>One of slate's most remarkable features is its natural color variation. Here are our most popular options:</p>
            
            <div class="color-palette">
              <div class="color-swatch" style="background-color: #2c3e50;">
                <span>Charcoal Black</span>
              </div>
              <div class="color-swatch" style="background-color: #34495e;">
                <span>Storm Gray</span>
              </div>
              <div class="color-swatch" style="background-color: #7f8c8d;">
                <span>Silver Gray</span>
              </div>
              <div class="color-swatch" style="background-color: #27ae60;">
                <span>Forest Green</span>
              </div>
              <div class="color-swatch" style="background-color: #d35400;">
                <span>Rustic Red</span>
              </div>
            </div>
            
            <div class="before-after">
              <div>
                <h3>Before</h3>
                <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/gettyimages-184883326-612x612.webp" alt="Bathroom before slate remodel">
                <p>Dated ceramic tile (2010 construction)</p>
              </div>
              <div>
                <h3>After</h3>
                <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/Modern+Shower+Design.webp" alt="Bathroom after slate remodel">
                <p>Multicolor slate with pebble floor</p>
              </div>
            </div>
          </div>
      
          <div class="content-section">
            <h2>Slate Maintenance: What You Need to Know</h2>
            <p>While slate is naturally durable, proper care ensures it maintains its beauty for decades:</p>
            
            <div class="maintenance-schedule">
              <h3>Recommended Care Routine</h3>
              <table>
                <thead>
                  <tr>
                    <th>Frequency</th>
                    <th>Task</th>
                    <th>Products</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Daily</td>
                    <td>Wipe down with squeegee</td>
                    <td>Water only</td>
                  </tr>
                  <tr>
                    <td>Weekly</td>
                    <td>Deep clean</td>
                    <td>pH-neutral stone cleaner</td>
                  </tr>
                  <tr>
                    <td>Annually</td>
                    <td>Resealing</td>
                    <td>Penetrating sealer</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="pro-tip">
              <h4>Pro Tip:</h4>
              <p>"For slate showers, we recommend using a color-enhancing sealer that brings out the natural hues while providing protection."</p>
            </div>
          </div>
      
          <div class="content-section">
            <h2>Slate Application Ideas</h2>
            <p>Slate's versatility allows for creative applications throughout the bathroom:</p>
            
            <div class="applications-gallery">
              <div class="application">
                <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/Modern+Shower+Design.webp" alt="Slate shower walls">
                <h3>Shower Walls</h3>
                <p>Natural cleft surface provides grip and visual interest</p>
              </div>
              <div class="application">
                <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/a2e63df686be76eeab092dd9e2f8c5ce.webp" alt="Slate bathroom floor">
                <h3>Flooring</h3>
                <p>Durable surface that hides water spots</p>
              </div>
              <div class="application">
                <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/c3ac127c739bbe15e07c725b60eb7d9b.jpg" alt="Slate accent wall">
                <h3>Accent Walls</h3>
                <p>Creates a stunning focal point</p>
              </div>
            </div>
          </div>

      
          <div class="related-content">
            <h3>Further Reading</h3>
            <ul>
              <li><a href="/blog/slate-vs-quartzite">Slate vs. Quartzite: Which is Right for Your Bathroom?</a></li>
              <li><a href="/blog/slate-maintenance">The Complete Guide to Slate Maintenance</a></li>
              <li><a href="/blog/natural-stone-trends">2025 Natural Stone Trends for Bathrooms</a></li>
            </ul>
          </div>
        `
    },
    {
        id: 5,
        title: "Building a Greener Future: Our Sustainable Stone Remodeling Practices",
        excerpt: "Discover how Stone Works Remodeling combines luxury and sustainability through innovative eco-conscious practices.",
        category: "company-updates",
        date: "2025-01-20",
        author: "Jane Smith",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        slug: "stone-work-sustainability",
        content: `
          <div class="blog-intro">
            <p class="lead">At Stone Works Remodeling, we believe luxury and environmental responsibility should go hand-in-hand. As Michigan's premier stone remodeling specialists, we've implemented comprehensive sustainability initiatives that reduce our environmental impact without compromising quality or design.</p>
            
 
      
            <div class="eco-badge">
              <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/green-eco-friendly-isolated-stamp-sticker-with-leaves-icon-vector-illustration_723710-1159.webp" alt="Eco-friendly badge" width="40">
              <span>Certified Green Remodeler Since 2020</span>
            </div>
          </div>
      
          <div class="content-section">
          
      
            <h2>Ethical Stone Sourcing: From Earth to Home</h2>
            <p>We've completely transformed our supply chain to prioritize environmental stewardship:</p>
            
            <div class="practices-grid">
              <div class="practice-card">
                <div class="practice-icon">🌱</div>
                <h3>Local Sourcing</h3>
                <p>85% of our stone comes from within 500 miles, reducing transportation emissions</p>
              </div>
              
              <div class="practice-card">
                <div class="practice-icon">⛏️</div>
                <h3>Low-Impact Quarrying</h3>
                <p>Partner quarries use water recycling systems and electric equipment</p>
              </div>
              
              <div class="practice-card">
                <div class="practice-icon">📜</div>
                <h3>Certified Suppliers</h3>
                <p>All vendors meet NSF/ANSI 332 sustainability standards</p>
              </div>
            </div>
      
            <div class="impact-statement">
              <p>"By switching to sustainable sourcing, we've reduced our carbon footprint by 42% since 2020 while maintaining the same exceptional quality."</p>
            </div>
          </div>
      
          <div class="content-section">
            <h2>Breathing New Life Into Old Stone</h2>
            <p>Our reclaimed stone program keeps beautiful materials out of landfills:</p>
            
            <div class="recycling-stats">
              <div class="stat-item">
                <div class="stat-number">15,000+</div>
                <div class="stat-label">Square feet of stone salvaged in 2024</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">75%</div>
                <div class="stat-label">Of demolition materials recycled</div>
              </div>
            </div>
      

          </div>
      
          <div class="content-section">
            <h2>Our Green Installation Process</h2>
            <p>Every step of our installation minimizes environmental impact:</p>
            
            <div class="process-timeline">
              <div class="timeline-item">
                <div class="timeline-marker">1</div>
                <div class="timeline-content">
                  <h3>Precision Templating</h3>
                  <p>Laser measurement reduces material waste by up to 30%</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">2</div>
                <div class="timeline-content">
                  <h3>Low-VOC Materials</h3>
                  <p>All adhesives and sealants meet GreenGuard Gold standards</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">3</div>
                <div class="timeline-content">
                  <h3>Electric Tools</h3>
                  <p>Our fleet uses battery-powered equipment to reduce emissions</p>
                </div>
              </div>
            </div>
      
            <div class="certification-badges">
              <img src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/green-eco-friendly-isolated-stamp-sticker-with-leaves-icon-vector-illustration_723710-1159.webp" alt="Green Seal Certified" width="120">

            </div>
          </div>
      
          <div class="content-section">
            <h2>How Homeowners Can Participate</h2>
            <p>We help clients make environmentally conscious choices:</p>
            
            <div class="eco-options">
              <div class="option-card">
                <h3>Material Selection</h3>
                <ul>
                  <li>Locally-quarried stone</li>
                  <li>Reclaimed materials</li>
                  <li>Rapidly-renewable alternatives</li>
                </ul>
              </div>
              <div class="option-card">
                <h3>Water Conservation</h3>
                <ul>
                  <li>Low-flow fixtures</li>
                  <li>Recirculating systems</li>
                  <li>Smart water monitoring</li>
                </ul>
              </div>
              <div class="option-card">
                <h3>Energy Efficiency</h3>
                <ul>
                  <li>Radiant floor heating</li>
                  <li>LED lighting solutions</li>
                  <li>Insulated stone walls</li>
                </ul>
              </div>
            </div>
          </div>
      

      
          <div class="related-content">
            <h3>Continue Your Green Journey</h3>
            <ul>
              <li><a href="/blog/eco-friendly-bathrooms">Creating the Ultimate Eco-Friendly Bathroom</a></li>
              <li><a href="/blog/water-saving-remodels">Water Conservation in Bathroom Design</a></li>
              <li><a href="/blog/healthy-home-materials">Choosing Healthier Home Materials</a></li>
            </ul>
          </div>
        `
      }
];

