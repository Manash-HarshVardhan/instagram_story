//instagram 3video script

//json data 
const userData=[
    {
        "id":1,
        "name": "Rohit",
        "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "video": "https://videos.pexels.com/video-files/5787615/5787615-uhd_1440_2458_25fps.mp4"
    },
    {
        "id": 2,
        "name": "Priya",
        "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "video": "https://videos.pexels.com/video-files/5787615/5787615-uhd_1440_2458_25fps.mp4"
    },
    {
        "id": 3,
        "name": "Amit",
        "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        "video": "https://videos.pexels.com/video-files/5614746/5614746-hd_1080_1920_30fps.mp4"
    },
    {
        "id": 4,
        "name": "Sneha",
        "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        "video": "https://videos.pexels.com/video-files/4625522/4625522-uhd_1440_2560_30fps.mp4"
    },
    {
        "id": 5,
        "name": "Vikram",
        "image": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        "video": "https://videos.pexels.com/video-files/7488188/7488188-hd_1080_1920_30fps.mp4"
    },
    {
        "id": 6,
        "name": "Anjali",
        "image": "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg",
        "video": "https://videos.pexels.com/video-files/8246859/8246859-hd_1080_1920_25fps.mp4"
    },
    {
        "id": 7,
        "name": "Rajesh",
        "image": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        "video": "https://videos.pexels.com/video-files/6586063/6586063-uhd_1440_2560_30fps.mp4"
    },
    {
        "id": 8,
        "name": "Neha",
        "image": "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg",
        "video": "https://videos.pexels.com/video-files/7677015/7677015-hd_1080_1920_25fps.mp4"
    },
    {
        "id": 9,
        "name": "Saurabh",
        "image": "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
        "video": "https://videos.pexels.com/video-files/5614728/5614728-hd_1080_1920_30fps.mp4"
    },
    {
        "id": 10,
        "name": "Kavita",
        "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        "video": "https://videos.pexels.com/video-files/4625676/4625676-uhd_1440_2560_30fps.mp4"
    }
]
const lftbtn=document.querySelector('.instaheader__lftbtn')
const rtbtn=document.querySelector('.instaheader__rtbtn')
const storiesContainer=document.querySelector('.instaheader')
const storyPg=document.querySelector('.storypg')


//scrolling
lftbtn.addEventListener('click',()=>{
    const container = document.querySelector('.instaheader');
        container.scrollLeft -= 300; 
})

rtbtn.addEventListener('click',()=>{
    const container = document.querySelector('.instaheader');

        container.scrollLeft +=300;    
})

userData.forEach(field=>{

    let imageDiv=document.createElement('div')
    imageDiv.className='instaheader__image'
    let imgtag=document.createElement('img')
    imgtag.src=field.image
    imgtag.id=field.id;

    let username=document.createElement('p')
    username.textContent=field.name
    imageDiv.appendChild(imgtag)
    imageDiv.appendChild(username)
    storiesContainer.appendChild(imageDiv)
})
//videoes handling
storiesContainer.addEventListener('click',(e)=>{
   
    const clickedId = parseInt(e.target.id);
    
    e.target.style.borderColor='gray';
    const user = userData.find(user => user.id === clickedId);
    let currVidIndex = userData.findIndex(user => user.id === clickedId);

    if (user) {
        storyPg.style.display = 'flex';
        storyPg.style.gap='10px'
        storiesContainer.style.display = 'none';

        let vidContainer=document.createElement('div')
        vidContainer.style.position='relative'

        let video = document.createElement("video");
        video.className = "storypg__uservid";
        video.width = 360;
        video.height = 540;
        video.controls = true;

        let source = document.createElement("source");
        source.src = user.video; 
        source.type = "video/mp4";
        video.appendChild(source);
////////////  lft video container
        let lftvidContainer=document.createElement('div')
        lftvidContainer.style.position='relative'
        let lftvideo = document.createElement("video");
        lftvideo.className = "storypg__uservid";
        lftvideo.width = 240;
        lftvideo.height = 360;
        lftvideo.controls = true;

        let lftsource = document.createElement("source");
        lftsource.src = userData[currVidIndex-1].video; 
        lftsource.type = "video/mp4";
        lftvideo.appendChild(lftsource);
        lftvidContainer.appendChild(lftvideo)

        //////////  rtvideocontainer

        let rtvidContainer=document.createElement('div')
        rtvidContainer.style.position='relative'

        let rtvideo = document.createElement("video");
        rtvideo.className = "storypg__uservid";
        rtvideo.width = 240;
        rtvideo.height = 360;
        rtvideo.controls = true;

        let rtsource = document.createElement("source");
        rtsource.src = userData[currVidIndex+1].video; 
        rtsource.type = "video/mp4";
        rtvideo.appendChild(rtsource);

        rtvidContainer.appendChild(rtvideo)

        //////
        let nxtbtn=document.createElement('button')
        nxtbtn.innerHTML=">"
        nxtbtn.style.width='30px'
        nxtbtn.style.height='30px'
        nxtbtn.style.borderRadius='50%'
        nxtbtn.style.position='absolute'
        nxtbtn.style.top='50%'
        nxtbtn.style.right='-40px'

        let prevbtn=document.createElement('button')
        prevbtn.innerHTML="<"
        prevbtn.style.width='30px'
        prevbtn.style.height='30px'
        prevbtn.style.borderRadius='50%'
        prevbtn.style.position='absolute'
        prevbtn.style.top='50%'
        prevbtn.style.left='-40px'
        
        vidContainer.appendChild(video)
        
        lftvidContainer.appendChild(prevbtn)
        rtvidContainer.appendChild(nxtbtn)

        let cross=document.createElement('span')
        cross.textContent='X'
        cross.className='storypg__cross'

        let instalogo=document.createElement('img')
        instalogo.src='images/instaWhite.png'
        instalogo.className='storypg__instalogo'

        storyPg.appendChild(cross)
        storyPg.appendChild(instalogo)
        storyPg.appendChild(lftvidContainer)
        storyPg.appendChild(vidContainer);
        storyPg.appendChild(rtvidContainer)
        video.play()
        

        cross.addEventListener('click',()=>{
            storyPg.innerHTML=''
            storyPg.style.display = 'none';
            storiesContainer.style.display = 'flex';
        })

        function updateVid(index){
            const newuser=userData[index]
            if(newuser){
                source.src=newuser.video;
                lftsource.src = userData[currVidIndex-1].video; 
                rtsource.src = userData[currVidIndex+1].video; 
                video.load()
                video.play()
                lftvideo.load()
                rtvideo.load()
            }
        }
        
        nxtbtn.addEventListener('click',()=>{
            currVidIndex=(currVidIndex+1) % userData.length
            updateVid(currVidIndex)
            const newSelectedElement = document.getElementById(userData[currVidIndex].id);
            newSelectedElement.style.borderColor = 'gray';
        })

        prevbtn.addEventListener('click',()=>{
            currVidIndex=(currVidIndex-1 + userData.length) % userData.length
            updateVid(currVidIndex)
            const newSelectedElement = document.getElementById(userData[currVidIndex].id);
            newSelectedElement.style.borderColor = 'gray';
        })
    }
    
})

