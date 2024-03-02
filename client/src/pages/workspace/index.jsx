import React from "react";
import Searchbar from "../../components/global/searchbar";
import { Routes, Route } from "react-router-dom";
import Inbox from "../inbox";
import Calender from "../calender";
import Contact from "../contacts";
import Analytics from "../analytics";
import Knowledg from "../knowledg";
import Inboxes from "../../components/inbox/scenes/Inboxes";
import Starred from "../../components/inbox/scenes/Starred";
import Draft from "../../components/inbox/scenes/Draft";
import Sent from "../../components/inbox/scenes/Sent";
import Spam from "../../components/inbox/inboxes/Spam";
import Archived from "../../components/inbox/inboxes/Archived";
import Snoozed from "../../components/inbox/inboxes/Snoozed";
import Trash from "../../components/inbox/inboxes/Trash";
import Open from "../../components/inbox/inboxes/Open";
 

const Workspace = () => {
  return (
    <div>
      <Searchbar />
      <div>
        <Routes>
          <Route path="inbox" element={<Inbox />}>
            <Route  path="inboxes" element={<Inboxes />}>
               <Route index element={<Open />} />
               <Route path="archived" element={<Archived />} />
               <Route path="snoozed" element={<Snoozed />}  />
               <Route path="spam" element={<Spam />}  />
               <Route path="trash" element={<Trash />}  />
            </Route>
            <Route path="starred" element={<Starred />} />
            <Route path="draft" element={<Draft />} />
            <Route path="sent" element={<Sent />} />
          </Route>
          <Route path="calender" element={<Calender />} />
          <Route path="contact" element={<Contact />} />
          <Route path="stats" element={<Analytics />} />
          <Route path="knowledg" element={<Knowledg />} />
        </Routes>
      </div>
    </div>
  );
};

export default Workspace;
