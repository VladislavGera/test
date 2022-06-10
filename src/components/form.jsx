import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

function Input({ value, updateText, handleAction }) {
  return (
    <Form className="d-flex">
      <FormControl
        value={value}
        onChange={(e) => updateText(e.target.value)}
        type="text"
        placeholder="episode name"
        className="me-2"
      />
      <Button className="bg-primary text-white" onClick={handleAction} variant="info">
        Add
      </Button>
    </Form>
  );
}

export default Input;
