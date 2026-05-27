import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Image, InputGroup, Row, Spinner,} from "react-bootstrap";
import {FaEye, FaEyeSlash, FaArrowRight,} from "react-icons/fa";
import { useForm,} from "react-hook-form";
import {  Link, useNavigate,} from "react-router-dom";
import {toast,ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mockApi } from "../../api/service";
import "../../assets/css/signup.css";

const SignUp = () => {

  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // REGISTER USER API
  const registerUser = async (newUserData) => {
    try {

      const response = await mockApi.post(
        "/users",
        newUserData
      );

      return response.data;

    } catch (error) {

      console.error(
        "API Error:",
        error.response?.data ||
        error.message
      );

      throw error;
    }
  };

  // SUBMIT
  const handleOnSubmit = async (data) => {

    if (
      data.password !==
      data.confirmPassword
    ) {
      toast.error(
        "Passwords do not match"
      );

      return;
    }

    const newUserInfo = {
      name: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };

    try {

      setLoading(true);

      await registerUser(newUserInfo);

      toast.success(
        "Account Created Successfully 🎉"
      );

      setTimeout(() => {
        navigate("/sign-in");
      }, 1500);

    } catch (err) {

      console.error(err);

      toast.error(
        "Something went wrong ❌"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <>
      <Container fluid className="signup-container p-0">

        <Row className="g-0">

          {/* LEFT IMAGE */}
          <Col
            lg={6}
            className="signup-image"
          >
            <div className="signup-overlay"></div>
          </Col>

          {/* RIGHT FORM */}
          <Col
            xs={12}
            lg={6}
            className="signup-form-wrapper"
          >

            <Card className="signup-card">

              <Card.Body className="p-4 p-lg-5">

                {/* TITLE */}
                <div className="text-center mb-4">

                  <div className="signup-logo">
                    <Image
                      src="/favicon.svg"
                      height={40}
                    />

                    <h2 className="fw-bold mb-0">
                      Evaly
                    </h2>
                  </div>

                  <p className="text-muted small mt-2">
                    Create your account today!
                  </p>

                </div>

                {/* FORM */}
                <Form
                  onSubmit={handleSubmit(
                    handleOnSubmit
                  )}
                >

                  {/* USERNAME */}
                  <Form.Group className="mb-3">

                    <Form.Label className="fw-semibold small">
                      User Name
                    </Form.Label>

                    <Form.Control
                      placeholder="Enter username"
                      {...register(
                        "username",
                        {
                          required:
                            "Username is required",
                        }
                      )}
                    />

                    {errors.username && (
                      <small className="text-danger">
                        {
                          errors.username
                            .message
                        }
                      </small>
                    )}

                  </Form.Group>

                  {/* EMAIL */}
                  <Form.Group className="mb-3">

                    <Form.Label className="fw-semibold small">
                      Email
                    </Form.Label>

                    <InputGroup>

                      <InputGroup.Text>
                        📧
                      </InputGroup.Text>

                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register(
                          "email",
                          {
                            required:
                              "Email is required",

                            pattern: {
                              value:
                                /^\S+@\S+$/i,

                              message:
                                "Invalid email",
                            },
                          }
                        )}
                      />

                    </InputGroup>

                    {errors.email && (
                      <small className="text-danger">
                        {
                          errors.email
                            .message
                        }
                      </small>
                    )}

                  </Form.Group>

                  {/* PHONE */}
                  <Form.Group className="mb-3">

                    <Form.Label className="fw-semibold small">
                      Phone
                    </Form.Label>

                    <InputGroup>

                      <InputGroup.Text>
                        📱
                      </InputGroup.Text>

                      <Form.Control
                        type="tel"
                        placeholder="10 digit number"
                        {...register(
                          "phone",
                          {
                            required:
                              "Phone is required",

                            pattern: {
                              value:
                                /^[0-9]{10}$/,

                              message:
                                "Enter valid 10 digit number",
                            },
                          }
                        )}
                      />

                    </InputGroup>

                    {errors.phone && (
                      <small className="text-danger">
                        {
                          errors.phone
                            .message
                        }
                      </small>
                    )}

                  </Form.Group>

                  {/* PASSWORD */}
                  <Form.Group className="mb-3">

                    <Form.Label className="fw-semibold small">
                      Password
                    </Form.Label>

                    <InputGroup>

                      <InputGroup.Text>
                        🔒
                      </InputGroup.Text>

                      <Form.Control
                        type={
                          showPass
                            ? "text"
                            : "password"
                        }
                        placeholder="Enter password"
                        {...register(
                          "password",
                          {
                            required:
                              "Password is required",

                            minLength: {
                              value: 6,

                              message:
                                "Minimum 6 characters required",
                            },
                          }
                        )}
                      />

                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          setShowPass(
                            !showPass
                          )
                        }
                      >
                        {showPass ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </Button>

                    </InputGroup>

                    {errors.password && (
                      <small className="text-danger">
                        {
                          errors.password
                            .message
                        }
                      </small>
                    )}

                  </Form.Group>

                  {/* CONFIRM PASSWORD */}
                  <Form.Group className="mb-3">

                    <Form.Label className="fw-semibold small">
                      Confirm Password
                    </Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      {...register(
                        "confirmPassword",
                        {
                          required:
                            "Confirm Password is required",
                        }
                      )}
                    />

                    {errors.confirmPassword && (
                      <small className="text-danger">
                        {
                          errors
                            .confirmPassword
                            .message
                        }
                      </small>
                    )}

                  </Form.Group>

                  {/* TERMS */}
                  <Form.Check
                    type="checkbox"
                    className="mb-4"
                    required
                    label={
                      <small>
                        I agree to{" "}

                        <Link
                          to="#"
                          className="text-primary"
                        >
                          Terms
                        </Link>{" "}
                        and{" "}

                        <Link
                          to="#"
                          className="text-primary"
                        >
                          Privacy Policy
                        </Link>
                      </small>
                    }
                  />

                  {/* SUBMIT */}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 fw-semibold d-flex justify-content-center align-items-center gap-2 mb-3 signup-submit-btn"
                    disabled={loading}
                  >

                    {loading ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                        />

                        Creating...
                      </>
                    ) : (
                      <>
                        Create Account
                        <FaArrowRight />
                      </>
                    )}

                  </Button>

                  {/* LOGIN */}
                  <p className="text-center small mb-0">

                    Already have an account?{" "}

                    <Link
                      to="/login"
                      className="text-primary fw-semibold text-decoration-none"
                    >
                      Sign In
                    </Link>

                  </p>

                </Form>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
};

export default SignUp;