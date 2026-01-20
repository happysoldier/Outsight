// People data for the organization
import adilKhanImage from '../assets/about-meeting.png';
import senerCavgaImage from '../assets/sener-cavga.jpg';

export const peopleData = {
    'adil-khan': {
        id: 'adil-khan',
        name: "Adil Khan",
        title: "Partner, Chicago",
        location: "Chicago, Illinois",
        email: "adil.khan@outsight.com.tr",
        phone: "+1 312 555 0100",
        image: adilKhanImage,
        bio: [
            "Adil Khan is a Partner in Outsight's Chicago office and leads the firm's Consumer Goods and Retail practice in North America. He specializes in growth strategy, digital transformation, and operational excellence across the consumer sector.",
            "With over 15 years of experience, Adil has advised leading global brands on market entry strategies, organizational redesign, and performance improvement initiatives. His work spans diverse geographies including North America, Europe, and Asia Pacific.",
            "Prior to joining Outsight, Adil held senior strategy roles at Fortune 500 companies where he led large-scale transformation programs. He has deep expertise in e-commerce, omnichannel retail, and consumer analytics.",
            "Adil holds an MBA from Harvard Business School and a Bachelor's degree in Engineering from MIT. He is a frequent speaker at industry conferences on topics related to consumer behavior and digital disruption."
        ],
        expertise: [
            "Consumer Goods & Retail",
            "Growth Strategy",
            "Digital Transformation",
            "Operational Excellence",
            "E-commerce & Omnichannel"
        ],
        industries: [
            "Financial Services",
            "Consumer Goods",
            "Retail"
        ]
    },
    'sener-cavga': {
        id: 'sener-cavga',
        name: "Şener Çavga",
        title: "Direktör, Istanbul",
        location: "Istanbul, Turkey",
        email: "sener.cavga@outsight.com.tr",
        phone: "+90 212 555 0100",
        image: senerCavgaImage,
        bio: [
            "Şener Çavga is a Partner in Outsight's Istanbul office and leads the firm's Consumer Goods and Retail practice in Turkey. He specializes in growth strategy, digital transformation, and operational excellence across the consumer sector.",
            "With over 15 years of experience, Şener has advised leading global brands on market entry strategies, organizational redesign, and performance improvement initiatives. His work spans diverse geographies including Turkey, Europe, and the Middle East.",
            "Prior to joining Outsight, Şener held senior strategy roles at Fortune 500 companies where he led large-scale transformation programs. He has deep expertise in e-commerce, omnichannel retail, and consumer analytics.",
            "Şener holds an MBA from Harvard Business School and a Bachelor's degree in Engineering from MIT. He is a frequent speaker at industry conferences on topics related to consumer behavior and digital disruption."
        ],
        expertise: [
            "Dijital Dönüşüm",
            "İş Zekası"
        ],
        industries: [
            "Gıda",
            "İçecek",
            "Bilgisayar"
        ]
    }
};

// Get all people as array for listing
export const getAllPeople = () => Object.values(peopleData);

// Get person by ID
export const getPersonById = (id) => peopleData[id];
