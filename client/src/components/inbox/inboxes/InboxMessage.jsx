import React from 'react';
import unread from "../../../assets/images/unread.svg";

const InboxMessage = ({ message }) => {
  return (
      <div className="relative  h-[15vh] flex flex-col justify-center items-start px-5 bg-white rounded-2xl m-2 cursor-pointer hover:bg-primary  ">
        {message.Unread && (
          <div className='absolute top-0 right-0 '>
            <img src={unread} alt="" className="rounded-tr-xl" />
          </div>
        )}
        <div className='flex flex-row justify-between w-full'>
          <p className='font-semibold line-clamp-1'>{message.Sender}</p>
          <span className='font-extralight line-clamp-1'>{message.Time}</span>
        </div>
        <div className='overflow-hidden font-medium line-clamp-1' style={{ textOverflow: 'ellipsis' }}>{message.Object}</div>
<div className='overflow-hidden font-light line-clamp-1 w-full' style={{ textOverflow: 'ellipsis' }}>{message.content}</div>

      </div>
  );
}



export default InboxMessage;
