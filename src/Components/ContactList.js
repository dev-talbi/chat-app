import React from "react";
import Contact from "./Contact";

const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    connected: false
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    connected: true
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    connected: true
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    connected: false
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    connected: true
  }
];

const ContactList = () => (
  <div>
    {users.map((user) => (
      <Contact
        key={user.name}
        name={user.name}
        avatar={user.avatar}
        connected={user.connected}
      />
    ))}
  </div>
);

export default ContactList;
