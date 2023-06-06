import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        method="POST"
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control required type="tel" placeholder="Phone Number" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control required placeholder="12 Main St" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control required  placeholder="6th of October"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select required defaultValue="Choose...">
              <option selected="selected">Choose...</option>
              <option>المنوفية</option>
              <option>الإسكندرية</option>
              <option>الإسماعيلية</option>
              <option>كفر الشيخ</option>
              <option>أسوان</option>
              <option>أسيوط</option>
              <option>الأقصر</option>
              <option>الوادي الجديد</option>
              <option>شمال سيناء</option>
              <option>البحيرة</option>
              <option>بني سويف</option>
              <option>بورسعيد</option>
              <option>البحر الأحمر</option>
              <option>الجيزة</option>
              <option>الدقهلية</option>
              <option>جنوب سيناء</option>
              <option>دمياط</option>
              <option>سوهاج</option>
              <option>السويس</option>
              <option>الشرقية</option>
              <option>الغربية</option>
              <option>الفيوم</option>
              <option>القاهرة</option>
              <option>القليوبية</option>
              <option>قنا</option>
              <option>مطروح</option>
              <option>الغربية</option>
              <option>المنيا</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 text-center">
          <Button variant="dark" type="submit" style={{ width: "40%" }}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default FormComponent;
