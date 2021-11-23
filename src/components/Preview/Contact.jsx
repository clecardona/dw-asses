export default function Contact({ contact }) {
  return (
    <div className="contact">
      <h4 className="address">{contact.address}</h4>
      <h4 className="postcode ">
        {contact.postcode} <strong>{contact.city}</strong>
      </h4>
      <h4 className="email">{contact.email}</h4>
      <h4 className="mobile">{contact.mobile}</h4>
      <h4 className="linkedin">{contact.linkedin}</h4>
    </div>
  );
}
