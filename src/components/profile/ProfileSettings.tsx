// src/components/profile/ProfileSettings.tsx
"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import api from "@/services/api";
import { currency } from "@/core/common/selectOption/selectOption";
import Select from "react-select";

export default function ProfileSettings() {
  const { user, loading: authLoading } = useAuth();
  const [name, setName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currencyContext, setCurrencyContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setCurrencyContext(user.currency_context || "");
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword && newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }
    
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const updateData: any = {
        name,
        currency_context: currencyContext,
      };
      
      if (newPassword) {
        updateData.current_password = currentPassword;
        updateData.new_password = newPassword;
      }
      
      const response = await api.put('/users/me', updateData);
      setSuccess("Profile updated successfully");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="content">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Profile Settings</h5>
      </div>
      <div className="card-body">
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
          <div className="row form-group">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="row form-group mt-3">
            <label className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control"
                value={user?.email || ""}
                disabled
              />
              <small className="form-text text-muted">Email cannot be changed</small>
            </div>
          </div>
          
          <div className="row form-group mt-3">
            <label className="col-sm-3 col-form-label">Currency</label>
            <div className="col-sm-9">
              <Select
                className="select"
                options={currency}
                value={currency.find(option => option.value === currencyContext)}
                onChange={(selected) => setCurrencyContext(selected?.value || "")}
              />
            </div>
          </div>
          
          <div className="row form-group mt-3">
            <label className="col-sm-3 col-form-label">Current Password</label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <small className="form-text text-muted">Required only if changing password</small>
            </div>
          </div>
          
          <div className="row form-group mt-3">
            <label className="col-sm-3 col-form-label">New Password</label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          
          <div className="row form-group mt-3">
            <label className="col-sm-3 col-form-label">Confirm New Password</label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          
          <div className="text-end mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}