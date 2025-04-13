import React from 'react'; 
import { useEffect, useState } from 'react';
import './Dashboard.scss';

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('contactMessages')) || [];
    setContacts(saved);
  }, []);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedData(contacts[index]);
  };

  const handleChange = (e) => {
    setEditedData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    const updated = [...contacts];
    updated[editingIndex] = editedData;
    localStorage.setItem('contactMessages', JSON.stringify(updated));
    setContacts(updated);
    setEditingIndex(null);
    setEditedData({});
  };

  const handleDelete = (index) => {
    const updated = contacts.filter((_, i) => i !== index);
    localStorage.setItem('contactMessages', JSON.stringify(updated));
    setContacts(updated);
    setEditingIndex(null);
  };

  return (
    <div className="dashboard">
      <h1>Contact Submissions</h1>
      {contacts.length === 0 ? (
        <p>No messages submitted yet.</p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact, index) => (
            <li key={index} className="contact-item">
              {editingIndex === index ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={editedData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    name="country"
                    value={editedData.country}
                    onChange={handleChange}
                    placeholder="Country"
                  />
                  <input
                    type="text"
                    name="address"
                    value={editedData.address}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                  <textarea
                    name="message"
                    value={editedData.message}
                    onChange={handleChange}
                    placeholder="Message"
                  />
                  <button onClick={handleSave}>Save</button>
                </div>
              ) : (
                <div className="contact-info">
                  <p><strong>Name:</strong> {contact.name}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Phone:</strong> {contact.phone}</p>
                  <p><strong>Country:</strong> {contact.country}</p>
                  <p><strong>Address:</strong> {contact.address}</p>
                  <p><strong>Message:</strong> {contact.message}</p>
                  <div className="buttons">
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
