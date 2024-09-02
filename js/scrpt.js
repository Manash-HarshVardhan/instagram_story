//json data 
const userData=[
    {
        "id": 1,
        "name": "Rohit Sharma",
        "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "video": "https://www.pexels.com/video/857195/"
    },
    {
        "id": 2,
        "name": "Priya Singh",
        "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "video": "https://www.pexels.com/video/3184332/"
    },
    {
        "id": 3,
        "name": "Amit Verma",
        "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        "video": "https://www.pexels.com/video/2300961/"
    },
    {
        "id": 4,
        "name": "Sneha Patel",
        "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        "video": "https://www.pexels.com/video/2560178/"
    },
    {
        "id": 5,
        "name": "Vikram Gupta",
        "image": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        "video": "https://www.pexels.com/video/853199/"
    },
    {
        "id": 6,
        "name": "Anjali Mehta",
        "image": "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg",
        "video": "https://www.pexels.com/video/3609121/"
    },
    {
        "id": 7,
        "name": "Rajesh Kumar",
        "image": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        "video": "https://www.pexels.com/video/857390/"
    },
    {
        "id": 8,
        "name": "Neha Sharma",
        "image": "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg",
        "video": "https://www.pexels.com/video/3205606/"
    },
    {
        "id": 9,
        "name": "Saurabh Jain",
        "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        "video": "https://www.pexels.com/video/855699/"
    },
    {
        "id": 10,
        "name": "Kavita Reddy",
        "image": "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
        "video": "https://www.pexels.com/video/855456/"
    }
]
const lftbtn=document.querySelector('.instaheader__lftbtn')
const rtbtn=document.querySelector('.instaheader__rtbtn')

//scrolling
lftbtn.addEventListener('click',()=>{
    const container = document.querySelector('.instaheader');
        container.scrollLeft -= 300; 
        
})
rtbtn.addEventListener('click',()=>{
    const container = document.querySelector('.instaheader');

        container.scrollLeft +=300; 
        
        
})

