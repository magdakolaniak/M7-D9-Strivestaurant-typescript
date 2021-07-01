import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import allDishes from '../data/menu.json';
import { useState } from 'react';
import DishComments from './DishComments';
import upperName from '../helpers/lib';
import { OneDish } from '../components/types/interface';

interface HomeComponentProps {
  title: string;
}

const Home = ({ title }: HomeComponentProps) => {
  const [selected, setSelected] = useState<OneDish | null>(null);

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1>Welcome to {upperName(title)}!</h1>
          <h3 className="text-center mb-4">We can only cook pasta...</h3>
          <Carousel>
            {allDishes.map((dish: OneDish, i) => (
              <Carousel.Item
                key={dish.id}
                onClick={() => {
                  setSelected(dish);
                }}
              >
                <img
                  className="d-block w-100"
                  src={dish.image}
                  alt={'slide number ' + (i + 1)}
                />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <DishComments selectedPasta={selected} />
      </Row>
      <Button variant="danger"></Button>
    </Container>
  );
};

export default Home;
