import React, { Component } from "react";
import { Field, formValues, reduxForm } from "redux-form";
class StreamForm extends Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  renderError({ error, touched }) {
    const err = "";
    if (error && touched)
      return (
        <div className="ui error message" style={{ color: "red" }}>
          <div className="header">{error}</div>
        </div>
      );

    return err;
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        {" "}
        <label>{label}</label>
        <input autoComplete="off" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />

        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
const formWrapped = reduxForm({
  // wrapping with redux-forms
  form: "streamForm ",
  validate,
})(StreamForm);

export default formWrapped;
