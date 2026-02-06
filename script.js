let speakers=[
    {
        profile:"src='images/sarah.jpg'",
        name: "Dr. Sarah Chen",
        title:"Chief AI Researcher",
        company:"TechVision Labs",
        bio:"Dr. Chen is a leading expert in machine learning with over 15 years of experience. She has published more than 50 papers on neural networks and AI ethics.",
        topic:"The Future of Ethical AI Development",
        expertise:"Machine Learning & AI Ethics",
        website:"sarahchen.tech",
        twitter:"@sarahchen_ai",
        linked:"linkedin.com/in/sarahchen",
    },
    {
        profile:"src='images/marcus.jpg'",
        name: "Marcus Rodriguez",
        title:"Founder & CEO",
        company:"GreenTech Innovations",
        bio:"Marcus is a serial entrepreneur passionate about sustainable technology. He has founded three successful startups focused on clean energy solutions.",
        topic:"Building Sustainable Startups in a Digital Age",
        expertise:"Entrepreneurship & Sustainability ",
        website:"greentechinnovations.com ",
        twitter:"@marcusrod",
        linked:"linkedin.com/in/marcusrodriguez",
    },
    {
        profile:"src='images/amara.jpg'",
        name: "Dr. Amara Okafor ",
        title:"Director of Cybersecurity ",
        company:"SecureNet Solutions",
        bio:"Dr. Okafor specializes in cybersecurity and threat intelligence. She advises governments and Fortune 500 companies on digital security strategies.",
        topic:"Protecting Your Digital Assets: Modern Cybersecurity Strategies",
        expertise:"Cybersecurity & Threat Intelligence",
        website:"amaraokafor.com",
        twitter:"@amara_security",
        linked:"linkedin.com/in/amaraokafor",
    },
    {
        profile:"src='images/james.jpg'",
        name: "James Patterson",
        title:"Head of Product Design",
        company:"DesignFirst Studio",
        bio:"James has led design teams at major tech companies for over a decade. His work has won multiple design awards and shaped user experiences for millions.",
        topic:"HumanCentered Design in the Age of AI",
        expertise:"UX Design & Product Strategy",
        website:"jpattersondesign.com",
        twitter:"@jpatterson_ux",
        linked:"linkedin.com/in/jamespatterson",
    },
    {
        profile:"src='images/priya.jpg'",
        name: "Dr. Priya Sharma",
        title:"VP of Data Science",
        company:"Analytics Corp",
        bio:"Dr. Sharma leads data science initiatives that drive business transformation. She's known for making complex data accessible and actionable.",
        topic:"Data-Driven Decision Making: From Insights to Impact",
        expertise:"Data Science & Business Analytics",
        website:"priyasharmaanalytics.com",
        twitter:"@priya_data",
        linked:"linkedin.com/in/priyasharma",
    },
    {
        profile:"src='images/alex.jpg'",
        name: "Alex Thompson",
        title:"Blockchain Architect",
        company:"CryptoChain Technologies",
        bio:"Alex is a pioneer in blockchain technology and decentralize d systems. He's contributed to several major blockchain protocols and advises on Web3 strategies.",
        topic:"Blockchain Beyond Cryptocurrency: RealWorld Applications",
        expertise:"Blockchain & Web3",
        website:"alexthompson.io",
        twitter:"@alexthompson_bc",
        linked:"linkedin.com/in/alexthompson",
    },
    {
        profile:"src='images/lisa.jpg'",
        name: "Lisa Wang",
        title:"Chief Marketing Officer",
        company:"BrandSpark Agency",
        bio:"Lisa has revolutionize d digital marketing strategies for global brands. Her campaigns have generated billions in revenue and won numerous industry awards.",
        topic:"Marketing in 2026: Authenticity Meets Automation",
        expertise:"Digital Marketing & Brand Strategy",
        website:"lisawang.co",
        twitter:"@lisawang_mktg",
        linked:"linkedin.com/in/lisawang",
    },
    {
        profile:"src='images/foster.jpg'",
        name: "Dr. Michael Foster",
        title:"Quantum Computing Researcher",
        company:"Quantum Dynamics Institute",
        bio:"Dr. Foster is at the forefront of quantum computing research. His work on quantum algorithms has potential applications in cryptography and optimization.",
        topic:"Quantum Computing: The Next Computing Revolution",
        expertise:"Quantum Computing & Physics",
        website:"michaelfosterquantum.edu",
        twitter:"@mfoster_quantum",
        linked:"linkedin.com/in/michaelfoster",
    },
];
html='';
content=document.getElementById('container');
for (let i = 0; i < speakers.length; i++){
        const speaker = speakers[i];
        html += ` 
        <div class="speaker-card">
            <img class="profile" ${speaker.profile} alt="${speaker.name}">
            <div class="info">
                <div class="name">${speaker.name}</div>
                <div class="title">${speaker.title}</div>
                <div class="company">${speaker.company}</div>
                <div class="expertise">Expertise:</div>
                <div>${speaker.expertise}</div>
            </div>
            <div class="speaker-body">
                <div class="topic">Topic: ${speaker.topic}</div>
                <div class="bio">${speaker.bio}</div>
            </div>
            <div class="links">
                <a href="https://youtu.be/Bl7AG1DpSDQ?si=bDuHUXSTERVZWpKv" target="_blank">Website</a>
                <a href="https://youtu.be/Bl7AG1DpSDQ?si=bDuHUXSTERVZWpKv" target="_blank">Twitter</a>
                <a href="https://youtu.be/Bl7AG1DpSDQ?si=bDuHUXSTERVZWpKv" target="_blank">LinkedIn</a>
            </div>
        </div>`;
};
content.innerHTML=html;
