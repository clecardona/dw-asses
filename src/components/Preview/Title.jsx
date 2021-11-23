export default function Title({ contact, role }) {
  return (
    <div className="title">
      <h1 className="name">
        {contact.firstname} {contact.middlename} {contact.lastname}
      </h1>
      <h2 className="role">{role}</h2>
    </div>
  );
}
