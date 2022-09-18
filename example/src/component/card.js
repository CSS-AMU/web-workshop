import Card from 'react-bootstrap/Card';

const CardComp = (props) => {
  const { data } = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.sprites.other.home.front_default} />
      <Card.Body>
        <Card.Title>{data.forms[0].name}</Card.Title>
        <Card.Text>
          <h6>{data.types[0].type.name} type pokemon</h6>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComp;