"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/providers/auth-provider"

export default function SettingsPage() {
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState<"privacy" | "notifications" | "account">("privacy")

  const settings = {
    privacy: [
      {
        id: "public-profile",
        label: "Public Profile",
        description: "Allow others to view your family tree",
        enabled: false,
      },
      {
        id: "show-email",
        label: "Show Email Address",
        description: "Display your email to family members",
        enabled: false,
      },
      {
        id: "tree-access",
        label: "Allow Tree Access",
        description: "Let family members view and edit your tree",
        enabled: true,
      },
    ],
    notifications: [
      {
        id: "email-updates",
        label: "Email Updates",
        description: "Receive email notifications about family activity",
        enabled: true,
      },
      {
        id: "member-requests",
        label: "Member Requests",
        description: "Get notified when someone joins your tree",
        enabled: true,
      },
      {
        id: "weekly-digest",
        label: "Weekly Digest",
        description: "Receive a weekly summary of family updates",
        enabled: false,
      },
    ],
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-1">Settings</h1>
          <p className="text-foreground/60">Manage your account and preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border">
          {["privacy", "notifications", "account"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Privacy Settings */}
        {activeTab === "privacy" && (
          <div className="space-y-4">
            {settings.privacy.map((setting) => (
              <div
                key={setting.id}
                className="bg-card border border-border rounded-lg p-6 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground">{setting.label}</p>
                  <p className="text-sm text-foreground/60">{setting.description}</p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={setting.enabled} className="w-5 h-5 rounded border-border" />
                </label>
              </div>
            ))}
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === "notifications" && (
          <div className="space-y-4">
            {settings.notifications.map((setting) => (
              <div
                key={setting.id}
                className="bg-card border border-border rounded-lg p-6 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground">{setting.label}</p>
                  <p className="text-sm text-foreground/60">{setting.description}</p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={setting.enabled} className="w-5 h-5 rounded border-border" />
                </label>
              </div>
            ))}
          </div>
        )}

        {/* Account Settings */}
        {activeTab === "account" && (
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Danger Zone</h3>
              <div className="space-y-3">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-medium text-red-900 mb-3">Delete Account</p>
                  <p className="text-sm text-red-800 mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Delete Account</Button>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-sm font-medium text-orange-900 mb-3">Sign Out</p>
                  <p className="text-sm text-orange-800 mb-4">Sign out from this device.</p>
                  <Button variant="outline" onClick={logout}>
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
