import { useRouter } from "next/router";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Detail = () => {
  const router = useRouter();
  const { id, details } = router.query;

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name:{id}</CardTitle>
          <CardSubtitle>Address:{details}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Detail;
