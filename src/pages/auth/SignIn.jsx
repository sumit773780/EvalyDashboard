import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button,Card,Form,InputGroup,Spinner,Container,Row,Col,Image,} from "react-bootstrap";
import {
  FaApple,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mockApi } from "../../api/service";
import "../../assets/css/signin.css";


const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // GET USERS
  const loginUser = async () => {
    try {
      const response = await mockApi.get("/users");
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  // LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const users = await loginUser();

      const user = users.find(
        (u) =>
          u.email === email &&
          u.password === password
      );

      if (!user) {
        toast.error("Invalid email or password ❌");
        return;
      }

      toast.success("Login successful 🎉");

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container fluid className="signin-container p-0">
        <Row className="g-0">
          {/* LEFT SIDE FORM */}
          <Col lg={5} className="signin-left">
            <Card className="signin-card">
              <Card.Body className="p-4 p-lg-5">
                {/* TITLE */}
                <div className="text-center mb-4">
                  <div className="signin-logo">
                    <Image
                      src="/favicon.svg"
                      height={35}
                    />
                    <h2 className="fw-bold mb-0">
                      Evaly
                    </h2>
                  </div>
                  <p className="text-muted small mt-2">
                    Welcome Back ! Enter Your Details
                  </p>
                </div>
                {/* FORM */}
                <Form onSubmit={handleSubmit}>

                  {/* EMAIL */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold small">
                      Email
                    </Form.Label>

                    <InputGroup>
                      <InputGroup.Text >
                        📧
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                      />
                    </InputGroup>
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
                        value={password}
                        onChange={(e) =>
                          setPassword(
                            e.target.value
                          )
                        }
                      />

                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          setShowPass(!showPass)
                        }
                      >
                        {showPass ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  {/* LOGIN BUTTON */}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 fw-semibold mb-3 d-flex justify-content-center align-items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          size="sm"
                          animation="border"
                        />

                        Signing In...
                      </>
                    ) : (
                      <>
                        Sign In
                        <FaArrowRight />
                      </>
                    )}
                  </Button>

                  <div className="text-center text-muted small mb-3">
                    OR
                  </div>

                  {/* GOOGLE */}
                  <Button
                    variant="danger"
                    className="w-100 mb-2"
                  >
                    <FaGoogle className="me-2" />
                    Continue with Google
                  </Button>

                  {/* APPLE */}
                  <Button
                    variant="dark"
                    className="w-100 mb-4"
                  >
                    <FaApple className="me-2" />
                    Continue with Apple
                  </Button>

                  {/* SIGNUP */}
                  <p className="text-center small mb-0">
                    No account?{" "}
                    <Link
                      to="/signup"
                      className="text-primary fw-semibold text-decoration-none"
                    >
                      Sign Up
                    </Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col lg={7} className="signin-right">
            <div className="signin-overlay"></div>
          </Col>

        </Row>
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
};

export default SignIn;