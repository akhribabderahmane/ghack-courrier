import React, { useState } from 'react';
import InboxMessage from './InboxMessage';
import attache_file from "../../../assets/images/attache_file.svg";
import gif from "../../../assets/images/gif.svg";
import emoji from "../../../assets/images/emoji.svg";
import tag from "../../../assets/images/tag.svg";
const Open = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index

  const inbox = [
    {
      Sender: "Google",
      Object: "Welcome to Google",
      content: "Dear user, \n\nWe are delighted to welcome you to Google! As one of the leading technology companies, we strive to provide innovative solutions to make your life easier. Whether you're using our search engine, email service, or cloud storage, we are committed to delivering the best possible experience.\n\nPlease explore our services and feel free to reach out if you have any questions or concerns. We look forward to serving you!\n\nSincerely, \nThe Google Team",
      Time: "19min",
      Unread: true,
    },
    {
      Sender: "Facebook",
      Object: "Stay Connected on Facebook",
      content: "Hi there, \n\nWe hope this message finds you well! At Facebook, our mission is to bring the world closer together by connecting people and fostering meaningful relationships. Whether you're sharing updates with friends and family, joining groups based on your interests, or discovering new content, we want Facebook to be a place where you feel at home.\n\nThank you for being a part of our community. Let's stay connected and continue to make Facebook a positive and inclusive space for all!\n\nBest regards, \nThe Facebook Team",
      Time: "20min",
      Unread: false,
    },
    {
      Sender: "Amazon",
      Object: "Exclusive Offers for You",
      content: "Hello, \n\nWe're excited to share some exclusive offers with you! From electronics to fashion, home goods to books, we have something for everyone. Take advantage of these deals and treat yourself or your loved ones to something special.\n\nDon't wait too long - these offers won't last forever. Start shopping now and enjoy great savings!\n\nHappy shopping, \nThe Amazon Team",
      Time: "25min",
      Unread: true,
    },
    {
      Sender: "Twitter",
      Object: "Follow Your Interests on Twitter",
      content: "Hey,Twitter is all about staying informed and connected with what matters most to you. Follow your favorite accounts, join conversations on trending topics, and discover new interests along the way.\n\nWhether you're a news junkie, sports fanatic, or pop culture enthusiast, there's something for everyone on Twitter. Join the conversation and let your voice be heard!\n\nKeep tweeting, \nThe Twitter Team",
      Time: "30min",
      Unread: true,
    },
    {
      Sender: "LinkedIn",
      Object: "Expand Your Professional Network",
      content: "Hi, \n\nLinkedIn is the premier platform for professional networking and career development. Connect with colleagues, join industry groups, and discover job opportunities tailored to your skills and experience.\n\nWhether you're looking to advance your career, build your personal brand, or simply stay informed about industry trends, LinkedIn has the tools and resources you need to succeed.\n\nLet's grow together, \nThe LinkedIn Team",
      Time: "35min",
      Unread: false,
    },
    {
      Sender: "Apple",
      Object: "Discover the Latest from Apple",
      content: "Hello, \n\nAt Apple, we're dedicated to creating products that enrich people's lives and empower them to do amazing things. From cutting-edge technology to sleek design, our products are designed with you in mind.\n\nStay up to date with the latest announcements, product launches, and software updates by following us on social media and visiting our website.\n\nInnovation awaits, \nThe Apple Team",
      Time: "40min",
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

export default Open;
