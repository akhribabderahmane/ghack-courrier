import React, { useState } from 'react';
import InboxMessage from './InboxMessage';
import attache_file from "../../../assets/images/attache_file.svg";
import gif from "../../../assets/images/gif.svg";
import emoji from "../../../assets/images/emoji.svg";
import tag from "../../../assets/images/tag.svg";
const Archived = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index

  const inbox = [
    {
      Sender: "Microsoft",
      Object: "Exclusive Invitation",
      content: "Hello, \n\nYou've been selected for an exclusive event hosted by Microsoft. Join us for an exciting day filled with product demonstrations, workshops, and networking opportunities. Don't miss out on this unique experience!\n\nSave the date and register now to secure your spot.\n\nWe look forward to seeing you there!\n\nBest regards, \nThe Microsoft Team",
      Time: "1 day",
      Unread: true,
    },
    {
      Sender: "Netflix",
      Object: "New Releases",
      content: "Hi, \n\nGet ready for some binge-worthy entertainment! We've just added a variety of new releases to our platform, including movies, TV shows, and documentaries.\n\nGrab your popcorn, cozy up on the couch, and start streaming now!\n\nHappy watching, \nThe Netflix Team",
      Time: "1 week",
      Unread: true,
    },
    {
      Sender: "Uber",
      Object: "Special Promotion",
      content: "Hey, \n\nAs a valued customer, we're excited to offer you a special promotion on your next ride with Uber. Enjoy discounted fares and exclusive perks when you ride with us.\n\nDon't miss this opportunity to save on transportation and explore your city hassle-free!\n\nRide on, \nThe Uber Team",
      Time: "2 months",
      Unread: false,
    },
    {
      Sender: "Airbnb",
      Object: "Plan Your Next Getaway",
      content: "Hello, \n\nLooking to escape the everyday? Whether you're craving a beach retreat, mountain adventure, or city escape, Airbnb has the perfect accommodation for your next getaway.\n\nBrowse our listings, book your stay, and start planning your dream vacation today!\n\nHappy travels, \nThe Airbnb Team",
      Time: "2 months",
      Unread: true,
    },
    {
      Sender: "Spotify",
      Object: "Discover New Music",
      content: "Hi there, \n\nDiscover your next favorite song with personalized recommendations from Spotify. Our curated playlists, artist radios, and Discover Weekly feature make it easy to find music you love.\n\nStart listening now and uncover hidden gems waiting to be heard!\n\nHappy listening, \nThe Spotify Team",
      Time: "3 months",
      Unread: true,
    }
    // Add more inbox items as needed
];



  const handleShowMessageContent = (index) => {
    console.log(index);
    setCurrentIndex(index); // Update the current index when a message is clicked
  };

  return (
    <div className='flex flex-row bg-light-grey'>
      <div className='w-[200px] h-screen  flex  flex-col py-4  overflow-hidden' id='part1'>
        {inbox.map((message, index) => (
          <div key={index} onClick={() => handleShowMessageContent(index)}>
            <InboxMessage message={message} />
          </div>
        ))}
      </div>
      <div id='show-message-content' className=' flex-1 h-screen flex flex-col justify-start items-center '>
        {/* Show the content of the selected message */}
        {currentIndex !== null && (
          <div className='flex flex-col  p-6'>
           <div className='text-3xl font-bold mb-2 pl-5'> <p> {inbox[currentIndex].Sender}</p></div>
           <div className='h-[70vh] w-[60vw] bg-white  rounded-xl p-8 flex flex-col justify-around'>
           <p className='text-xl font-bold text-darkBlue'>Object: {inbox[currentIndex].Object}</p>
            <p className='text-xl font-light'> {inbox[currentIndex].content}</p>
            <p className='text-darkBlue'>il y a {inbox[currentIndex].Time}</p>
           </div>
           <div className='h-[7vh] w-[60vw] bg-white  p-4 rounded-3xl mt-4  flex flex-row justify-start items-center'>
            <input type="text" placeholder='Add a comment or add others with @ ' className='outline-none w-full' />
             <div className="flex flex-row"><button>
                      <img
                        src={attache_file}
                        alt="Attach File"
                      />
                    </button>
                    <button>
                      <img src={tag} alt="Tag" className="mx-2" />
                    </button>
                    <button>
                      <img src={emoji} alt="Emoji" className="mx-2" />
                    </button>
                    <button>
                      <img src={gif} alt="GIF" className="mx-2" />
                    </button></div>
            </div>
           
          </div>
        )}
      </div>
    </div>
  );
}

export default Archived;
