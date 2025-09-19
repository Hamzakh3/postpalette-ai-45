import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  Shield, 
  Key, 
  CreditCard, 
  Bell,
  Save,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuperAdminSettings = () => {
  const navigate = useNavigate();
  
  // Mock settings state
  const [settings, setSettings] = useState({
    // Account Configuration
    companyName: "ContentAI Platform",
    supportEmail: "support@contentai.com",
    adminEmail: "admin@contentai.com",
    timezone: "UTC-5",
    
    // Authentication Settings
    sessionTimeout: "24",
    twoFactorEnabled: true,
    passwordPolicy: "strong",
    
    // System Settings
    maintenanceMode: false,
    debugLogging: false,
    emailNotifications: true,
    
    // Billing Configuration
    defaultCurrency: "USD",
    taxRate: "8.5",
    invoicePrefix: "INV-",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleSave = (section: string) => {
    // Handle save logic
    console.log(`Saving ${section} settings:`, settings);
  };

  const handlePasswordChange = () => {
    // Handle password change logic
    console.log("Password change requested");
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate("/super-admin")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gradient-primary mb-2">System Settings</h1>
            <p className="text-muted-foreground">Configure platform-wide settings and preferences</p>
          </div>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Account Configuration */}
          <TabsContent value="account" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Settings className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold">Account Configuration</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input 
                      id="company-name"
                      value={settings.companyName}
                      onChange={(e) => setSettings(prev => ({ ...prev, companyName: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="support-email">Support Email</Label>
                    <Input 
                      id="support-email"
                      type="email"
                      value={settings.supportEmail}
                      onChange={(e) => setSettings(prev => ({ ...prev, supportEmail: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input 
                      id="admin-email"
                      type="email"
                      value={settings.adminEmail}
                      onChange={(e) => setSettings(prev => ({ ...prev, adminEmail: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="timezone">Default Timezone</Label>
                    <Input 
                      id="timezone"
                      value={settings.timezone}
                      onChange={(e) => setSettings(prev => ({ ...prev, timezone: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button onClick={() => handleSave('account')} className="btn-hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Account Settings
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Authentication Settings */}
          <TabsContent value="authentication" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold">Authentication Settings</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="session-timeout">Session Timeout (hours)</Label>
                    <Input 
                      id="session-timeout"
                      type="number"
                      value={settings.sessionTimeout}
                      onChange={(e) => setSettings(prev => ({ ...prev, sessionTimeout: e.target.value }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all admin users</p>
                    </div>
                    <Switch 
                      checked={settings.twoFactorEnabled}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, twoFactorEnabled: checked }))}
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button onClick={() => handleSave('authentication')} className="btn-hero">
                    <Save className="h-4 w-4 mr-2" />
                    Save Authentication Settings
                  </Button>
                </div>
              </div>
            </Card>

            {/* Change Password */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Key className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold">Change Password</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input 
                      id="current-password"
                      type="password"
                      value={passwords.currentPassword}
                      onChange={(e) => setPasswords(prev => ({ ...prev, currentPassword: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input 
                      id="new-password"
                      type="password"
                      value={passwords.newPassword}
                      onChange={(e) => setPasswords(prev => ({ ...prev, newPassword: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input 
                      id="confirm-password"
                      type="password"
                      value={passwords.confirmPassword}
                      onChange={(e) => setPasswords(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    />
                  </div>
                  
                  <Button 
                    onClick={handlePasswordChange} 
                    className="btn-hero w-full"
                    disabled={!passwords.currentPassword || !passwords.newPassword || passwords.newPassword !== passwords.confirmPassword}
                  >
                    <Key className="h-4 w-4 mr-2" />
                    Update Password
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="system" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Settings className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold">System Configuration</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable maintenance mode for system updates</p>
                  </div>
                  <Switch 
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, maintenanceMode: checked }))}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Debug Logging</Label>
                    <p className="text-sm text-muted-foreground">Enable detailed system logging</p>
                  </div>
                  <Switch 
                    checked={settings.debugLogging}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, debugLogging: checked }))}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send system notifications via email</p>
                  </div>
                  <Switch 
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, emailNotifications: checked }))}
                  />
                </div>
                
                <div className="mt-6">
                  <Button onClick={() => handleSave('system')} className="btn-hero">
                    <Save className="h-4 w-4 mr-2" />
                    Save System Settings
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Billing Configuration */}
          <TabsContent value="billing" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold">Billing Configuration</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currency">Default Currency</Label>
                    <Input 
                      id="currency"
                      value={settings.defaultCurrency}
                      onChange={(e) => setSettings(prev => ({ ...prev, defaultCurrency: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                    <Input 
                      id="tax-rate"
                      type="number"
                      step="0.1"
                      value={settings.taxRate}
                      onChange={(e) => setSettings(prev => ({ ...prev, taxRate: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="invoice-prefix">Invoice Prefix</Label>
                    <Input 
                      id="invoice-prefix"
                      value={settings.invoicePrefix}
                      onChange={(e) => setSettings(prev => ({ ...prev, invoicePrefix: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button onClick={() => handleSave('billing')} className="btn-hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Billing Settings
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold">Security Configuration</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Security Audit Log</Label>
                  <div className="mt-2 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Recent security events and admin actions are logged here for audit purposes.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Download Security Report
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Bell className="h-4 w-4 mr-2" />
                    Configure Security Alerts
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SuperAdminSettings;