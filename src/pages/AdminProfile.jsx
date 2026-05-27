import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup, Badge } from 'react-bootstrap';
import { MdOutlineArrowBack, MdCameraAlt, MdLockOutline, MdHistory } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    firstName: 'Sumit',
    lastName: 'Baghel',
    email: 'sumit.baghel@evaly.com.bd',
    phone: '+880 1712-345678',
    timezone: '(GMT+06:00) Dhaka Time',
    role: 'Super Administrator',
    location: 'Dhaka HQ, Bangladesh'
  });

  const [notification, setNotification] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setNotification('Profile details updated successfully!');
    setTimeout(() => setNotification(''), 4000);
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    setNotification('Password updated successfully!');
    setTimeout(() => setNotification(''), 4000);
  };

  const logs = [
    { id: 1, action: 'User authentication login success', time: 'Today, 12:28 PM', ip: '103.45.22.18' },
    { id: 2, action: 'Updated database permissions rules for roles', time: 'Yesterday, 4:15 PM', ip: '103.45.22.18' },
    { id: 3, action: 'Generated quarterly financial coupon codes report', time: 'May 20, 2026, 11:10 AM', ip: '103.45.22.18' },
    { id: 4, action: 'Updated wholesale category tag: Cosmetics', time: 'May 18, 2026, 9:30 AM', ip: '192.168.1.1' }
  ];

  return (
    <Container fluid className="p-0">
      {/* Alert toast notification */}
      {notification && (
        <div className="alert alert-success premium-alert-toast" role="alert">
          {notification}
        </div>
      )}

      {/* Back navigation header */}
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
        <Button 
          variant="outline-secondary" 
          onClick={() => navigate('/')} 
          className="d-flex align-items-center gap-2 btn-sm rounded-pill px-3 py-2"
        >
          <MdOutlineArrowBack size={18} />
          Back to Dashboard
        </Button>
      </div>

      <Row className="gy-4">
        {/* ================= LEFT PROFILE CARD ================= */}
        <Col lg={4}>
          <Card className="premium-card">
            <Card.Body className="d-flex flex-column align-items-center text-center py-4">
              {/* Profile Avatar Wrapper */}
              <div className="profile-avatar-wrapper position-relative mb-3">
                <div className="profile-avatar-placeholder d-flex align-items-center justify-content-center text-white fw-bold">
                  SB
                </div>
                <button className="avatar-edit-badge d-flex align-items-center justify-content-center" aria-label="Upload photo">
                  <MdCameraAlt size={16} />
                </button>
              </div>

              <h4 className="fw-bold mb-1">{profile.firstName} {profile.lastName}</h4>
              <p className="text-secondary small mb-3">{profile.role}</p>

              <div className="d-flex gap-2 mb-4">
                <Badge bg="primary-subtle" className="text-primary px-3 py-2 rounded-pill font-weight-600">Active Session</Badge>
                <Badge bg="success-subtle" className="text-success px-3 py-2 rounded-pill font-weight-600">HQ Verified</Badge>
              </div>

              {/* Quick info list */}
              <div className="w-100 border-top pt-4 text-start">
                <h6 className="fw-bold text-dark mb-3">Account Details</h6>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-secondary small">Staff ID</span>
                  <span className="fw-semibold text-dark small">EV-88209</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-secondary small">HQ Location</span>
                  <span className="fw-semibold text-dark small">{profile.location.split(',')[0]}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-secondary small">Access Level</span>
                  <span className="text-danger fw-bold small">Level 5 (Max)</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-secondary small">Member Since</span>
                  <span className="fw-semibold text-dark small">Nov 2024</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* ================= RIGHT EDIT FORM / LOGS ================= */}
        <Col lg={8} className="d-flex flex-column gap-4">
          
          {/* Section 1: Profile Settings Form */}
          <Card className="premium-card">
            <Card.Body>
              <h5 className="fw-bold mb-4">Personal Settings</h5>
              <Form onSubmit={handleSave}>
                <Row className="gy-3 mb-4">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label className="text-secondary small fw-bold mb-2">First Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profile.firstName} 
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        required
                        className="profile-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label className="text-secondary small fw-bold mb-2">Last Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profile.lastName} 
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                        required
                        className="profile-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label className="text-secondary small fw-bold mb-2">Corporate Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        value={profile.email} 
                        disabled
                        className="profile-input bg-light"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label className="text-secondary small fw-bold mb-2">Mobile Phone</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profile.phone} 
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        required
                        className="profile-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="timezone">
                      <Form.Label className="text-secondary small fw-bold mb-2">System Timezone</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profile.timezone} 
                        onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                        required
                        className="profile-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="location">
                      <Form.Label className="text-secondary small fw-bold mb-2">HQ Address</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profile.location} 
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                        required
                        className="profile-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button type="submit" variant="primary" className="px-4 py-2">
                    Save General Changes
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {/* Section 2: Security & Password */}
          <Card className="premium-card">
            <Card.Body>
              <div className="d-flex align-items-center gap-2 mb-4">
                <MdLockOutline className="text-primary" size={22} />
                <h5 className="fw-bold mb-0">Update Password</h5>
              </div>
              <Form onSubmit={handlePasswordSave}>
                <Row className="gy-3 mb-4">
                  <Col md={4}>
                    <Form.Group controlId="currentPassword">
                      <Form.Label className="text-secondary small fw-bold mb-2">Current Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="••••••••" 
                        required 
                        className="profile-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="newPassword">
                      <Form.Label className="text-secondary small fw-bold mb-2">New Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="••••••••" 
                        required 
                        className="profile-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="confirmPassword">
                      <Form.Label className="text-secondary small fw-bold mb-2">Confirm New Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="••••••••" 
                        required 
                        className="profile-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button type="submit" variant="outline-primary" className="px-4 py-2">
                    Update Password credentials
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {/* Section 3: Audit trail log */}
          <Card className="premium-card">
            <Card.Body>
              <div className="d-flex align-items-center gap-2 mb-4">
                <MdHistory className="text-primary" size={22} />
                <h5 className="fw-bold mb-0">Security Audit Trail</h5>
              </div>
              <ListGroup variant="flush">
                {logs.map((log) => (
                  <ListGroup.Item key={log.id} className="d-flex align-items-center justify-content-between px-0 py-3 border-bottom border-light">
                    <div className="d-flex flex-column">
                      <span className="text-dark small fw-semibold">{log.action}</span>
                      <span className="text-secondary extra-small">{log.time}</span>
                    </div>
                    <Badge bg="light" className="text-secondary px-3 py-2 border rounded-pill">IP: {log.ip}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfile;
