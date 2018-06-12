import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { Form, Button, Icon } from 'semantic-ui-react';

import { rotatePrinterToken } from '../../actions/printers';

const renderLoginFields = ({
  input,
  label,
  className,
  type,
  icon,
  iconPosition,
  meta: { touched, error }
}) => (
  <Form.Input
    required
    fluid
    icon={icon}
    iconPosition={iconPosition}
    placeholder={label}
    error={touched && error}
    type={type}
    {...input}
  />
);

class PrinterTokenRotate extends Component {
  tokenRotator(values) {
    this.props.rotatePrinterToken(values);
  }

  render() {
    const { handleSubmit, submitting, pristine } = this.props;

    return (
      <div>
        <Form
          onSubmit={handleSubmit(values => this.tokenRotator(values))}
          size="small"
        >
          <Field
            name="username"
            label="GCP Admin Username"
            type="text"
            icon="user"
            iconPosition="left"
            component={renderLoginFields}
          />
          <Field
            required
            name="password"
            label="GCP Admin Password"
            type="password"
            icon="lock"
            iconPosition="left"
            component={renderLoginFields}
          />
          <Button
            disabled={pristine || submitting}
            type="submit"
            fluid
            size="small"
          >
            <Icon name="refresh" />
            Rotate Token
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = { rotatePrinterToken };

PrinterTokenRotate = connect(null, mapDispatchToProps)(PrinterTokenRotate);

export default reduxForm({
  form: 'rotateToken'
})(PrinterTokenRotate);
