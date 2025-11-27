"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/providers/auth-provider"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "",
    birthDate: "",
    birthPlace: "",
    occupation: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // TODO: Save profile changes
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">My Profile</h1>
            <p className="text-foreground/60">Manage your personal information</p>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "outline" : "default"}>
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>

        {/* Profile Card */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex gap-6 mb-8">
            {/* Avatar */}
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {user?.name?.charAt(0) || "U"}
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-1">{user?.name}</h2>
              <p className="text-foreground/60 mb-4">{user?.email}</p>
              <p className="text-sm text-foreground/50">Member since 2024</p>
            </div>
          </div>

          {/* Profile Form */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Birth Place</label>
                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about yourself..."
              />
            </div>

            {isEditing && (
              <div className="flex gap-4">
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Save Changes
                </Button>
                <Button onClick={() => setIsEditing(false)} variant="outline">
                  Cancel
                </Button>
              </div>
            )}
          </form>
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Documents */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Upload Documents</h3>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <p className="text-sm text-foreground/60 mb-4">Drag and drop files or click to browse</p>
              <input type="file" className="hidden" id="file-input" />
              <Button variant="outline" onClick={() => document.getElementById("file-input")?.click()}>
                Choose Files
              </Button>
            </div>
          </div>

          {/* Upload Photo */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Profile Photo</h3>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <p className="text-sm text-foreground/60 mb-4">Upload a profile picture</p>
              <input type="file" accept="image/*" className="hidden" id="photo-input" />
              <Button variant="outline" onClick={() => document.getElementById("photo-input")?.click()}>
                Choose Photo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
