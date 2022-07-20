const Adress = () => {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4087496762504!2d-51.2012965!3d-29.9964175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1658260155094!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  return (
    <div className="adress">
      <h1>Endereço dbc</h1>
      <div dangerouslySetInnerHTML={{ __html: iframe }} />
    </div>
  );
};

export default Adress;
