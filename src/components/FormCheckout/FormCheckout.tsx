import { Formik } from "formik";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import "./FormCheckout.scss";

const FormCheckout: React.FC = () => (
  <Formik
    initialValues={{
      name: "",
      surname: "",
      adress: "",
      phone: "",
    }}
    onSubmit={() => {}}
  >
    {props => (
      <form
        onSubmit={props.handleSubmit}
        className="form-checkout"
        noValidate
        autoComplete="off"
      >
        <Input
          value={props.values.name}
          name="name"
          onChange={props.handleChange}
          placeholder="NAME"
          inputProps={{ "aria-label": "name" }}
        />
        <Input
          value={props.values.surname}
          name="surname"
          onChange={props.handleChange}
          placeholder="SURNAME"
          inputProps={{ "aria-label": "surname" }}
        />
        <Input
          value={props.values.adress}
          name="adress"
          onChange={props.handleChange}
          placeholder="ADRESS"
          inputProps={{ "aria-label": "adress" }}
        />
        <Input
          value={props.values.phone}
          name="phone"
          onChange={props.handleChange}
          placeholder="NAME"
          inputProps={{ "aria-label": "phone" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Order
        </Button>
      </form>
    )}
  </Formik>
);

export default FormCheckout;
