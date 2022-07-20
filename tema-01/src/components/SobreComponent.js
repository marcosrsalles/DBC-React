const Sobre = () => {
  const iframe =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/h9HiHkEar-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  return (
    <div className="sobre">
      <h1>Sobre a DBC</h1>
      <div dangerouslySetInnerHTML={{ __html: iframe }} />
    </div>
  );
};
export default Sobre;
