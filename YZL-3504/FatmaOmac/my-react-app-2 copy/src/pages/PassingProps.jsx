export function PassingProps() {
  return (
    <>
      <h1>Passing props to a component - Bir komponente özellik geçirmek</h1>
      <Button btnClass="btn-sm" textContent="login" />
      <Button btnClass="btn-lg" textContent="buy" />
      <Button btnClass="btn-lg" textContent="ekle" />

      <h2>Kişi kartları</h2>
      <ul className="cardGrid">
        <Card
          title="Kart 1"
          description="Açıklama 1"
          src="https://i.imgur.com/MK3eW3Am.jpg"
          borderColor="pink"
        />
        <Card
          title="Kart 2"
          description="Açıklama 2"
          src="https://i.imgur.com/lICfvbD.jpg"
          borderColor="orange"
        />
        <Card
          title="Kart 3"
          description="Açıklama 3"
          src="https://i.imgur.com/MK3eW3Am.jpg"
          borderColor="orange"
        />
        <Card
          title="Kart 4"
          description="Açıklama 4"
          src="https://i.imgur.com/lICfvbD.jpg"
          borderColor="blue"
        />
      </ul>

      <h2>Etiketler Listesi</h2>

      <Label textContent="Etiket 1" bgColor="red"/>
      <Label textContent="Etiket 2" bgColor="blue"/>
    </>
  );
}

function Button(props) {
  const textContent = props.textContent;
  const btnClass = props.btnClass;
  return (
    <button className={btnClass} type="button">
      {textContent}
    </button>
  );
}

function Card(props) {
  const cardStyle = { borderColor: props.borderColor };

  return (
    <li className="card" style={cardStyle}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img className="avatar" src={props.src} alt={props.description} />
    </li>
  );
}

function Label(props) {
    const iconColor = { backgroundColor:props.bgColor }
  return (
    <a href="#" className="label">
      <span className="icon" style={iconColor}></span>
      {props.textContent}
    </a>
  );
}
