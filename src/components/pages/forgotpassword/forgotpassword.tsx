// src/components/pages/forgotpassword/forgotpassword.tsx
"use client";
/* eslint-disable-next-line @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { all_routes } from "@/data/all_routes";
import api from "@/services/api";

export default function ForgotpasswordComponent() {
  const route = all_routes;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      // Assuming the API has a password reset endpoint
      await api.post('/auth/forgot-password', { email });
      setSuccess("Password reset instructions have been sent to your email.");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to process your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="login-wrapper bg-img">
          <div className="login-content">
            <div className="login-userset">
              <div className="login-logo logo-normal">
                <img src="assets/img/logo.png" alt="img" />
              </div>
              <Link href={route.dashboard} className="login-logo logo-white">
                <img src="assets/img/logo-white.png" alt="" />
              </Link>
              <div className="login-userheading">
                <h3>Forgot Password?</h3>
                <h4>Don't worry! it happens. Please enter the address <br />associated with your account.</h4>
              </div>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="alert alert-success" role="alert">
                  {success}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email <span className="text-danger"> *</span></label>
                  <div className="input-group">
                    <input 
                      type="email" 
                      className="form-control border-end-0" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="input-group-text border-start-0"><i className="ti ti-mail"></i></span>
                  </div>
                </div>
                <div className="form-login">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
                <div className="signinform text-center">
                  <h4>Remember your password? <Link href={route.signin} className="hover-a">Login</Link></h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}