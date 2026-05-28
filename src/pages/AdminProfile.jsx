import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, Spinner } from 'react-bootstrap';
import { MdOutlineArrowBack, MdCameraAlt, MdLockOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { mockApi } from '../api/service.js';

const AdminProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    role: 'Administrator',
  });
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserStr = localStorage.getItem('user');
        if (storedUserStr) {
          const storedUser = JSON.parse(storedUserStr);
          if (storedUser && storedUser.id) {
            const response = await mockApi.get(`/users/${storedUser.id}`);
            const userData = response.data;
            setProfile({
              name: userData.name || '',
              email: userData.email || '',
              phone: userData.phone || '',
              address: userData.address || '',
              avatar: userData.avatar || '',
              role: 'Administrator',
            });
          }
        }
      } catch (err) {
        console.error("Error fetching user data", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const storedUserStr = localStorage.getItem('user');
      if (storedUserStr) {
        const storedUser = JSON.parse(storedUserStr);
        if (storedUser && storedUser.id) {
          await mockApi.put(`/users/${storedUser.id}`, {
            name: profile.name,
            phone: profile.phone,
            address: profile.address,
          });
          setNotification('Profile details updated successfully!');
          setTimeout(() => setNotification(''), 4000);
        }
      }
    } catch (err) {
      console.error("Failed to update profile", err);
    }
  };

  const handlePasswordSave = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setNotification('New passwords do not match!');
      setTimeout(() => setNotification(''), 4000);
      return;
    }
    
    try {
      const storedUserStr = localStorage.getItem('user');
      if (storedUserStr) {
        const storedUser = JSON.parse(storedUserStr);
        if (storedUser && storedUser.id) {
          await mockApi.put(`/users/${storedUser.id}`, {
            password: passwordForm.newPassword,
          });
          setNotification('Password updated successfully!');
          setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
          setTimeout(() => setNotification(''), 4000);
        }
      }
    } catch (err) {
      console.error("Failed to update password", err);
    }
  };

  // Header image is used for consistency with Header.jsx
  const headerIconUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256";
  const displayAvatar = headerIconUrl; // Force the same image as requested

  return (
    <Container fluid className="p-0">
      {/* Alert toast notification */}
      {notification && (
        <div className="alert alert-success premium-alert-toast" role="alert" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }}>
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
          <Card className="premium-card shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="d-flex flex-column align-items-center text-center py-5">
              {/* Profile Avatar Wrapper */}
              <div className="profile-avatar-wrapper position-relative mb-4">
                <img 
                  src={displayAvatar} 
                  alt="Avatar" 
                  className="rounded-circle shadow-sm" 
                  style={{ width: '130px', height: '130px', objectFit: 'cover', border: '4px solid #fff' }} 
                />
                <button 
                  className="avatar-edit-badge d-flex align-items-center justify-content-center shadow" 
                  aria-label="Upload photo" 
                  style={{ position: 'absolute', bottom: '5px', right: '5px', background: '#fff', border: 'none', borderRadius: '50%', width: '38px', height: '38px', cursor: 'pointer' }}
                >
                  <MdCameraAlt size={18} className="text-primary" />
                </button>
              </div>

              <h4 className="fw-bold mb-1">{profile.name || (loading ? 'Loading...' : 'User')}</h4>
              <p className="text-secondary small mb-3">{profile.role}</p>

              <div className="d-flex gap-2 mb-4">
                <Badge bg="primary-subtle" className="text-primary px-3 py-2 rounded-pill font-weight-600">Active Session</Badge>
                <Badge bg="success-subtle" className="text-success px-3 py-2 rounded-pill font-weight-600">Verified</Badge>
              </div>

              {/* Quick info list */}
              <div className="w-100 border-top pt-4 text-start">
                <h6 className="fw-bold text-dark mb-3">Account Details</h6>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-secondary small">Staff ID</span>
                  <span className="fw-semibold text-dark small">EV-88209</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-secondary small">Address</span>
                  <span className="fw-semibold text-dark small text-end" style={{ maxWidth: '60%' }}>{profile.address || (loading ? '...' : 'N/A')}</span>
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

        {/* ================= RIGHT EDIT FORM ================= */}
        <Col lg={8} className="d-flex flex-column gap-4">
          
          {/* Section 1: Profile Settings Form */}
          <Card className="premium-card shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4 p-md-5">
              <h5 className="fw-bold mb-4">Personal Settings</h5>
              
              {loading ? (
                <div className="d-flex justify-content-center py-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <Form onSubmit={handleSave}>
                  <Row className="gy-4 mb-4">
                    <Col md={12}>
                      <Form.Group controlId="name">
                        <Form.Label className="text-secondary small fw-bold mb-2">Full Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          value={profile.name} 
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          required
                          className="profile-input p-3 bg-white border-0 text-dark shadow-sm"
                          style={{ borderRadius: '10px' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="email">
                        <Form.Label className="text-secondary small fw-bold mb-2">Email Address</Form.Label>
                        <Form.Control 
                          type="email" 
                          value={profile.email} 
                          disabled
                          className="profile-input p-3 bg-white border-0 opacity-75 text-dark shadow-sm"
                          style={{ borderRadius: '10px' }}
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
                          className="profile-input p-3 bg-white border-0 text-dark shadow-sm"
                          style={{ borderRadius: '10px' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="address">
                        <Form.Label className="text-secondary small fw-bold mb-2">Home Address</Form.Label>
                        <Form.Control 
                          type="text" 
                          value={profile.address} 
                          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                          required
                          className="profile-input p-3 bg-white border-0 text-dark shadow-sm"
                          style={{ borderRadius: '10px' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end">
                    <Button type="submit" variant="primary" className="px-4 py-2" style={{ borderRadius: '8px' }}>
                      Save Changes
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>

          {/* Section 2: Security & Password */}
          <Card className="premium-card shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4 p-md-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <MdLockOutline className="text-primary" size={22} />
                <h5 className="fw-bold mb-0">Update Password</h5>
              </div>
              <Form onSubmit={handlePasswordSave}>
                <Row className="gy-4 mb-4">
                  <Col md={4}>
                    <Form.Group controlId="currentPassword">
                      <Form.Label className="text-secondary small fw-bold mb-2">Current Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="••••••••" 
                        required
                        value={passwordForm.currentPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                        className="profile-input p-3 bg-white border-0 text-dark shadow-sm"
                        style={{ borderRadius: '10px' }}
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
                        value={passwordForm.newPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                        className="profile-input p-3 bg-white border-0 text-dark shadow-sm"
                        style={{ borderRadius: '10px' }}
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
                        value={passwordForm.confirmPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                        className="profile-input p-3 bg-white border-0 text-dark shadow-sm"
                        style={{ borderRadius: '10px' }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button type="submit" variant="outline-primary" className="px-4 py-2" style={{ borderRadius: '8px' }}>
                    Update Password
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfile;
