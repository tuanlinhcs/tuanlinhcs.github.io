export default function ButtonPrimaryNewTabLink({ name, link }) {
  const handleResumeButtonCLick = () => {
    window.open(link, "_blank");
  };
  return (
    <div className="btn-primary" onClick={handleResumeButtonCLick}>
      {name}
    </div>
  );
}
