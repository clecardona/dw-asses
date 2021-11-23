export default function Photo({ contact }) {
  return (
    <div className="photo">
      <img src={contact.photo_url} alt="" />
    </div>
  );
}
